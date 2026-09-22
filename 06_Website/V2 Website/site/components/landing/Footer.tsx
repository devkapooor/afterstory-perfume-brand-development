import { site } from '../../content/site';

export function Footer() {
  return <footer className="footer">
    <span>&copy; {site.footer.copyright}</span>
    <span className="footer-thought">{site.footer.thought}</span>
    <a href={site.instagram} target="_blank" rel="noopener noreferrer">{site.footer.social} <span aria-hidden="true">&#8599;</span><span className="sr-only">{site.newTab}</span></a>
  </footer>;
}
