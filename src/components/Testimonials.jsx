import { motion } from 'framer-motion';

const TESTIMONIALS = [
  { name: 'Aryan K.', role: 'Attendee · Mumbai', quote: 'Found the most incredible jazz night through EventSphere. Genuinely life-changing.' },
  { name: 'Priya M.', role: 'Host · Bangalore', quote: '80 attendees showed up to my workshop. The whole process was effortless.' },
  { name: 'Rahul S.', role: 'Tech Enthusiast · Delhi', quote: 'Connected with 3 VCs at an AI Summit I found on EventSphere.' },
  { name: 'Sneha I.', role: 'Wellness Coach · Chennai', quote: 'My yoga retreats are fully booked every weekend thanks to EventSphere.' },
  { name: 'Vikram N.', role: 'Music Fan · Hyderabad', quote: 'The lineup, the crowd, the vibes — absolute perfection.' },
  { name: 'Ananya S.', role: 'Art Curator · Kolkata', quote: 'Our gallery walk sold out in 2 hours. Reached an audience we\'d never have found.' },
  { name: 'Dev M.', role: 'Founder · Pune', quote: 'Met my co-founder at a Founders Night on EventSphere. Best night ever.' },
  { name: 'Kavya R.', role: 'Food Blogger · Bangalore', quote: 'Found 5 amazing food events I\'d have otherwise completely missed.' },
];

function Card({ t }) {
  return (
    <div className="shrink-0 w-64 card p-5 mx-2.5 flex flex-col gap-3" style={{ pointerEvents: 'none' }}>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#7C3AED"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        ))}
      </div>
      <p className="text-[#888] text-xs font-sub leading-relaxed">"{t.quote}"</p>
      <div>
        <p className="text-[#FAFAFA] text-xs font-sub font-semibold">{t.name}</p>
        <p className="text-[#555] text-[10px] font-sub">{t.role}</p>
      </div>
    </div>
  );
}

function Row({ items, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-container py-2">
      <div className={`marquee-track ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {doubled.map((t, i) => <Card key={`${t.name}-${i}`} t={t} />)}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const half = Math.ceil(TESTIMONIALS.length / 2);

  return (
    <section className="py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="px-5 mb-10"
      >
        <div className="max-w-6xl mx-auto">
          <p className="label text-[#555] mb-2">Loved by thousands</p>
          <h2
            className="font-heading text-[#FAFAFA]"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}
          >
            What people are saying
          </h2>
        </div>
      </motion.div>

      <div className="flex flex-col gap-3">
        <Row items={TESTIMONIALS.slice(0, half)} />
        <Row items={TESTIMONIALS.slice(half)} reverse />
      </div>
    </section>
  );
}
