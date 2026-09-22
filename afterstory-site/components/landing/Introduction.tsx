import { site } from '../../content/site';

export function Introduction() {
  const copy = site.introduction;
  return <section className="story" aria-labelledby="headline">
    <p className="eyebrow">{copy.eyebrow}</p>
    <h1 id="headline">{copy.headline}<br />{copy.continuation}<em>{copy.emphasis}</em></h1>
    <p className="introduction">{copy.description}<br className="desktop-break" />{' '}{copy.supporting}</p>
    <div className="invitation">
      <a className="follow-link" href={site.instagram} target="_blank" rel="noopener noreferrer">{copy.follow}<span aria-hidden="true">&#8599;</span><span className="sr-only">{copy.followAccessible}{site.newTab}</span></a>
      <p>{copy.updates}</p>
    </div>
    <p className="story-note"><span aria-hidden="true">{copy.number}</span>{copy.note}</p>
  </section>;
}
