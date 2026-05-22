import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CATEGORY_GRADIENTS = {
  Music: 'from-violet to-fuchsia-600',
  Tech: 'from-blue-600 to-cyan-500',
  Art: 'from-pink-600 to-rose-500',
  Food: 'from-orange-500 to-amber-500',
  Wellness: 'from-emerald-500 to-teal-400',
  Networking: 'from-indigo-600 to-blue-500',
  Conference: 'from-slate-700 to-slate-500',
};

export default function EventCard({ event, index = 0 }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (-10 to 10 degrees)
    const rotateX = ((y / rect.height) - 0.5) * -20;
    const rotateY = ((x / rect.width) - 0.5) * 20;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // Set mouse position for the glow effect
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const gradient = CATEGORY_GRADIENTS[event.category] || CATEGORY_GRADIENTS.Music;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Link 
        to={`/events/${event.id}`}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="card-glow block h-full flex flex-col group"
        style={{ transition: 'transform 0.15s ease-out' }}
      >
        {/* Image / Gradient top */}
        <div className={`relative h-48 w-full bg-gradient-to-br ${gradient} overflow-hidden`}>
          {/* Noise overlay */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
          
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          
          {/* Event emoji/icon fallback */}
          <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50 transform group-hover:scale-110 transition-transform duration-700 ease-out">
            {event.emoji || '🎪'}
          </div>

          {/* Top badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="glass px-3 py-1 rounded-full text-xs font-sub font-semibold text-white shadow-sm">
              {event.category}
            </span>
          </div>

          {/* Price badge */}
          <div className="absolute top-4 right-4">
            <div className="glass px-3 py-1 rounded-full text-xs font-sub font-bold text-white shadow-sm flex items-center gap-1.5">
              {event.price === 0 ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Free
                </>
              ) : (
                `₹${event.price}`
              )}
            </div>
          </div>
        </div>

        {/* Content bottom */}
        <div className="p-5 flex flex-col flex-1 relative z-10 bg-space-2/50 backdrop-blur-md">
          
          {/* Date & Location row */}
          <div className="flex items-center gap-3 text-xs font-sub text-white/50 mb-3">
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {event.date}
            </div>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              {event.location}
            </div>
          </div>

          <h3 className="font-sub font-bold text-white text-lg mb-2 leading-tight group-hover:text-violet-light transition-colors">
            {event.title}
          </h3>

          {/* Spacer to push footer to bottom */}
          <div className="flex-1" />

          {/* Footer row */}
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-full border border-[#0d0b14] bg-gradient-to-br from-violet to-purple-600 opacity-80" />
                ))}
              </div>
              <span className="text-[10px] text-white/40 font-sub">
                +{event.attendees?.toLocaleString()} going
              </span>
            </div>
            
            <div className="w-8 h-8 rounded-full glass flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-black transition-all duration-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </div>
          </div>

        </div>
      </Link>
    </motion.div>
  );
}
