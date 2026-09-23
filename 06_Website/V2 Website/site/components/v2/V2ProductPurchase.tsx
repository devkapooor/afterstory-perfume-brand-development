import { useState } from 'react';

export function V2ProductPurchase({
  price,
  stock,
  onAdd,
}: {
  price: number;
  stock: number;
  onAdd: (quantity: number) => void;
}) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const unavailable = stock < 1;
  function add() {
    onAdd(quantity);
    setAdded(true);
  }
  const label = unavailable
    ? 'Under Preparation'
    : added
      ? 'Added to bag'
      : `Add ${quantity} to bag`;
  return (
    <>
      <div className="v2-product-purchase">
        <div>
          <label className="v2-quantity-label" htmlFor="product-quantity">
            Quantity
          </label>
          <div className="v2-quantity-control">
            <button
              aria-label="Decrease quantity"
              type="button"
              onClick={() => setQuantity((value) => Math.max(1, value - 1))}
              disabled={quantity === 1 || unavailable}
            >
              -
            </button>
            <output id="product-quantity">{quantity}</output>
            <button
              aria-label="Increase quantity"
              type="button"
              onClick={() => setQuantity((value) => Math.min(stock, value + 1))}
              disabled={quantity === stock || unavailable}
            >
              +
            </button>
          </div>
        </div>
        <button
          className="v2-button v2-button-ember v2-product-button"
          type="button"
          onClick={add}
          disabled={unavailable}
        >
          {label}
        </button>
      </div>
      <div className="v2-mobile-purchase" aria-label="Add product to bag">
        <span>
          <strong>₹{price.toLocaleString('en-IN')}</strong>
          <small>Inclusive of GST</small>
        </span>
        <button
          className="v2-button v2-button-ember"
          type="button"
          onClick={add}
          disabled={unavailable}
        >
          {unavailable
            ? 'Under Preparation'
            : added
              ? 'Added to bag'
              : 'Add to bag'}
        </button>
      </div>
    </>
  );
}
