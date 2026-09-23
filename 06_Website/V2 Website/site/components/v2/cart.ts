import type { V2Product } from '../../content/v2';

export type CartLine = { code: string; quantity: number };

const cartStorageKey = 'afterstory-v2-cart';

export function loadCart(): CartLine[] {
  try {
    return JSON.parse(
      window.localStorage.getItem(cartStorageKey) || '[]',
    ) as CartLine[];
  } catch {
    return [];
  }
}

export function saveCart(cart: CartLine[]) {
  window.localStorage.setItem(cartStorageKey, JSON.stringify(cart));
}

export function addProductToCart(
  cart: CartLine[],
  product: V2Product,
  quantity = 1,
) {
  if (!product.launch || product.stock < 1) return cart;

  const existing = cart.find((line) => line.code === product.code);
  return existing
    ? cart.map((line) =>
        line.code === product.code
          ? {
              ...line,
              quantity: Math.min(line.quantity + quantity, product.stock),
            }
          : line,
      )
    : [
        ...cart,
        { code: product.code, quantity: Math.min(quantity, product.stock) },
      ];
}

export function removeProductFromCart(cart: CartLine[], code: string) {
  return cart.filter((line) => line.code !== code);
}
