'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { v2Products, type V2Product } from '../../content/v2';

type Commerce = typeof import('../../content/v2').v2Commerce;
type CartLine = { code: string; quantity: number };

function money(value: number) {
  return '\u20B9' + value.toLocaleString('en-IN');
}

export function V2Storefront({ commerce }: { commerce: Commerce }) {
  const [cart, setCart] = useState<CartLine[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      return JSON.parse(
        window.localStorage.getItem('afterstory-v2-cart') || '[]',
      ) as CartLine[];
    } catch {
      return [];
    }
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('afterstory-v2-cart', JSON.stringify(cart));
  }, [cart]);

  const visibleProducts = useMemo(
    () =>
      v2Products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );
  const cartCount = cart.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = cart.reduce(
    (sum, line) => sum + line.quantity * commerce.price,
    0,
  );
  const delivery =
    subtotal > 0 && subtotal <= commerce.freeDeliveryAbove
      ? commerce.deliveryFee
      : 0;

  function add(product: V2Product) {
    if (!product.launch || product.stock < 1) return;
    setCart((current) =>
      current.some((line) => line.code === product.code)
        ? current.map((line) =>
            line.code === product.code
              ? {
                  ...line,
                  quantity: Math.min(line.quantity + 1, product.stock),
                }
              : line,
          )
        : [...current, { code: product.code, quantity: 1 }],
    );
    setCartOpen(true);
  }
  function remove(code: string) {
    setCart((current) => current.filter((line) => line.code !== code));
  }

  return (
    <div className="v2-shell">
      <a className="v2-skip" href="#v2-main">
        Skip to content
      </a>
      <header className="v2-header">
        <Link className="v2-logo" href="/v2">
          AFTERSTORY <span>/ CATALOG</span>
        </Link>
        <nav aria-label="Primary">
          <a href="#collection">Shop</a>
          <a href="#story">Our story</a>
          <button type="button" onClick={() => setCartOpen(true)}>
            Cart <span className="v2-cart-count">{cartCount}</span>
          </button>
        </nav>
      </header>
      <main id="v2-main">
        <section className="v2-hero">
          <div>
            <p className="v2-eyebrow">Independent fragrance / India</p>
            <h1>
              Fragrance for what remains <em>after the moment.</em>
            </h1>
            <p className="v2-hero-copy">
              A quiet collection of extrait de parfums, made to be remembered.
            </p>
            <a className="v2-button v2-button-ember" href="#collection">
              Explore the collection <span>↓</span>
            </a>
          </div>
          <div className="v2-hero-image">
            <Image
              src="/images/shop/three-scents-riverfront-v1.webp"
              alt="Three AFTERSTORY perfume bottles beside a sunlit window"
              width="1536"
              height="1024"
              priority
            />
          </div>
        </section>
        <section className="v2-collection" id="collection">
          <div className="v2-section-head">
            <div>
              <p className="v2-eyebrow">The first collection</p>
              <h2>Three scents to begin with.</h2>
            </div>
            <label className="v2-search">
              Search chapters
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search"
                aria-label="Search fragrances"
              />
            </label>
          </div>
          <div className="v2-grid">
            {visibleProducts.map((product) => (
              <article
                className={`v2-card ${product.launch ? '' : 'v2-card-soon'}`}
                key={product.code}
              >
                <Link
                  className="v2-card-link"
                  href={`/v2/product/${product.code}`}
                >
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={`${product.name}, AFTERSTORY 50 ML perfume`}
                      width="1122"
                      height="1402"
                      loading="lazy"
                    />
                  ) : (
                    <div className="v2-placeholder" aria-hidden="true">
                      <span>{product.code}</span>
                    </div>
                  )}
                  <div className="v2-card-meta">
                    <p className="v2-eyebrow">Chapter {product.code}</p>
                    <h3>{product.name}</h3>
                    <p>{product.profile}</p>
                  </div>
                </Link>
                <div className="v2-card-meta v2-card-purchase">
                  <div className="v2-card-bottom">
                    <strong>{money(commerce.price)}</strong>
                    <button
                      type="button"
                      onClick={() => add(product)}
                      disabled={product.stock < 1}
                    >
                      {product.stock > 0 ? 'Add to cart' : 'Under Preparation'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="v2-story" id="story">
          <p className="v2-eyebrow">The AFTERSTORY approach</p>
          <h2>Every scent begins a story. The rest becomes yours.</h2>
          <p>
            Small-batch fragrances with a clear point of view. Each composition
            is made as an invitation to remember a moment in your own way.
          </p>
        </section>
        <section className="v2-details" id="shipping">
          <div>
            <p className="v2-eyebrow">Shipping</p>
            <p>{commerce.delivery}</p>
          </div>
          <div>
            <p className="v2-eyebrow">The essentials</p>
            <p>
              {commerce.format}. {commerce.payment}
            </p>
          </div>
          <div>
            <p className="v2-eyebrow">Returns</p>
            <p>{commerce.returns}</p>
          </div>
        </section>
      </main>
      <footer className="v2-footer">
        <div>
          <p className="v2-footer-line">The moment ends. The story stays.</p>
          <p>© 2026 AFTERSTORY / Amelia Enterprises</p>
        </div>
        <div className="v2-footer-links">
          <a href="mailto:afterstory@gmail.com">Contact</a>
          <a
            href="https://wa.me/9161666633"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <Link href="/v2/policies">Shipping &amp; returns</Link>
          <Link href="/v2/policies">Policies</Link>
        </div>
      </footer>
      {cartOpen && (
        <dialog open className="v2-overlay" aria-labelledby="cart-title">
          <div className="v2-cart">
            <div className="v2-cart-head">
              <h2 id="cart-title">Your cart</h2>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
              >
                ×
              </button>
            </div>
            {cart.length === 0 ? (
              <p className="v2-empty">Your cart is waiting for a scent.</p>
            ) : (
              <>
                {cart.map((line) => {
                  const product = v2Products.find(
                    (item) => item.code === line.code,
                  )!;
                  return (
                    <div className="v2-line" key={line.code}>
                      <div>
                        <p>{product.name}</p>
                        <small>50 ML / quantity {line.quantity}</small>
                      </div>
                      <strong>{money(line.quantity * commerce.price)}</strong>
                      <button type="button" onClick={() => remove(line.code)}>
                        Remove
                      </button>
                    </div>
                  );
                })}
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
      )}
    </div>
  );
}
