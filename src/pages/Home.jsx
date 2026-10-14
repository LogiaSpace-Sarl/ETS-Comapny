import { ArrowRight, CheckCircle2, FileText, MapPin, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReferenceCard from '../components/ReferenceCard.jsx';
import ServiceGrid from '../components/ServiceGrid.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Home() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <main>
      <section className="hero">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" />{h.kicker}</div>
            <h1>{h.title}</h1>
            <p>{h.intro}</p>
            <div className="hero-buttons">
              <Link className="button button-primary" to="/contact">{h.primary}<ArrowRight size={17} aria-hidden="true" /></Link>
              <Link className="button button-quiet" to="/services">{h.secondary}<span className="circle-arrow"><ArrowRight size={15} aria-hidden="true" /></span></Link>
            </div>
            <div className="hero-proof"><span className="proof-mark"><CheckCircle2 size={18} aria-hidden="true" /></span>{h.proof}</div>
          </div>
          <div className="hero-art">
            <div className="hero-photo-frame">
              <img src="/images/cameroon-business-team.webp" alt={h.imageLabel} width="1600" height="900" fetchpriority="high" />
            </div>
            <div className="floating-card">
              <img className="floating-logo" src="/images/ets-logo.webp" alt="" width="64" height="64" />
              <span><b>{h.trust}</b><small>{h.trustCaption}</small></span>
            </div>
          </div>
        </div>
        <div className="container stats">
          {h.stats.map(([number, label]) => <div className="stat" key={number}><strong>{number}</strong><span>{label}</span></div>)}
        </div>
      </section>

      <section className="section about-preview">
        <div className="container split-grid">
          <div className="section-visual">
            <div className="visual-frame"><img src="/images/office-furniture.webp" alt={h.proof} loading="lazy" /><div className="visual-overlay" />
              <div className="visual-caption"><span className="caption-number">15</span><span>{h.experienceCaption}</span></div>
            </div>
            <div className="stamp"><ShieldCheck size={20} aria-hidden="true" /><span>Service<b>{h.reliable}</b></span></div>
          </div>
          <div className="section-copy">
            <div className="eyebrow"><span className="eyebrow-line" />{h.aboutKicker}</div>
            <h2>{h.aboutTitle}</h2>
            <p>{h.aboutP1}</p><p>{h.aboutP2}</p>
            <Link className="text-link" to="/a-propos">{h.aboutLink}<ArrowRight size={16} aria-hidden="true" /></Link>
            <div className="values"><span><MapPin size={17} aria-hidden="true" />{h.values[0]}</span><span><FileText size={17} aria-hidden="true" />{h.values[1]}</span></div>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />{h.servicesKicker}</div><h2>{h.servicesTitle}</h2></div><p>{h.servicesIntro}</p></div>
          <ServiceGrid items={t.services.items} t={t} compact />
          <div className="section-action"><Link className="text-link" to="/services">{h.allServices}<ArrowRight size={16} aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="section sectors-section">
        <div className="container">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />{h.referencesKicker}</div><h2>{h.referencesTitle}</h2></div><p>{h.referencesIntro}</p></div>
          <div className="reference-grid">
            {t.references.items.map((item, index) => <ReferenceCard key={item} title={item} index={index} />)}
          </div>
        </div>
      </section>

      <section className="section products-preview">
        <div className="container products-preview-head">
          <div><div className="eyebrow light"><span className="eyebrow-line" />{h.productsKicker}</div><h2>{h.productsTitle}</h2><p>{h.productsIntro}</p><Link className="button button-gold" to="/produits">{h.allProducts}<ArrowRight size={16} aria-hidden="true" /></Link></div>
          <div className="preview-product-stack">
            {t.products.items.slice(0, 2).map((product) => <Link to="/produits" className="preview-product" key={product.title}><img src={product.image} alt="" loading="lazy" /><span>{product.title}<ArrowRight size={15} aria-hidden="true" /></span></Link>)}
          </div>
        </div>
      </section>

      <section className="home-contact">
        <div className="container home-contact-inner"><div><div className="eyebrow light"><span className="eyebrow-line" />{h.contactKicker}</div><h2>{h.contactTitle}</h2><p>{h.contactIntro}</p></div><Link className="button button-gold" to="/contact">{t.common.requestQuote}<ArrowRight size={16} aria-hidden="true" /></Link></div>
      </section>
    </main>
  );
}
