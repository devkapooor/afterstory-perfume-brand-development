import { site } from '../../content/site';

export function LaunchScents() {
  const { launch } = site;

  return <section className="launch-board" aria-labelledby="launch-heading">
    <div className="launch-intro">
      <div>
        <p className="eyebrow">{launch.eyebrow}</p>
        <h2 id="launch-heading">{launch.heading}</h2>
      </div>
      <div className="launch-copy">
        <p>{launch.intro}</p>
        <a className="launch-cta" href={site.instagram} target="_blank" rel="noreferrer">
          {launch.cta}<span aria-hidden="true">↗</span>
          <span className="sr-only">{site.newTab}</span>
        </a>
        <p className="launch-note">{launch.note}</p>
      </div>
    </div>
    <div className="scent-grid">
      {launch.scents.map((scent) => <article className="scent-panel" key={scent.code}>
        <div className="scent-chapter">Chapter {scent.code}</div>
        <h3>{scent.name}</h3>
        <p className="scent-profile">{scent.profile}</p>
        <p className="scent-story">{scent.story}</p>
        <div className="scent-meta">
          <span>Extrait de Parfum</span>
          <span>50 ML</span>
          <span>{scent.price}</span>
        </div>
        <p className="scent-mood">{scent.mood}</p>
      </article>)}
    </div>
  </section>;
}
