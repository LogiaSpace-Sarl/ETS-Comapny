export default function ProcessSteps({ kicker, title, steps }) {
  return (
    <section className="section process-section">
      <div className="container">
        <div className="eyebrow"><span className="eyebrow-line" />{kicker}</div>
        <h2>{title}</h2>
        <ol className="process-steps">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="process-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
