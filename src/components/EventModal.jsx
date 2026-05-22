import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
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

  const gradient = CATEGORY_GRADIENTS[event.category] || CATEGORY_GRADIENTS.Music;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-space/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-end justify-center pointer-events-none sm:p-4 sm:items-center">
            <motion.div
              initial={{ y: '100%', scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: '100%', scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-2xl bg-space-2 rounded-t-[2rem] sm:rounded-3xl border-t sm:border border-white/10 shadow-gv overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]"
            >
              {/* Header Image/Gradient */}
              <div className={`relative h-48 sm:h-56 w-full bg-gradient-to-br ${gradient} shrink-0`}>
                <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
                <div className="absolute inset-0 bg-black/30" />
                
                {/* Emoji Icon */}
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-80 mix-blend-overlay">
                  {event.emoji || '🎪'}
                </div>

                {/* Close Button */}
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-colors z-10"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-6">
                  <span className="glass px-4 py-1.5 rounded-full text-xs font-sub font-semibold text-white shadow-sm">
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h2 className="font-heading text-white text-3xl sm:text-4xl leading-tight">
                    {event.title}
                  </h2>
                  <div className="glass px-4 py-2 rounded-xl text-lg font-sub font-bold text-white shrink-0 text-center shadow-gv-sm border-violet/30">
                    {event.price === 0 ? 'Free' : `₹${event.price}`}
                  </div>
                </div>

                {/* Event Details Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                  <div className="glass-dark rounded-2xl p-4 border border-white/5">
                    <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1 font-sub">Date & Time</p>
                    <p className="font-sub font-medium text-white/90 text-sm flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                      {event.date}
                    </p>
                  </div>
                  
                  <div className="glass-dark rounded-2xl p-4 border border-white/5">
                    <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1 font-sub">Location</p>
                    <p className="font-sub font-medium text-white/90 text-sm flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                      {event.location}
                    </p>
                  </div>

                  <div className="glass-dark rounded-2xl p-4 border border-white/5 col-span-2 sm:col-span-1">
                    <p className="text-[10px] uppercase tracking-wider text-white/40 mb-1 font-sub">Attendees</p>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-5 h-5 rounded-full border border-[#0d0b14] bg-gradient-to-br from-violet to-purple-600 opacity-80" />
                        ))}
                      </div>
                      <p className="font-sub font-medium text-white/90 text-sm">
                        +{event.attendees?.toLocaleString()} going
                      </p>
                    </div>
                  </div>
                </div>

                {/* About Section */}
                <div className="mb-8">
                  <h3 className="font-sub font-semibold text-white text-lg mb-3">About this event</h3>
                  <p className="p-md text-white/60 font-sub leading-relaxed">
                    Join us for {event.title}, an exclusive experience designed to bring together the best of {event.category.toLowerCase()}. 
                    This is a placeholder description that provides more context about the event, what to expect, and why you should attend. 
                    Expect incredible vibes, great networking opportunities, and unforgettable moments.
                  </p>
                </div>

              </div>

              {/* Sticky Footer CTA */}
              <div className="p-6 border-t border-white/10 bg-space-2/90 backdrop-blur-xl shrink-0">
                <Link 
                  to={`/events/${event.id}/register`}
                  onClick={onClose}
                  className="btn-primary w-full py-4 text-lg justify-center shadow-gv hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] group"
                >
                  Register Now
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14m-7-7 7 7-7 7"/>
                  </svg>
                </Link>
                <p className="text-center text-white/40 text-xs font-sub mt-3">
                  Secure checkout • Instant ticket delivery
                </p>
              </div>

            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
