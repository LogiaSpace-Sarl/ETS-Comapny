import { ArrowRight, Building2, FileText, Globe2, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceIcons = [FileText, Building2, Truck, Globe2];

export default function ServiceCard({ item, index, t }) {
  const Icon = serviceIcons[index] || Building2;
  const number = String(index + 1).padStart(2, '0');

  return (
    <article className="service-card">
      <span className="service-num">{number}</span>
      <div className="service-icon"><Icon size={23} strokeWidth={1.6} aria-hidden="true" /></div>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
      <Link to={`/contact?sujet=${encodeURIComponent(item.title)}`} className="card-link">{t.common.discuss}<ArrowRight size={15} aria-hidden="true" /></Link>
    </article>
  );
}
