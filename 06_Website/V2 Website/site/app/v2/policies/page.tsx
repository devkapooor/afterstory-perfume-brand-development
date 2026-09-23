import type { Metadata } from 'next';
import Link from 'next/link';
import '../v2.css';

export const metadata: Metadata = {
  title: 'Policies | AFTERSTORY',
  description: 'Shipping, returns, privacy, and terms for AFTERSTORY orders.',
  alternates: { canonical: '/v2/policies' },
};

export default function PoliciesPage() {
  return (
    <div className="v2-shell">
      <header className="v2-header">
        <Link className="v2-logo" href="/v2">
          AFTERSTORY <span>/ POLICIES</span>
        </Link>
        <nav aria-label="Primary">
          <Link href="/v2#collection">Shop</Link>
          <Link href="/v2#story">Our story</Link>
        </nav>
      </header>
      <main className="v2-policy-main">
        <p className="v2-eyebrow">Before you order</p>
        <h1>Clear terms, quietly stated.</h1>
        <p className="v2-policy-intro">
          AFTERSTORY is operated by Amelia Enterprises. For support, order
          questions, or grievances, contact Dev Kapoor at afterstory@gmail.com
          or +91 9161666633. Support hours are 9:00 AM to 6:00 PM IST, with a
          response aim of within 24 hours.
        </p>

        <section>
          <h2>Shipping</h2>
          <p>
            We deliver across India. Delivery is INR 100 for orders of INR 999
            or less, and free for orders above INR 999. Orders are prepared
            after confirmed payment and normally dispatch within 2-3 business
            days. Delivery is expected within a further 2-3 business days.
          </p>
        </section>
        <section>
          <h2>Returns, refunds, and cancellations</h2>
          <p>
            Fragrances are personal-use products, so returns and exchanges are
            not accepted after delivery, except where required by applicable
            law or where an item is confirmed as damaged, incorrect, or
            materially defective on arrival.
          </p>
          <p>
            Delivery issues must be reported within 48 hours with the order
            number and an unboxing video showing the unopened package, shipping
            label, package opening, and received item. Paid orders cannot be
            cancelled after successful payment, except where required by law.
          </p>
        </section>
        <section>
          <h2>Privacy</h2>
          <p>
            We use your name, email address, phone number, delivery address,
            order details, and payment/order reference information only to
            process and support your order, deliver it, issue invoices, keep
            required records, and prevent fraud. Payment-card details are
            processed by the configured payment provider and are not stored by
            AFTERSTORY.
          </p>
          <p>
            Information is shared only with providers needed to process payment
            or deliver your order, or where required by law. Marketing messages
            require separate consent. Contact afterstory@gmail.com for data
            access, correction, or optional-marketing consent requests.
          </p>
        </section>
        <section>
          <h2>Terms of sale</h2>
          <p>
            Prices include applicable GST. Cash on delivery is not available;
            an order is accepted only after successful payment confirmation.
            Fragrance perception and wear experience vary by person. We do not
            make unverified longevity, projection, medical, or performance
            claims.
          </p>
          <p>
            Products marked Under Preparation are unavailable to purchase at
            that time. We may correct an obvious pricing, stock, or listing
            error before dispatch and will contact you if a paid order cannot
            be fulfilled.
          </p>
        </section>
      </main>
    </div>
  );
}
