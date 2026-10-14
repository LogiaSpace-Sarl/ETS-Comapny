import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ item, index, t }) {
  const number = String(index + 1).padStart(2, '0');
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={item.image} alt={item.alt} loading="lazy" />
        <span className="product-index">{number}</span>
      </div>
      <div className="product-copy">
        <h2>{item.title}</h2>
        <p>{item.body}</p>
        <Link to={`/contact?sujet=${encodeURIComponent(item.title)}`} className="card-link">{t.common.requestQuote}<ArrowRight size={15} aria-hidden="true" /></Link>
      </div>
    </article>
  );
}
