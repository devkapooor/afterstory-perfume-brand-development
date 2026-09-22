import type { Metadata } from 'next';
import { ShopCollection } from '../../components/shop/ShopCollection';
import { shop } from '../../content/shop';
import { site } from '../../content/site';
import './shop.css';

export const metadata: Metadata = {
  title: shop.title,
  description: shop.description,
  alternates: { canonical: '/shop' },
  openGraph: { title: shop.title, description: shop.description, url: '/shop', images: [shop.banner] },
  twitter: { card: 'summary_large_image', title: shop.title, description: shop.description, images: [shop.banner] },
};

export default function ShopPage() {
  return <div className="shop-page">
    <a className="skip-link" href="#shop-main">Skip to products</a>
    <header className="shop-header"><a href="#collection">The collection</a><a className="shop-wordmark" href="/" aria-label="AFTERSTORY home">AFTERSTORY</a><a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram<span className="sr-only"> (opens in a new tab)</span></a></header>
    <div className="shop-prelude"><span>Independent fragrance / India</span><span>Fragrance for what remains after the moment.</span></div>
    <main id="shop-main"><ShopCollection />
      <section className="shop-banner" aria-label="The first AFTERSTORY collection"><img src={shop.banner} width={1536} height={1024} loading="lazy" alt="First Light, Tobacco Bloom and White Musk on a sunlit stone windowsill overlooking a riverfront" /></section>
    </main>
    <footer className="shop-footer"><a className="shop-wordmark" href="/">AFTERSTORY</a><p>{site.footer.thought}</p><a href={site.instagram} target="_blank" rel="noopener noreferrer">@wearafterstory<span className="sr-only"> (opens in a new tab)</span></a></footer>
  </div>;
}
