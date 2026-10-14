import { Building2, CheckCircle2, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function About() {
  const { t } = useLanguage();
  const about = t.about;

  return (
    <main>
      <PageHero kicker={about.kicker} title={about.title} intro={about.intro} />
      <section className="section inner-section">
        <div className="container about-detail-grid">
          <div className="about-photo">
            <img src="/images/cameroon-business-team.webp" alt={about.imageLabel} width="1600" height="900" />
            <span className="image-badge"><ShieldCheck size={17} aria-hidden="true" />{about.imageLabel}</span>
          </div>
          <div className="about-detail-copy">
            {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="commitment-list">
              {about.points.map((point) => <div key={point}><CheckCircle2 size={18} aria-hidden="true" />{point}</div>)}
            </div>
            <div className="about-closing"><Building2 size={20} aria-hidden="true" /><span>{about.closing}</span></div>
          </div>
        </div>
      </section>
    </main>
  );
}
