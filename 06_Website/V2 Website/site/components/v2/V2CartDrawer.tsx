import { v2Products, type V2Commerce } from '../../content/v2';
import type { CartLine } from './cart';

const money = (value: number) => `₹${value.toLocaleString('en-IN')}`;

export function V2CartDrawer({
  cart,
  commerce,
  onClose,
  onRemove,
}: {
  cart: CartLine[];
  commerce: V2Commerce;
  onClose: () => void;
  onRemove: (code: string) => void;
}) {
  const subtotal = cart.reduce(
    (sum, line) => sum + line.quantity * commerce.price,
    0,
  );
  const delivery =
    subtotal > 0 && subtotal <= commerce.freeDeliveryAbove
      ? commerce.deliveryFee
      : 0;
  return (
    <dialog open className="v2-overlay" aria-labelledby="cart-title">
      <div className="v2-cart">
        <div className="v2-cart-head">
          <h2 id="cart-title">Your cart</h2>
          <button type="button" onClick={onClose} aria-label="Close cart">
            x
          </button>
        </div>
        {cart.length === 0 ? (
          <p className="v2-empty">Your cart is waiting for a scent.</p>
        ) : (
          <>
            <div>
              {cart.map((line) => {
                const product = v2Products.find(
                  (item) => item.code === line.code,
                );
                return product ? (
                  <div className="v2-line" key={line.code}>
                    <div>
                      <p>{product.name}</p>
                      <small>50 ML / quantity {line.quantity}</small>
                    </div>
                    <strong>{money(line.quantity * commerce.price)}</strong>
                    <button type="button" onClick={() => onRemove(line.code)}>
                      Remove
                    </button>
                  </div>
                ) : null;
              })}
            </div>
            <div className="v2-totals">
              <span>Subtotal</span>
              <strong>{money(subtotal)}</strong>
              <span>Delivery</span>
              <strong>{delivery ? money(delivery) : 'Free'}</strong>
              <span className="v2-total-label">Total</span>
              <strong className="v2-total-label">
                {money(subtotal + delivery)}
              </strong>
            </div>
            <p className="v2-cart-note">
              Checkout and payment setup will be enabled after the payment
              integration is approved.
            </p>
          </>
        )}
      </div>
    </dialog>
  );
}
