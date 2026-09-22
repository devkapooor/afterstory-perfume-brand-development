import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';

const editorialSerif = Cormorant_Garamond({
  variable: '--font-editorial-serif',
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
});
const editorialSans = DM_Sans({
  variable: '--font-editorial-sans',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.afterstory.in'),
  title: 'Shop AFTERSTORY | Fragrance for what remains after the moment',
  description:
    'Explore the first AFTERSTORY fragrances: FIRST LIGHT, TOBACCO BLOOM and WHITE MUSK.',
  alternates: { canonical: '/v2' },
  applicationName: 'AFTERSTORY',
  creator: 'AFTERSTORY',
  publisher: 'Amelia Enterprises',
  keywords: [
    'AFTERSTORY',
    'AFTERSTORY perfumes',
    'Indian perfume brand',
    'unisex perfumes India',
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Shop AFTERSTORY',
    description:
      'Explore FIRST LIGHT, TOBACCO BLOOM and WHITE MUSK from AFTERSTORY.',
    url: '/v2',
    type: 'website',
    locale: 'en_IN',
    siteName: 'AFTERSTORY',
  },
  twitter: {
    card: 'summary',
    title: 'Shop AFTERSTORY',
    description:
      'Explore FIRST LIGHT, TOBACCO BLOOM and WHITE MUSK from AFTERSTORY.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={[editorialSerif.variable, editorialSans.variable].join(' ')}
      >
        {children}
      </body>
    </html>
  );
}
