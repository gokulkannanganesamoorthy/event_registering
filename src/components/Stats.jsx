import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: 10000, label: 'Events Hosted', suffix: '+' },
  { value: 500, label: 'Cities Worldwide', suffix: '+' },
  { value: 2000000, label: 'Tickets Sold', suffix: '+' },
  { value: 98, label: 'Satisfaction Rate', suffix: '%' },
];

function CountUp({ target, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [hasRun, setHasRun] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRun) {
          setHasRun(true);
          let start = null;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            // easeOutQuart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeProgress * target));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, hasRun]);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toString();
  };

  return <span ref={ref}>{formatNumber(count)}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-space via-violet/5 to-space" />
      <div className="orb orb-gold absolute w-[600px] h-[600px] left-[-20%] top-1/2 -translate-y-1/2 opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="glass-dark rounded-[3rem] p-10 md:p-16 border-t border-white/10 border-b border-white/5 shadow-card-h">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center space-y-2 relative"
              >
                {/* Separator lines (not on last item) */}
                {index !== STATS.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                )}

                <div className="font-heading text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50"
                     style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1 }}>
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="label text-violet-light/80 tracking-[0.15em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
