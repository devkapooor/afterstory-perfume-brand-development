import Link from 'next/link';
import type { V2Commerce, V2Product } from '../../content/v2';

export function V2ProductDisclosures({
  product,
  commerce,
}: {
  product: V2Product;
  commerce: V2Commerce;
}) {
  return (
    <div className="v2-product-details">
      <details open>
        <summary>Scent profile</summary>
        <p>{product.profile}</p>
      </details>
      <details>
        <summary>How to wear</summary>
        <p>
          Spray 2-4 times on pulse points or clothing. Avoid eyes, face, broken
          skin, heat, and open flames. For external use only.
        </p>
      </details>
      <details>
        <summary>Shipping and payment</summary>
        <p>
          {commerce.delivery} {commerce.payment}
        </p>
      </details>
      <details>
        <summary>Returns and delivery issues</summary>
        <p>
          {commerce.returns} Read the full{' '}
          <Link href="/v2/policies">shipping and returns policy</Link>.
        </p>
      </details>
    </div>
  );
}
