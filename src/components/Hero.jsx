import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const CITIES = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Pune'];

export default function Hero() {
  const [query, setQuery] = useState('');
  const [city, setCity] = useState('Mumbai');
  const [showCities, setShowCities] = useState(false);

  return (
    <section className="relative min-h-[88vh] flex flex-col items-center justify-center px-5 pt-20 pb-16">
      {/* Subtle top gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.12) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 label text-[#555] border border-[#1F1F1F] px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-soft" />
            10,000+ events worldwide
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-[#FAFAFA] mb-6"
          style={{ fontSize: 'clamp(2.75rem, 7vw, 6rem)', lineHeight: 1.06, letterSpacing: '-0.04em' }}
        >
          Where moments
          <br />
          <span className="text-gradient italic">become movements</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="text-[#888] font-sub text-base max-w-md mx-auto mb-12 leading-relaxed"
        >
          Discover events near you, or post your own to reach thousands of people who care.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="flex items-center bg-[#111] border border-[#1F1F1F] rounded-xl overflow-visible shadow-card focus-within:border-[#2A2A2A] transition-colors mx-auto max-w-xl relative"
        >
          {/* Search icon */}
          <div className="pl-4 text-[#555] shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
            </svg>
          </div>

          <input
            id="hero-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search events..."
            className="flex-1 bg-transparent text-[#FAFAFA] placeholder-[#555] outline-none px-3 py-3.5 font-sub text-sm"
          />

          {/* City selector */}
          <div className="relative border-l border-[#1F1F1F] shrink-0">
            <button
              onClick={() => setShowCities(!showCities)}
              className="flex items-center gap-1.5 px-4 py-3.5 text-[#888] hover:text-[#FAFAFA] text-sm font-sub transition-colors"
            >
              {city}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>

            <AnimatePresence>
              {showCities && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-1.5 bg-[#111] border border-[#1F1F1F] rounded-xl py-1.5 min-w-[140px] shadow-card-hover z-50"
                >
                  {CITIES.map((c) => (
                    <button
                      key={c}
                      onClick={() => { setCity(c); setShowCities(false); }}
                      className={`w-full text-left px-4 py-2 text-sm font-sub transition-colors ${
                        c === city ? 'text-accent' : 'text-[#888] hover:text-[#FAFAFA] hover:bg-[#161616]'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="p-1.5 shrink-0">
            <Link
              to={`/events?q=${query}&city=${city}`}
              className="btn-primary text-xs py-2 px-5 rounded-lg"
            >
              Search
            </Link>
          </div>
        </motion.div>

        {/* Trending tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.48 }}
          className="flex items-center justify-center gap-2 flex-wrap mt-6"
        >
          <span className="label text-[#444] mr-1">Trending</span>
          {['Music', 'Tech', 'Art', 'Food & Drink', 'Wellness'].map((t) => (
            <Link key={t} to={`/events?q=${t}`} className="chip text-xs">{t}</Link>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
