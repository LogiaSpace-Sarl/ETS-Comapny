import { ArrowRight, Building2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CountUp, PageTransition, ParallaxImage, Reveal, Stagger, StaggerItem } from '../components/motion.jsx';
import PageHero from '../components/PageHero.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { site } from '../site.js';

export default function About() {
  const { t } = useLanguage();
  const about = t.about;

  return (
    <PageTransition>
      <PageHero kicker={about.kicker} title={about.title} intro={about.intro} />
      <section className="section inner-section">
        <div className="container about-detail-grid">
          <Reveal className="about-photo">
            <img src="/images/cameroon-business-team.webp" alt={about.imageLabel} width="1600" height="900" />
            <span className="image-badge"><ShieldCheck size={17} aria-hidden="true" />{about.imageLabel}</span>
          </Reveal>
          <Reveal className="about-detail-copy" delay={0.1}>
            {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <Stagger className="commitment-list" gap={0.08}>
              {about.points.map((point) => <StaggerItem key={point}><CheckCircle2 size={18} aria-hidden="true" />{point}</StaggerItem>)}
            </Stagger>
            <div className="about-closing"><Building2 size={20} aria-hidden="true" /><span>{about.closing}</span></div>
          </Reveal>
        </div>
      </section>

      <section className="section timeline-section pale">
        <div className="container">
          <Reveal>
            <div className="eyebrow"><span className="eyebrow-line" />{about.timelineKicker}</div>
            <h2>{about.timelineTitle}</h2>
          </Reveal>
          <Stagger as="ol" className="timeline" gap={0.18}>
            {about.timeline.map((step) => (
              <StaggerItem as="li" key={step.title}>
                <span className="timeline-year">{step.year}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section city-section">
        <div className="container city-layout">
          <Reveal className="city-copy">
            <div className="eyebrow light"><span className="eyebrow-line" />{about.cityKicker}</div>
            <h2>{about.cityTitle}</h2>
            <p>{about.cityText}</p>
            <div className="city-facts">
              {about.cityFacts.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
            </div>
            <Link className="button button-gold" to="/contact">{t.common.requestQuote}<ArrowRight size={16} aria-hidden="true" /></Link>
          </Reveal>
          <Reveal className="city-visual" delay={0.15}>
            <ParallaxImage src="/images/cameroon-business-team.webp" alt={about.cityTitle} loading="lazy" strength={30} />
            <iframe
              className="city-map"
              title={about.mapTitle}
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=13&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
