import Image from 'next/image';
import Link from 'next/link';
import type { V2Commerce, V2Product } from '../../content/v2';

const money = (value: number) => `₹${value.toLocaleString('en-IN')}`;

export function V2ProductCard({
  product,
  commerce,
  onAdd,
}: {
  product: V2Product;
  commerce: V2Commerce;
  onAdd: (product: V2Product) => void;
}) {
  return (
    <article className={`v2-card ${product.launch ? '' : 'v2-card-soon'}`}>
      <Link className="v2-card-link" href={`/v2/product/${product.code}`}>
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
            onClick={() => onAdd(product)}
            disabled={product.stock < 1}
          >
            {product.stock > 0 ? 'Add to cart' : 'Under Preparation'}
          </button>
        </div>
      </div>
    </article>
  );
}
