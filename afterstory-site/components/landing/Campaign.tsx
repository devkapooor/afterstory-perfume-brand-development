import Image from 'next/image';
import { site } from '../../content/site';
import './campaign.css';

export function Campaign() {
  const copy = site.campaign;
  return <figure className="still-life">
    <div className="motion-demo">
      <div className="campaign-stage">
        <Image src={copy.src} alt={copy.alt} width={copy.width} height={copy.height} priority unoptimized />
        <div className="sky-mask" aria-hidden="true"><div className="sky-haze" /></div>
        <div className="water-mask" aria-hidden="true"><div className="water-glints" /></div>
      </div>
    </div>
    <figcaption><span>{copy.caption}</span><span>{copy.credit}</span></figcaption>
  </figure>;
}
