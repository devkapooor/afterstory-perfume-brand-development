import Image from 'next/image';
import type { V2Product } from '../../content/v2';

export function V2ProductGallery({ product }: { product: V2Product }) {
  return (
    <div className="v2-product-image">
      <Image
        src={product.image || '/images/shop/three-scents-riverfront-v1.webp'}
        alt={`${product.name}, AFTERSTORY 50 ML perfume`}
        width={1122}
        height={1402}
        priority
      />
    </div>
  );
}
