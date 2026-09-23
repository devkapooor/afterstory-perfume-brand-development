import type { V2Commerce, V2Product } from '../../content/v2';
import { V2ProductCard } from './V2ProductCard';

export function V2Collection({
  commerce,
  products,
  query,
  onQueryChange,
  onAdd,
}: {
  commerce: V2Commerce;
  products: V2Product[];
  query: string;
  onQueryChange: (query: string) => void;
  onAdd: (product: V2Product) => void;
}) {
  return (
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
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search"
            aria-label="Search fragrances"
          />
        </label>
      </div>
      <div className="v2-grid">
        {products.map((product) => (
          <V2ProductCard
            key={product.code}
            product={product}
            commerce={commerce}
            onAdd={onAdd}
          />
        ))}
      </div>
    </section>
  );
}
