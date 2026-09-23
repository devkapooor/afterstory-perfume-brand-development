'use client';

import { useEffect, useState } from 'react';
import { v2Products, type V2Commerce, type V2Product } from '../../content/v2';
import {
  addProductToCart,
  loadCart,
  removeProductFromCart,
  saveCart,
  type CartLine,
} from './cart';
import { V2CartDrawer } from './V2CartDrawer';
import { V2Collection } from './V2Collection';
import { V2Footer } from './V2Footer';
import { V2Header } from './V2Header';
import { V2Hero } from './V2Hero';
import { V2StorefrontSections } from './V2StorefrontSections';

export function V2Storefront({ commerce }: { commerce: V2Commerce }) {
  const [cart, setCart] = useState<CartLine[]>(() =>
    typeof window === 'undefined' ? [] : loadCart(),
  );
  const [cartOpen, setCartOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => saveCart(cart), [cart]);

  const products = v2Products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()),
  );
  const cartCount = cart.reduce((sum, line) => sum + line.quantity, 0);
  const add = (product: V2Product) => {
    setCart((current) => addProductToCart(current, product));
    setCartOpen(true);
  };

  return (
    <div className="v2-shell">
      <a className="v2-skip" href="#v2-main">
        Skip to content
      </a>
      <V2Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <main id="v2-main">
        <V2Hero />
        <V2Collection
          commerce={commerce}
          products={products}
          query={query}
          onQueryChange={setQuery}
          onAdd={add}
        />
        <V2StorefrontSections commerce={commerce} />
      </main>
      <V2Footer />
      {cartOpen && (
        <V2CartDrawer
          cart={cart}
          commerce={commerce}
          onClose={() => setCartOpen(false)}
          onRemove={(code) =>
            setCart((current) => removeProductFromCart(current, code))
          }
        />
      )}
    </div>
  );
}
