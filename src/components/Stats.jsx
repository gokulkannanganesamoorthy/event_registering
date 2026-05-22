import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: 10000, label: 'Events hosted', suffix: '+' },
  { value: 500, label: 'Cities', suffix: '+' },
  { value: 2000000, label: 'Attendees', suffix: '+' },
  { value: 98, label: 'Satisfaction', suffix: '%' },
];

function CountUp({ target, suffix, run }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    const dur = 1800;
    const start = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [run, target]);

  const fmt = (v) => v >= 1e6 ? `${(v / 1e6).toFixed(1)}M` : v >= 1000 ? `${(v / 1000).toFixed(0)}K` : v;
  return <>{fmt(n)}{suffix}</>;
}

export default function Stats() {
  const [run, setRun] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setRun(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-14 px-5 border-y border-[#1F1F1F]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="text-center"
          >
            <div
              className="font-heading text-[#FAFAFA] mb-1"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: 1, letterSpacing: '-0.04em' }}
            >
              <CountUp target={s.value} suffix={s.suffix} run={run} />
            </div>
            <p className="text-[11px] font-sub uppercase tracking-widest text-[#555]">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
