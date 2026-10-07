import ServiceCard from './ServiceCard.jsx';

export default function ServiceGrid({ items, t, compact = false }) {
  return (
    <div className={`service-grid ${compact ? 'compact' : ''}`}>
      {items.map((item, index) => <ServiceCard key={item.title} item={item} index={index} t={t} />)}
    </div>
  );
}
