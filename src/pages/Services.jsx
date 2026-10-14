import { ArrowRight, ClipboardList, FileCheck2, PackageCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition, Reveal, Stagger, StaggerItem } from '../components/motion.jsx';
import PageHero from '../components/PageHero.jsx';
import ServiceGrid from '../components/ServiceGrid.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

const procurementIcons = [ClipboardList, FileCheck2, PackageCheck];

export default function Services() {
  const { t } = useLanguage();
  const services = t.services;

  return (
    <PageTransition>
      <PageHero kicker={services.kicker} title={services.title} intro={services.intro} />
      <section className="section inner-section pale">
        <div className="container">
          <ServiceGrid items={services.items} t={t} />
        </div>
      </section>
      <section className="section procurement-section">
        <div className="container procurement-layout">
          <Reveal className="procurement-copy">
            <div className="eyebrow light"><span className="eyebrow-line" />{services.procurementKicker}</div>
            <h2>{services.procurementTitle}</h2>
            <p>{services.procurementIntro}</p>
          </Reveal>
          <Stagger className="procurement-points" gap={0.15}>
            {services.procurementPoints.map((point, index) => {
              const Icon = procurementIcons[index];
              return (
                <StaggerItem className="procurement-point" key={point.title}>
                  <span className="procurement-icon"><Icon size={22} aria-hidden="true" /></span>
                  <div><h3>{point.title}</h3><p>{point.body}</p></div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal className="cta-panel">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" />{services.kicker}</div>
              <h2>{services.ctaTitle}</h2>
              <p>{services.ctaText}</p>
            </div>
            <Link className="button button-primary" to="/contact">{t.common.requestQuote}<ArrowRight size={16} aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
