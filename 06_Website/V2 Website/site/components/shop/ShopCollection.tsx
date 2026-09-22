'use client';

import { useRef, useState } from 'react';
import { shop } from '../../content/shop';

function Price() {
  return <div className="shop-price"><strong>₹{shop.price}</strong><span>MRP <s>₹{shop.mrp}</s><small>Launch price</small></span></div>;
}

export function ShopCollection() {
  const [selected, setSelected] = useState(0);
  const heading = useRef<HTMLHeadingElement>(null);
  const product = shop.products[selected];

  function selectProduct(index: number) {
    setSelected(index);
    requestAnimationFrame(() => heading.current?.focus());
  }

  return <>
    <section className="shop-product" aria-labelledby="product-title">
      <img className="shop-main-image" src={product.image} alt={`${product.name}, AFTERSTORY 50 ml perfume`} width={1122} height={1402} fetchPriority="high" />
      <div className="shop-details">
        <p className="shop-kicker">Chapter {product.code}</p>
        <h1 id="product-title" ref={heading} tabIndex={-1}>{product.name}</h1>
        <p className="shop-story">{product.story}</p>
        <p className="shop-format">Extrait De Parfum / 50 ml</p>
        <Price />
        <div className="shop-notes"><p className="shop-kicker">Scent notes</p><p>{product.profile}</p></div>
        <div className="shop-facts"><span>25% w/w concentration</span><span>Unisex</span></div>
        <a className="shop-order" href={shop.orderUrl} target="_blank" rel="noopener noreferrer">{shop.orderText}<span aria-hidden="true"> ↗</span><span className="sr-only"> (opens in a new tab)</span></a>
        <p className="shop-delivery">{shop.delivery}<br />{shop.payment}</p>
      </div>
    </section>
    <section className="shop-related" id="collection" aria-labelledby="collection-title">
      <h2 id="collection-title">Discover the other chapters</h2>
      <div className="shop-cards">{shop.products.map((scent, index) => index !== selected ? <article key={scent.code}>
        <button type="button" className="shop-card-button" onClick={() => selectProduct(index)} aria-label={`View ${scent.name}`}>
          <img src={scent.image} alt={`${scent.name}, AFTERSTORY 50 ml perfume`} width={1122} height={1402} loading="lazy" />
          <span className="shop-kicker">Chapter {scent.code}</span>
          <h3>{scent.name}</h3>
          <span className="shop-card-story">{scent.story}</span>
          <span className="shop-view">Explore this scent <span aria-hidden="true">↗</span></span>
        </button>
        <Price />
      </article> : null)}</div>
    </section>
  </>;
}
