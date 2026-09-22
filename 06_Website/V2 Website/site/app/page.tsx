import { Header } from '../components/landing/Header';
import { Introduction } from '../components/landing/Introduction';
import { Campaign } from '../components/landing/Campaign';
import { LaunchScents } from '../components/landing/LaunchScents';
import { Footer } from '../components/landing/Footer';
import { site } from '../content/site';

export default function Home() {
  return <div className="edition">
    <a className="skip-link" href="#main">{site.skipLink}</a>
    <Header />
    <main id="main">
      <section className="hero" aria-label="AFTERSTORY introduction">
        <Campaign />
        <Introduction />
      </section>
      <LaunchScents />
    </main>
    <Footer />
  </div>;
}
