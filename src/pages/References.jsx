import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition, Reveal, Stagger, StaggerItem } from '../components/motion.jsx';
import PageHero from '../components/PageHero.jsx';
import ReferenceCard from '../components/ReferenceCard.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function References() {
  const { t } = useLanguage();
  const references = t.references;

  return (
    <PageTransition>
      <PageHero kicker={references.kicker} title={references.title} intro={references.intro} />
      <section className="section inner-section pale">
        <div className="container">
          <Stagger className="reference-grid" gap={0.08}>
            {references.items.map((item, index) => (
              <StaggerItem key={item.title}><ReferenceCard title={item.title} index={index} status={item.body} /></StaggerItem>
            ))}
          </Stagger>
          <Reveal className="reference-note"><FileText size={19} aria-hidden="true" />{references.note}</Reveal>
          <Reveal className="cta-panel">
            <div>
              <h2>{t.services.ctaTitle}</h2>
              <p>{t.services.ctaText}</p>
            </div>
            <Link className="button button-primary" to="/contact">{t.common.requestQuote}<ArrowRight size={16} aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
