import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import EventCard from './EventCard';
import { MOCK_EVENTS } from '../data/mockEvents';
import { useAuth } from '../context/AuthContext';

const CATEGORIES = ['All', 'Music', 'Tech', 'Art', 'Food', 'Wellness', 'Networking'];

export default function EventGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Try to use auth, handle if provider isn't wrapping yet
  let currentUser = null;
  try {
    const auth = useAuth();
    currentUser = auth?.currentUser;
  } catch (e) {}

  const filteredEvents = activeCategory === 'All' 
    ? MOCK_EVENTS 
    : MOCK_EVENTS.filter(e => e.category === activeCategory);

  // Calculate Recommendations
  let recommendedEvents = [];
  if (currentUser?.activityProfile && Object.keys(currentUser.activityProfile).length > 0) {
    const profile = currentUser.activityProfile;
    const topCategories = Object.keys(profile)
      .sort((a, b) => profile[b] - profile[a])
      .slice(0, 2);
      
    recommendedEvents = MOCK_EVENTS.filter(e => topCategories.includes(e.category)).slice(0, 4);
  }

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-violet/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Recommended For You Section */}
        {recommendedEvents.length > 0 && activeCategory === 'All' && (
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse-glow" />
                <p className="label text-gold/80">Personalized</p>
              </div>
              <h2 className="font-heading text-white text-4xl">Recommended for You</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedEvents.map((event, index) => (
                <div key={`rec-${event.id}`}>
                  <EventCard event={event} index={index} />
                </div>
              ))}
            </div>
            
            <div className="section-divider mt-16" />
          </div>
        )}

        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="label text-violet-light/60 mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-violet-light/40" />
              Curated for you
            </p>
            <h2 className="font-heading text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
              Happening <span className="text-gradient italic">Nearby</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <Link to="/events" className="btn-secondary group">
              View all events
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14m-7-7 7 7-7 7"/>
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Category Filter Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-3 overflow-x-auto pb-4 mb-8 -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none' }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              id={`cat-${cat.toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              className={`category-pill shrink-0 ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Bento Grid Layout */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => {
                // Make the first item larger in the bento grid (only on lg screens)
                const isFeatured = index === 0 && activeCategory === 'All';
                
                return (
                  <div key={event.id} className={isFeatured ? "lg:col-span-2 lg:row-span-2" : ""}>
                    <EventCard event={event} index={index} />
                  </div>
                );
              })
            ) : (
              <div className="col-span-full py-20 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 glass rounded-full flex items-center justify-center text-3xl mb-4">
                  🛸
                </div>
                <h3 className="font-heading text-white text-2xl mb-2">No events found</h3>
                <p className="p-sm text-white/50">Looks like the aliens abducted all events in this category.</p>
                <button onClick={() => setActiveCategory('All')} className="btn-secondary mt-6">
                  Reset filters
                </button>
              </div>
            )}
            
            {/* CTA Card injected into grid */}
            {filteredEvents.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="card-glow p-8 flex flex-col items-center justify-center text-center border-dashed border-2 border-white/20 hover:border-violet-light/50 group"
              >
                <div className="w-16 h-16 rounded-full bg-violet/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </div>
                <h3 className="font-heading text-white text-2xl mb-2">Host an event</h3>
                <p className="p-sm text-white/50 mb-6">Have an amazing idea? Bring it to life.</p>
                <Link to="/post-event" className="btn-primary w-full">
                  Create Event
                </Link>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Mobile View All Button */}
        <div className="mt-10 text-center md:hidden">
          <Link to="/events" className="btn-secondary w-full">
            View all events
          </Link>
        </div>

      </div>
    </section>
  );
}
