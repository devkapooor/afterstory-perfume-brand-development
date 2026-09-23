'use client';

import Link from 'next/link';
import type { V2Commerce, V2Product } from '../../content/v2';
import { addProductToCart, loadCart, saveCart } from './cart';
import { V2Footer } from './V2Footer';
import { V2Header } from './V2Header';
import { V2ProductDisclosures } from './V2ProductDisclosures';
import { V2ProductGallery } from './V2ProductGallery';
import { V2ProductPurchase } from './V2ProductPurchase';

export function V2ProductDetail({
  product,
  commerce,
}: {
  product: V2Product;
  commerce: V2Commerce;
}) {
  function addToCart(quantity: number) {
    saveCart(addProductToCart(loadCart(), product, quantity));
  }

  return (
    <div className="v2-shell v2-product-page">
      <V2Header />
      <main className="v2-product-main">
        <Link className="v2-back-link" href="/v2#collection">
          Back to collection
        </Link>
        <div className="v2-product-grid">
          <V2ProductGallery product={product} />
          <article className="v2-product-copy">
            <p className="v2-eyebrow">Chapter {product.code}</p>
            <h1>{product.name}</h1>
            <p className="v2-product-story">{product.story}</p>
            <p className="v2-product-description">{product.description}</p>
            <div className="v2-product-price">
              <strong>₹{commerce.price.toLocaleString('en-IN')}</strong>
              <span>MRP ₹{commerce.mrp.toLocaleString('en-IN')}</span>
              <span>Inclusive of GST</span>
            </div>
            <p className="v2-product-format">{commerce.format}</p>
            <V2ProductPurchase
              price={commerce.price}
              stock={product.stock}
              onAdd={addToCart}
            />
            <V2ProductDisclosures product={product} commerce={commerce} />
          </article>
        </div>
      </main>
      <V2Footer />
    </div>
  );
}
