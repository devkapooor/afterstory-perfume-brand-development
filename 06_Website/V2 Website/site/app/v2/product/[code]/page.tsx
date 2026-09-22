import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { V2ProductDetail } from '../../../../components/v2/V2ProductDetail';
import { v2Commerce, v2Products } from '../../../../content/v2';
import '../../v2.css';

type ProductPageProps = { params: Promise<{ code: string }> };

export function generateStaticParams() {
  return v2Products.map((product) => ({ code: product.code }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { code } = await params;
  const product = v2Products.find((item) => item.code === code);
  if (!product) return {};
  return {
    title: `${product.name} | AFTERSTORY`,
    description: product.story,
    alternates: { canonical: `/v2/product/${product.code}` },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { code } = await params;
  const product = v2Products.find((item) => item.code === code);
  if (!product) notFound();
  return <V2ProductDetail product={product} commerce={v2Commerce} />;
}
