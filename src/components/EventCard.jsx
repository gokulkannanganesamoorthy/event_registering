import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CATEGORY_COLORS = {
  Music: '#7C3AED',
  Tech: '#2563EB',
  Art: '#DB2777',
  Food: '#D97706',
  Wellness: '#059669',
  Networking: '#0891B2',
  Conference: '#4B5563',
};

export default function EventCard({ event, index = 0 }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 6;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -6;
    cardRef.current.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = '';
  };

  const color = CATEGORY_COLORS[event.category] || '#7C3AED';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        ref={cardRef}
        to={`/events/${event.id}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="card block group cursor-pointer overflow-hidden"
        style={{ transition: 'transform 0.12s ease, border-color 0.2s ease, box-shadow 0.2s ease' }}
      >
        {/* Image / Color block */}
        <div className="relative h-44 overflow-hidden bg-[#161616]">
          <div
            className="absolute inset-0 opacity-15 group-hover:opacity-20 transition-opacity duration-500"
            style={{ background: `radial-gradient(circle at 30% 50%, ${color}, transparent 70%)` }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-40">
            {event.emoji || '🎭'}
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 right-3 flex justify-between">
            <span
              className="text-[10px] font-sub font-semibold px-2 py-0.5 rounded-md text-white uppercase tracking-wide"
              style={{ background: color, opacity: 0.9 }}
            >
              {event.category}
            </span>
            <span className="text-[10px] font-sub font-medium px-2 py-0.5 rounded-md bg-[#0A0A0A]/80 text-[#888]">
              {event.price === 0 ? 'Free' : `₹${event.price}`}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="text-[11px] font-sub text-[#555]">{event.date}</span>
            <span className="text-[#222]">·</span>
            <span className="text-[11px] font-sub text-[#555]">{event.location}</span>
          </div>

          <h3
            className="font-sub font-semibold text-[#FAFAFA] group-hover:text-accent transition-colors line-clamp-2 mb-3"
            style={{ fontSize: '0.95rem', lineHeight: 1.35 }}
          >
            {event.title}
          </h3>

          <div className="flex items-center justify-between border-t border-[#1F1F1F] pt-3">
            <span className="text-[11px] font-sub text-[#555]">{event.attendees?.toLocaleString()} attending</span>
            <svg
              className="text-[#333] group-hover:text-[#888] group-hover:translate-x-0.5 transition-all duration-150"
              width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            >
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
