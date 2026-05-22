import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function EventModal({ event, isOpen, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!event) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[#050508] overflow-y-auto"
        >
          {/* Top Image Section */}
          <div className="relative w-full h-[55vh] sm:h-[65vh] shrink-0">
            {/* Random placeholder image based on event id */}
            <img 
              src={`https://picsum.photos/seed/${event.id}/1920/1080`} 
              alt={event.title}
              className="w-full h-full object-cover opacity-80"
            />
            
            {/* Seamless fade to background color */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050508]/40 to-[#050508]" />

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 sm:top-10 sm:right-12 flex items-center gap-3 text-white/60 hover:text-white group z-50 transition-colors"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase font-sub hidden sm:block">Close</span>
              <svg 
                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                strokeWidth="1" strokeLinecap="round" 
                className="group-hover:rotate-90 transition-transform duration-500"
              >
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          {/* Content Section */}
          <div className="max-w-5xl mx-auto px-6 sm:px-12 relative z-10 -mt-24 sm:-mt-32 pb-32">
            
            {/* Meta Tags */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-sub">
                {event.category}
              </span>
              <span className="w-8 h-px bg-white/20" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-sub">
                {event.location}
              </span>
            </div>

            {/* Title */}
            <h1 
              className="font-heading text-white mb-16 leading-tight"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', letterSpacing: '-0.02em' }}
            >
              {event.title}
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
              
              {/* Left Column - Main Details */}
              <div className="lg:col-span-8">
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-8 font-sub">The Vision</h3>
                
                <div className="prose prose-invert max-w-none font-sub">
                  <p className="text-white/80 leading-relaxed text-lg sm:text-xl mb-6 font-light">
                    Join us for an extraordinary experience designed to bring together the best and brightest. 
                    This isn't just another event; it's a movement carefully crafted to inspire, connect, and elevate.
                  </p>
                  <p className="text-white/60 leading-relaxed text-base sm:text-lg font-light">
                    Immerse yourself in a curated environment where every detail has been thoughtfully designed. 
                    From world-class speakers to intimate networking sessions, expect to leave with new perspectives, 
                    valuable connections, and unforgettable memories.
                  </p>
                </div>

                {/* Additional Info Grid */}
                <div className="grid grid-cols-2 gap-8 mt-16 pt-12 border-t border-white/5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2 font-sub">Experience</p>
                    <p className="text-white/80 font-sub text-sm">Interactive sessions, live performances, and exclusive access.</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2 font-sub">Attendees</p>
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-6 h-6 rounded-full border border-[#050508] bg-white/10" />
                        ))}
                      </div>
                      <p className="text-white/80 font-sub text-sm">+{event.attendees?.toLocaleString()} joining</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Logistics & CTA */}
              <div className="lg:col-span-4">
                <div className="glass-dark rounded-3xl p-8 border border-white/5 sticky top-8">
                  <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-8 font-sub">Logistics</h3>
                  
                  <div className="space-y-6 mb-10">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-violet-light/70 mb-1 font-sub">Date & Time</p>
                      <p className="text-white font-sub font-medium">{event.date}</p>
                    </div>
                    
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-violet-light/70 mb-1 font-sub">Location</p>
                      <p className="text-white font-sub font-medium">{event.location}</p>
                    </div>
                    
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-violet-light/70 mb-1 font-sub">Access</p>
                      <p className="text-white font-sub font-medium">
                        {event.price === 0 ? 'Complimentary Registration' : `₹${event.price} per ticket`}
                      </p>
                    </div>
                  </div>

                  <Link 
                    to={`/events/${event.id}/register`}
                    onClick={onClose}
                    className="block w-full py-4 bg-white text-black text-center font-sub text-xs uppercase tracking-[0.15em] font-bold hover:bg-white/90 transition-colors rounded-full"
                  >
                    Secure Your Spot
                  </Link>
                  <p className="text-center text-white/30 text-[10px] font-sub mt-4 uppercase tracking-widest">
                    Limited Availability
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
