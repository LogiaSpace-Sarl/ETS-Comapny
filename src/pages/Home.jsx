import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, CheckCircle2, FileText, MapPin, MessagesSquare, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee.jsx';
import { CountUp, PageTransition, ParallaxImage, Reveal, Stagger, StaggerItem } from '../components/motion.jsx';
import ProcessSteps from '../components/ProcessSteps.jsx';
import ReferenceCard from '../components/ReferenceCard.jsx';
import ServiceGrid from '../components/ServiceGrid.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

const trustIcons = [BadgeCheck, FileText, MessagesSquare, Truck];
const ease = [0.22, 1, 0.36, 1];
const heroItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export default function Home() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <PageTransition>
      <section className="hero">
        <motion.div className="hero-glow" animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />
        <div className="container hero-grid">
          <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}>
            <motion.div className="eyebrow" variants={heroItem}><span className="eyebrow-line" />{h.kicker}</motion.div>
            <motion.h1 variants={heroItem}>{h.title}</motion.h1>
            <motion.p variants={heroItem}>{h.intro}</motion.p>
            <motion.div className="hero-buttons" variants={heroItem}>
              <Link className="button button-primary" to="/contact">{h.primary}<ArrowRight size={17} aria-hidden="true" /></Link>
              <Link className="button button-quiet" to="/services">{h.secondary}<span className="circle-arrow"><ArrowRight size={15} aria-hidden="true" /></span></Link>
            </motion.div>
            <motion.div className="hero-proof" variants={heroItem}><span className="proof-mark"><CheckCircle2 size={18} aria-hidden="true" /></span>{h.proof}</motion.div>
          </motion.div>
          <div className="hero-art">
            <motion.div
              className="hero-photo-frame"
              initial={{ opacity: 0, scale: 0.94, rotate: 1.5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease, delay: 0.15 }}
            >
              <img src="/images/cameroon-business-team.webp" alt={h.imageLabel} width="1600" height="900" fetchpriority="high" />
            </motion.div>
            <motion.div
              className="floating-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{ opacity: { duration: 0.6, delay: 0.7 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 } }}
            >
              <img className="floating-logo" src="/images/ets-logo.webp" alt="" width="64" height="64" />
              <span><b>{h.trust}</b><small>{h.trustCaption}</small></span>
            </motion.div>
          </div>
        </div>
        <Stagger className="container stats" gap={0.12}>
          {h.stats.map(([number, label]) => (
            <StaggerItem className="stat" key={label}><strong><CountUp value={number} /></strong><span>{label}</span></StaggerItem>
          ))}
        </Stagger>
      </section>

      <Marquee items={h.marquee} />

      <section className="section about-preview">
        <div className="container split-grid">
          <Reveal className="section-visual">
            <div className="visual-frame">
              <ParallaxImage src="/images/office-furniture.webp" alt={h.proof} loading="lazy" />
              <div className="visual-overlay" />
              <div className="visual-caption"><span className="caption-number"><CountUp value="15" /></span><span>{h.experienceCaption}</span></div>
            </div>
            <motion.div className="stamp" initial={{ rotate: -30, scale: 0.6, opacity: 0 }} whileInView={{ rotate: -10, scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 160, damping: 14, delay: 0.3 }}>
              <ShieldCheck size={20} aria-hidden="true" /><span>Service<b>{h.reliable}</b></span>
            </motion.div>
          </Reveal>
          <Reveal className="section-copy" delay={0.1}>
            <div className="eyebrow"><span className="eyebrow-line" />{h.aboutKicker}</div>
            <h2>{h.aboutTitle}</h2>
            <p>{h.aboutP1}</p><p>{h.aboutP2}</p>
            <Link className="text-link" to="/a-propos">{h.aboutLink}<ArrowRight size={16} aria-hidden="true" /></Link>
            <div className="values"><span><MapPin size={17} aria-hidden="true" />{h.values[0]}</span><span><FileText size={17} aria-hidden="true" />{h.values[1]}</span></div>
          </Reveal>
        </div>
      </section>

      <section className="trust-band">
        <Stagger className="container trust-grid" gap={0.08}>
          {h.trustItems.map((item, index) => {
            const Icon = trustIcons[index];
            return <StaggerItem className="trust-item" key={item}><Icon size={22} aria-hidden="true" /><span>{item}</span></StaggerItem>;
          })}
        </Stagger>
      </section>

      <section className="section services-section">
        <div className="container">
          <Reveal className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />{h.servicesKicker}</div><h2>{h.servicesTitle}</h2></div><p>{h.servicesIntro}</p></Reveal>
          <ServiceGrid items={t.services.items} t={t} compact />
          <div className="section-action"><Link className="text-link" to="/services">{h.allServices}<ArrowRight size={16} aria-hidden="true" /></Link></div>
        </div>
      </section>

      <ProcessSteps kicker={h.processKicker} title={h.processTitle} steps={h.steps} />

      <section className="section sectors-section pale">
        <div className="container">
          <Reveal className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />{h.referencesKicker}</div><h2>{h.referencesTitle}</h2></div><p>{h.referencesIntro}</p></Reveal>
          <Stagger className="reference-grid" gap={0.08}>
            {t.references.items.map((item, index) => (
              <StaggerItem key={item.title}><ReferenceCard title={item.title} index={index} status={item.body} /></StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section products-preview">
        <div className="container products-preview-head">
          <Reveal><div className="eyebrow light"><span className="eyebrow-line" />{h.productsKicker}</div><h2>{h.productsTitle}</h2><p>{h.productsIntro}</p><Link className="button button-gold" to="/produits">{h.allProducts}<ArrowRight size={16} aria-hidden="true" /></Link></Reveal>
          <Stagger className="preview-product-stack" gap={0.15}>
            {t.products.items.slice(0, 4).map((product) => (
              <StaggerItem key={product.title}>
                <Link to="/produits" className="preview-product"><img src={product.image} alt="" loading="lazy" /><span>{product.title}<ArrowRight size={15} aria-hidden="true" /></span></Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="home-contact">
        <Reveal className="container home-contact-inner"><div><div className="eyebrow light"><span className="eyebrow-line" />{h.contactKicker}</div><h2>{h.contactTitle}</h2><p>{h.contactIntro}</p></div><Link className="button button-gold" to="/contact">{t.common.requestQuote}<ArrowRight size={16} aria-hidden="true" /></Link></Reveal>
      </section>
    </PageTransition>
  );
}
