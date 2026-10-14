import { ChevronDown } from 'lucide-react';

export default function Faq({ faq }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };

  return (
    <section className="section faq-section pale">
      <div className="container faq-layout">
        <div>
          <div className="eyebrow"><span className="eyebrow-line" />{faq.kicker}</div>
          <h2>{faq.title}</h2>
        </div>
        <div className="faq-list">
          {faq.items.map(({ q, a }) => (
            <details key={q}>
              <summary>{q}<ChevronDown size={18} aria-hidden="true" /></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </section>
  );
}
