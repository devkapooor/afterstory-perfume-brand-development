'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { V2Product } from '../../content/v2';

type Commerce = typeof import('../../content/v2').v2Commerce;

export function V2ProductDetail({
  product,
  commerce,
}: {
  product: V2Product;
  commerce: Commerce;
}) {
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const unavailable = product.stock < 1;

  function addToCart() {
    if (unavailable) return;
    try {
      const current = JSON.parse(
        window.localStorage.getItem('afterstory-v2-cart') || '[]',
      ) as Array<{ code: string; quantity: number }>;
      const existing = current.find((line) => line.code === product.code);
      const next = existing
        ? current.map((line) =>
            line.code === product.code
              ? {
                  ...line,
                  quantity: Math.min(line.quantity + quantity, product.stock),
                }
              : line,
          )
        : [...current, { code: product.code, quantity }];
      window.localStorage.setItem('afterstory-v2-cart', JSON.stringify(next));
      setAdded(true);
    } catch {
      setAdded(false);
    }
  }

  return (
    <div className="v2-shell v2-product-page">
      <header className="v2-header">
        <Link className="v2-logo" href="/v2">
          AFTERSTORY <span>/ CATALOG</span>
        </Link>
        <nav aria-label="Primary">
          <Link href="/v2#collection">Shop</Link>
          <Link href="/v2#story">Our story</Link>
          <Link href="/v2#collection">Cart</Link>
        </nav>
      </header>
      <main className="v2-product-main">
        <Link className="v2-back-link" href="/v2#collection">
          ← Back to collection
        </Link>
        <div className="v2-product-grid">
          <div className="v2-product-image">
            <Image
              src={
                product.image || '/images/shop/three-scents-riverfront-v1.webp'
              }
              alt={`${product.name}, AFTERSTORY 50 ML perfume`}
              width={1122}
              height={1402}
              priority
            />
          </div>
          <article className="v2-product-copy">
            <p className="v2-eyebrow">Chapter {product.code}</p>
            <h1>{product.name}</h1>
            <p className="v2-product-story">{product.story}</p>
            <p className="v2-product-description">{product.description}</p>
            <div className="v2-product-price">
              <strong>\u20B9{commerce.price.toLocaleString('en-IN')}</strong>
              <span>MRP \u20B9{commerce.mrp.toLocaleString('en-IN')}</span>
              <span>Inclusive of GST</span>
            </div>
            <p className="v2-product-format">{commerce.format}</p>
            <div className="v2-product-purchase">
              <div>
                <label className="v2-quantity-label" htmlFor={`quantity-${product.code}`}>
                  Quantity
                </label>
                <div className="v2-quantity-control">
                  <button aria-label="Decrease quantity" type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} disabled={quantity === 1 || unavailable}>-</button>
                  <output id={`quantity-${product.code}`}>{quantity}</output>
                  <button aria-label="Increase quantity" type="button" onClick={() => setQuantity((value) => Math.min(product.stock, value + 1))} disabled={quantity === product.stock || unavailable}>+</button>
                </div>
              </div>
              <button className="v2-button v2-button-ember v2-product-button" type="button" onClick={addToCart} disabled={unavailable}>
                {unavailable ? 'Under Preparation' : added ? 'Added to bag' : `Add ${quantity} to bag`}
              </button>
            </div>
            <div className="v2-product-details">
              <details open><summary>Scent profile</summary><p>{product.profile}</p></details>
              <details><summary>How to wear</summary><p>Spray 2-4 times on pulse points or clothing. Avoid eyes, face, broken skin, heat, and open flames. For external use only.</p></details>
              <details><summary>Shipping and payment</summary><p>{commerce.delivery} {commerce.payment}</p></details>
              <details><summary>Returns and delivery issues</summary><p>{commerce.returns} Read the full <Link href="/v2/policies">shipping and returns policy</Link>.</p></details>
            </div>
          </article>
        </div>
      </main>
      <div className="v2-mobile-purchase" aria-label="Add product to bag">
        <span><strong>₹{commerce.price.toLocaleString('en-IN')}</strong><small>Inclusive of GST</small></span>
        <button className="v2-button v2-button-ember" type="button" onClick={addToCart} disabled={unavailable}>
          {unavailable ? 'Under Preparation' : added ? 'Added to bag' : 'Add to bag'}
        </button>
      </div>
    </div>
  );
}
