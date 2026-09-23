import Image from 'next/image';

export function V2Hero() {
  return (
    <section className="v2-hero">
      <div>
        <p className="v2-eyebrow">Independent fragrance / India</p>
        <h1>
          Fragrance for what remains <em>after the moment.</em>
        </h1>
        <p className="v2-hero-copy">
          A quiet collection of extrait de parfums, made to be remembered.
        </p>
        <a className="v2-button v2-button-ember" href="#collection">
          Explore the collection <span aria-hidden="true">down</span>
        </a>
      </div>
      <div className="v2-hero-image">
        <Image
          src="/images/shop/three-scents-riverfront-v1.webp"
          alt="Three AFTERSTORY perfume bottles beside a sunlit window"
          width="1536"
          height="1024"
          priority
        />
      </div>
    </section>
  );
}
