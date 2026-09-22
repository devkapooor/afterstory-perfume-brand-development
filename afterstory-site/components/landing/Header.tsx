import { site } from '../../content/site';

export function Header() {
  const copy = site.header;
  return <header className="masthead">
    <div className="edition-line"><span>{copy.category}</span><span className="edition-center">{copy.chapter}</span><span>{copy.country}</span></div>
    <p className="wordmark" aria-label={site.name}>{site.name}</p>
    <div className="masthead-bottom"><span>{copy.tagline}</span><a href="/shop">Shop the collection</a></div>
  </header>;
}
