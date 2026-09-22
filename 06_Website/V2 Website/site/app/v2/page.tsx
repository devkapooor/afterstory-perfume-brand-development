import type { Metadata } from 'next';
import { V2Storefront } from '../../components/v2/V2Storefront';
import { v2Commerce } from '../../content/v2';
import './v2.css';

export const metadata: Metadata = {
  title: 'Shop AFTERSTORY | Fragrance for what remains after the moment',
  description:
    'Explore the first AFTERSTORY fragrances: FIRST LIGHT, TOBACCO BLOOM and WHITE MUSK.',
  alternates: { canonical: '/v2' },
};

export default function V2Page() {
  return <V2Storefront commerce={v2Commerce} />;
}
