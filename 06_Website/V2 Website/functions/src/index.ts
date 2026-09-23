import { createHmac, timingSafeEqual } from 'node:crypto';
import type { Request, Response } from 'express';
import { onRequest } from 'firebase-functions/v2/https';
import { defineJsonSecret } from 'firebase-functions/params';

const razorpayTestCredentials = defineJsonSecret('RAZORPAY_TEST_CREDENTIALS');
const allowedOrigins = new Set([
  'https://afterstory.in',
  'https://www.afterstory.in',
  'http://localhost:3000',
  'http://localhost:4175',
]);

const catalog = {
  '02': { name: 'TOBACCO BLOOM', unitAmount: 59900 },
  '03': { name: 'FIRST LIGHT', unitAmount: 59900 },
  '06': { name: 'WHITE MUSK', unitAmount: 59900 },
} as const;

type CatalogCode = keyof typeof catalog;
type CartLine = { code: CatalogCode; quantity: number };
type Credentials = { keyId: string; keySecret: string };

function setCors(request: Request, response: Response) {
  const origin = request.get('origin');
  if (origin && allowedOrigins.has(origin)) {
    response.set('Access-Control-Allow-Origin', origin);
    response.set('Vary', 'Origin');
  }
  response.set('Access-Control-Allow-Headers', 'Content-Type');
  response.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
}

function readCredentials(): Credentials {
  const credentials = razorpayTestCredentials.value() as Credentials;
  if (!credentials?.keyId?.startsWith('rzp_test_') || !credentials.keySecret) {
    throw new Error('Razorpay test credentials are not configured.');
  }
  return credentials;
}

function toBasicAuth(credentials: Credentials) {
  return `Basic ${Buffer.from(`${credentials.keyId}:${credentials.keySecret}`).toString('base64')}`;
}

function parseCart(body: unknown): CartLine[] | null {
  if (!body || typeof body !== 'object' || !Array.isArray((body as { items?: unknown }).items)) {
    return null;
  }

  const items = (body as { items: unknown[] }).items;
  if (items.length < 1 || items.length > 3) return null;

  const seen = new Set<string>();
  const lines: CartLine[] = [];
  for (const item of items) {
    const line = item as Partial<CartLine>;
    const code = line.code;
    const quantity = line.quantity;
    if (typeof code !== 'string' || !(code in catalog) || typeof quantity !== 'number' || !Number.isInteger(quantity) || quantity < 1 || quantity > 3 || seen.has(code)) {
      return null;
    }
    seen.add(code);
    lines.push({ code: code as CatalogCode, quantity });
  }
  return lines;
}

function secureMatch(expected: string, provided: string) {
  const expectedBuffer = Buffer.from(expected);
  const providedBuffer = Buffer.from(provided);
  return expectedBuffer.length === providedBuffer.length && timingSafeEqual(expectedBuffer, providedBuffer);
}

export const createRazorpayTestOrder = onRequest(
  { cors: false, maxInstances: 5, region: 'asia-south1', secrets: [razorpayTestCredentials] },
  async (request, response) => {
    setCors(request, response);
    if (request.method === 'OPTIONS') {
      response.status(204).send('');
      return;
    }
    if (request.method !== 'POST') {
      response.status(405).json({ error: 'POST only' });
      return;
    }

    const items = parseCart(request.body);
    if (!items) {
      response.status(400).json({ error: 'Use valid launch product codes and quantities.' });
      return;
    }

    try {
      const credentials = readCredentials();
      const amount = items.reduce((total, item) => total + catalog[item.code].unitAmount * item.quantity, 0);
      const receipt = `ast_test_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
      const razorpayResponse = await fetch('https://api.razorpay.com/v1/orders', {
        method: 'POST',
        headers: {
          Authorization: toBasicAuth(credentials),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, currency: 'INR', receipt, notes: { environment: 'test', source: 'afterstory-v2' } }),
      });
      if (!razorpayResponse.ok) {
        console.error('Razorpay order creation failed:', razorpayResponse.status);
        response.status(502).json({ error: 'Payment service could not create a test order.' });
        return;
      }
      const order = await razorpayResponse.json() as { id: string; amount: number; currency: string };
      response.status(201).json({ keyId: credentials.keyId, orderId: order.id, amount: order.amount, currency: order.currency });
    } catch (error) {
      console.error('Test order configuration error:', error);
      response.status(500).json({ error: 'Test payment is not configured.' });
    }
  },
);

export const verifyRazorpayTestPayment = onRequest(
  { cors: false, maxInstances: 5, region: 'asia-south1', secrets: [razorpayTestCredentials] },
  async (request, response) => {
    setCors(request, response);
    if (request.method === 'OPTIONS') {
      response.status(204).send('');
      return;
    }
    if (request.method !== 'POST') {
      response.status(405).json({ error: 'POST only' });
      return;
    }

    const { razorpay_order_id: orderId, razorpay_payment_id: paymentId, razorpay_signature: signature } = request.body ?? {};
    if (![orderId, paymentId, signature].every((value) => typeof value === 'string')) {
      response.status(400).json({ error: 'Missing payment verification fields.' });
      return;
    }

    try {
      const credentials = readCredentials();
      const expectedSignature = createHmac('sha256', credentials.keySecret).update(`${orderId}|${paymentId}`).digest('hex');
      if (!secureMatch(expectedSignature, signature)) {
        response.status(400).json({ verified: false, status: 'failed' });
        return;
      }

      const paymentResponse = await fetch(`https://api.razorpay.com/v1/payments/${paymentId}`, {
        headers: { Authorization: toBasicAuth(credentials) },
      });
      if (!paymentResponse.ok) {
        response.status(502).json({ error: 'Payment service could not verify this payment.' });
        return;
      }

      const payment = await paymentResponse.json() as { order_id?: string; status?: string };
      const verified = payment.order_id === orderId && payment.status === 'captured';
      response.status(200).json({ verified, status: verified ? 'success' : 'failed' });
    } catch (error) {
      console.error('Test payment verification error:', error);
      response.status(500).json({ error: 'Test payment could not be verified.' });
    }
  },
);
