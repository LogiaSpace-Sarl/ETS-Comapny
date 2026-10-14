import { Briefcase, Building2, GraduationCap, Handshake, Landmark, ShoppingBag } from 'lucide-react';

const sectorIcons = [Landmark, Building2, GraduationCap, Briefcase, Handshake, ShoppingBag];

export default function ReferenceCard({ title, index, status }) {
  const number = String(index + 1).padStart(2, '0');
  const Icon = sectorIcons[index] || Building2;
  return (
    <article className="reference-card">
      <span className="reference-number">{number}</span>
      <div className="reference-icon"><Icon size={22} strokeWidth={1.6} aria-hidden="true" /></div>
      <h2>{title}</h2>
      {status && <p>{status}</p>}
    </article>
  );
}
