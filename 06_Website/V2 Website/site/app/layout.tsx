import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import { site } from '../content/site';

const editorialSerif = Cormorant_Garamond({ variable: '--font-editorial-serif', subsets: ['latin'], weight: ['400'], style: ['normal', 'italic'], display: 'swap' });
const editorialSans = DM_Sans({ variable: '--font-editorial-sans', subsets: ['latin'], weight: ['400', '500'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.metadata.url),
  title: site.metadata.title,
  description: site.metadata.description,
  alternates: { canonical: '/' },
  applicationName: site.name,
  creator: site.name,
  publisher: site.name,
  keywords: ['AFTERSTORY', 'AFTERSTORY perfumes', 'Indian perfume brand', 'unisex perfumes India', 'independent fragrance India'],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: {
    title: site.metadata.title,
    description: site.metadata.socialDescription,
    url: '/', type: 'website', locale: 'en_IN', siteName: site.name,
  },
  twitter: { card: 'summary', title: site.metadata.title, description: site.metadata.twitterDescription },
};

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.metadata.url}/#website`,
    url: `${site.metadata.url}/`,
    name: site.name,
    alternateName: ['AFTERSTORY Perfumes', 'Wear AFTERSTORY'],
    description: site.metadata.description,
    inLanguage: 'en-IN',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.metadata.url}/#organization`,
    name: site.name,
    url: `${site.metadata.url}/`,
    sameAs: [site.instagram],
  },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${editorialSerif.variable} ${editorialSans.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body></html>;
}
