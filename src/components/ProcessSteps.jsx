import { Reveal, Stagger, StaggerItem } from './motion.jsx';

export default function ProcessSteps({ kicker, title, steps }) {
  return (
    <section className="section process-section">
      <div className="container">
        <Reveal>
          <div className="eyebrow"><span className="eyebrow-line" />{kicker}</div>
          <h2>{title}</h2>
        </Reveal>
        <Stagger as="ol" className="process-steps" gap={0.15}>
          {steps.map((step, index) => (
            <StaggerItem as="li" key={step.title}>
              <span className="process-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
