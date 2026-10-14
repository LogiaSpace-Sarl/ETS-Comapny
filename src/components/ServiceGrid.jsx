import ServiceCard from './ServiceCard.jsx';
import { Stagger, StaggerItem } from './motion.jsx';

export default function ServiceGrid({ items, t, compact = false }) {
  return (
    <Stagger className={`service-grid ${compact ? 'compact' : ''}`} gap={0.1}>
      {items.map((item, index) => (
        <StaggerItem key={item.title} className="service-grid-item"><ServiceCard item={item} index={index} t={t} /></StaggerItem>
      ))}
    </Stagger>
  );
}
