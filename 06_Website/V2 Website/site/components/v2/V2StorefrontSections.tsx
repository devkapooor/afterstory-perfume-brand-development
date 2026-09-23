import type { V2Commerce } from '../../content/v2';

export function V2StorefrontSections({ commerce }: { commerce: V2Commerce }) {
  return (
    <>
      <section className="v2-story" id="story">
        <p className="v2-eyebrow">The AFTERSTORY approach</p>
        <h2>Every scent begins a story. The rest becomes yours.</h2>
        <p>
          Small-batch fragrances with a clear point of view. Each composition is
          made as an invitation to remember a moment in your own way.
        </p>
      </section>
      <section className="v2-details" id="shipping">
        <div>
          <p className="v2-eyebrow">Shipping</p>
          <p>{commerce.delivery}</p>
        </div>
        <div>
          <p className="v2-eyebrow">The essentials</p>
          <p>
            {commerce.format}. {commerce.payment}
          </p>
        </div>
        <div>
          <p className="v2-eyebrow">Returns</p>
          <p>{commerce.returns}</p>
        </div>
      </section>
    </>
  );
}
