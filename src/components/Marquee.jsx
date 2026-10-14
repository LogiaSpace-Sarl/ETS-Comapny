import { motion } from 'framer-motion';
import { Sparkle } from 'lucide-react';

export default function Marquee({ items }) {
  const row = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <motion.div className="marquee-track" animate={{ x: ['0%', '-50%'] }} transition={{ duration: 32, ease: 'linear', repeat: Infinity }}>
        {row.map((item, index) => (
          <span key={`${item}-${index}`}>{item}<Sparkle size={14} /></span>
        ))}
      </motion.div>
    </div>
  );
}
