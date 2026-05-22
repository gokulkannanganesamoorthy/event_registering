import { motion } from 'framer-motion';

const TESTIMONIALS_ROW1 = [
  { name: 'Aryan Kapoor', role: 'Event Attendee', city: 'Mumbai', quote: 'Found the most incredible jazz night through EventSphere. The experience was unlike anything I\'ve had before.', rating: 5 },
  { name: 'Priya Mehta', role: 'Event Host', city: 'Bangalore', quote: 'Hosted my first photography workshop here. 80 attendees showed up. EventSphere made the whole process effortless.', rating: 5 },
  { name: 'Rahul Singh', role: 'Tech Enthusiast', city: 'Delhi', quote: 'The AI Summit I attended via EventSphere was world-class. Connected with 3 VCs and got a job offer.', rating: 5 },
  { name: 'Sneha Iyer', role: 'Wellness Coach', city: 'Chennai', quote: 'My yoga retreats are fully booked every weekend, all thanks to EventSphere\'s incredible reach.', rating: 5 },
  { name: 'Vikram Nair', role: 'Music Fan', city: 'Hyderabad', quote: 'Neon Nights was a transcendent experience. The lineup, the crowd, the vibes — all perfect.', rating: 5 },
];

const TESTIMONIALS_ROW2 = [
  { name: 'Ananya Sharma', role: 'Art Curator', city: 'Kolkata', quote: 'Our gallery walk sold out in 2 hours. EventSphere brought us an audience we\'d never have reached otherwise.', rating: 5 },
  { name: 'Dev Malhotra', role: 'Startup Founder', city: 'Pune', quote: 'The networking events here are genuinely high-quality. Met my co-founder at a Founders Night.', rating: 5 },
  { name: 'Kavya Reddy', role: 'Food Blogger', city: 'Bangalore', quote: 'The food festival discovery feature is chef\'s kiss. Found 5 amazing events I\'d have otherwise missed.', rating: 5 },
  { name: 'Rohit Joshi', role: 'DJ', city: 'Mumbai', quote: 'As a performer, getting listed on EventSphere tripled my bookings. Incredible platform for artists.', rating: 5 },
  { name: 'Meera Pillai', role: 'Entrepreneur', city: 'Delhi', quote: 'Smooth, beautiful, and actually works. EventSphere is what event discovery should feel like.', rating: 5 },
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="shrink-0 w-72 sm:w-80 card-glow p-6 mx-3 bg-white/5 border-white/10" style={{ pointerEvents: 'none' }}>
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="p-sm text-white/80 leading-relaxed mb-6 font-sub">"{testimonial.quote}"</p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet to-violet-light flex items-center justify-center text-white text-sm font-sub font-bold shadow-gv-sm">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-sub font-bold text-white text-sm">{testimonial.name}</p>
          <p className="text-[10px] uppercase tracking-wider text-violet-light/80 font-sub">{testimonial.role} · {testimonial.city}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-container py-4">
      <div
        className={`marquee-track ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}
      >
        {doubled.map((item, i) => (
          <TestimonialCard key={`${item.name}-${i}`} testimonial={item} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background orbs */}
      <div className="orb orb-violet absolute w-[600px] h-[600px] -left-[10%] top-1/2 -translate-y-1/2 opacity-20" />
      <div className="orb orb-gold absolute w-[400px] h-[400px] right-[-5%] bottom-[-10%] opacity-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16 px-4"
      >
        <p className="label text-violet-light/60 mb-4 tracking-[0.2em]">Loved by thousands</p>
        <h2
          className="font-heading text-white"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}
        >
          What people are{' '}
          <span className="italic text-gradient">saying</span>
        </h2>
      </motion.div>

      {/* Marquee rows */}
      <div className="flex flex-col gap-6 relative z-10">
        <MarqueeRow items={TESTIMONIALS_ROW1} />
        <MarqueeRow items={TESTIMONIALS_ROW2} reverse />
      </div>
    </section>
  );
}
