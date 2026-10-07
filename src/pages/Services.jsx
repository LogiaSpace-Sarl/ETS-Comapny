import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import ServiceGrid from '../components/ServiceGrid.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Services() {
  const { t } = useLanguage();
  const services = t.services;

  return (
    <main>
      <PageHero kicker={services.kicker} title={services.title} intro={services.intro} />
      <section className="section inner-section pale">
        <div className="container">
          <ServiceGrid items={services.items} t={t} />
          <div className="cta-panel">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" />{services.kicker}</div>
              <h2>{services.ctaTitle}</h2>
              <p>{services.ctaText}</p>
            </div>
            <Link className="button button-primary" to="/contact">{t.common.requestQuote}<ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
