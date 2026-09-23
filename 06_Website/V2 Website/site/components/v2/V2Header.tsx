import Link from 'next/link';

export function V2Header({
  cartCount,
  onCartOpen,
}: {
  cartCount?: number;
  onCartOpen?: () => void;
}) {
  return (
    <header className="v2-header">
      <Link className="v2-logo" href="/v2">
        AFTERSTORY <span>/ CATALOG</span>
      </Link>
      <nav aria-label="Primary">
        <a href="/v2#collection">Shop</a>
        <a href="/v2#story">Our story</a>
        {onCartOpen ? (
          <button type="button" onClick={onCartOpen}>
            Cart <span className="v2-cart-count">{cartCount ?? 0}</span>
          </button>
        ) : (
          <Link href="/v2#collection">Cart</Link>
        )}
      </nav>
    </header>
  );
}
