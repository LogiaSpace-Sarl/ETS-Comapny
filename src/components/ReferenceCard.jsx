import { Building2 } from 'lucide-react';

export default function ReferenceCard({ title, index, status }) {
  const number = String(index + 1).padStart(2, '0');
  return (
    <article className="reference-card">
      <span className="reference-number">{number}</span>
      <div className="reference-icon"><Building2 size={22} strokeWidth={1.6} aria-hidden="true" /></div>
      <h2>{title}</h2>
      {status && <p>{status}</p>}
    </article>
  );
}
