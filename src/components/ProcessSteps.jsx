import { motion } from 'framer-motion';
import { Reveal, Stagger, StaggerItem } from './motion.jsx';

const stepImages = ['/images/stationery-flatlay.webp', '/images/procurement-files.webp', '/images/delivery.webp'];

export default function ProcessSteps({ kicker, title, steps }) {
  return (
    <section className="section process-section">
      <div className="container">
        <Reveal>
          <div className="eyebrow"><span className="eyebrow-line" />{kicker}</div>
          <h2>{title}</h2>
        </Reveal>
        <div className="process-wrap">
          <motion.span
            className="process-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <Stagger as="ol" className="process-steps" gap={0.2}>
            {steps.map((step, index) => (
              <StaggerItem as="li" key={step.title}>
                <div className="process-image"><img src={stepImages[index]} alt="" loading="lazy" /></div>
                <div className="process-body">
                  <span className="process-number">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
