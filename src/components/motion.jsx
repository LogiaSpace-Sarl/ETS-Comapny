import { motion, useInView, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const ease = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

// Fades content up the first time it scrolls into view.
export function Reveal({ as = 'div', delay = 0, children, ...props }) {
  const Component = motion[as];
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ hidden: fadeUp.hidden, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay } } }}
      {...props}
    >
      {children}
    </Component>
  );
}

// Reveals its StaggerItem children one after another.
export function Stagger({ as = 'div', gap = 0.1, children, ...props }) {
  const Component = motion[as];
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: gap } } }}
      {...props}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({ as = 'div', children, ...props }) {
  const Component = motion[as];
  return <Component variants={fadeUp} {...props}>{children}</Component>;
}

// Counts up to the numeric part of a value like "15+" when it becomes visible.
export function CountUp({ value, duration = 1600 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const match = /^(\d+)(.*)$/.exec(value);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    if (!match || !inView || reduceMotion) return undefined;
    const target = Number(match[1]);
    const start = performance.now();
    let frameId;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCurrent(Math.round(target * (1 - (1 - progress) ** 3)));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  // The build-time prerender (no window) keeps the real value for search engines.
  const isServer = typeof window === 'undefined';
  const display = !match || reduceMotion || (isServer && current === null) ? value : `${current ?? 0}${match[2]}`;
  return <span ref={ref} className="count-up">{display}</span>;
}

// Moves an image slightly slower than the page for a subtle depth effect.
export function ParallaxImage({ src, alt, strength = 40, ...props }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);
  return (
    <div ref={ref} className="parallax-wrap">
      <motion.img src={src} alt={alt} style={{ y, scale: 1.12 }} {...props} />
    </div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

export function PageTransition({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease } }}
      exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.main>
  );
}
