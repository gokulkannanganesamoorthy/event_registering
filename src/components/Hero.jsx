import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

const CATEGORIES = ['All', 'Music', 'Tech', 'Art', 'Food', 'Wellness', 'Networking'];
const CITIES = ['All Cities', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune'];

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth out the scroll value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(smoothProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.1]);

  const [query, setQuery] = useState('');
  const [city, setCity] = useState('Mumbai');
  const [showCityDropdown, setShowCityDropdown] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('#city-selector')) {
        setShowCityDropdown(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-10">
      
      {/* Background layer with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y, opacity, scale }}
      >
        <div className="absolute inset-0 bg-space/60 mix-blend-multiply z-10" />
        <img 
          src="/hero-bg.png" 
          alt="Abstract energetic background" 
          className="w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space via-space/50 to-transparent z-20" />
      </motion.div>

      {/* Animated Orbs */}
      <div className="orb orb-violet absolute w-[500px] h-[500px] top-[-10%] left-[-10%] opacity-30" />
      <div className="orb orb-purple absolute w-[400px] h-[400px] bottom-[10%] right-[-5%] opacity-20" />

      {/* Main Content */}
      <div className="relative z-30 w-full max-w-5xl mx-auto px-4 flex flex-col items-center text-center mt-12">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-violet rounded-full px-4 py-1.5 mb-8 flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-violet-light animate-pulse-glow" />
          <span className="label text-violet-light/90">10,000+ Events Worldwide</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-white mb-6 leading-none"
          style={{ 
            fontSize: 'clamp(3rem, 8vw, 7.5rem)',
            letterSpacing: '-0.02em'
          }}
        >
          Where Moments <br/>
          <span className="text-gradient italic">Become Movements</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="p-lg text-white/60 max-w-2xl mb-12 font-sub"
        >
          Discover extraordinary events near you, or post your own to inspire thousands. The future of event discovery is here.
        </motion.p>

        {/* Search Bar - Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-3xl glass-dark rounded-full p-2 flex flex-col sm:flex-row items-center gap-2 shadow-card group"
        >
          {/* Search Input */}
          <div className="flex-1 flex items-center w-full">
            <div className="pl-5 shrink-0 text-white/40 group-focus-within:text-violet-light transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search events, artists, experiences..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-white placeholder:text-white/30 px-4 py-3.5 font-sub text-base"
            />
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-8 bg-white/10" />

          {/* City Selector */}
          <div id="city-selector" className="relative w-full sm:w-auto shrink-0">
            <button 
              onClick={() => setShowCityDropdown(!showCityDropdown)}
              className="w-full flex items-center justify-between sm:justify-start gap-2 px-5 py-3.5 text-white/80 hover:text-white font-sub text-sm transition-colors"
            >
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                {city}
              </div>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {showCityDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 glass-dark border border-white/10 rounded-2xl py-2 min-w-[160px] shadow-card-h z-50 overflow-hidden"
                >
                  {CITIES.map((c) => (
                    <button
                      key={c}
                      onClick={() => { setCity(c); setShowCityDropdown(false); }}
                      className={`w-full text-left px-5 py-2.5 text-sm font-sub transition-colors ${
                        c === city ? 'text-violet-light bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Search Button */}
          <Link 
            to={`/events?q=${query}&city=${city}`}
            className="w-full sm:w-auto shrink-0 bg-gradient-to-r from-violet to-violet-light text-white px-8 py-3.5 rounded-full font-sub font-semibold text-sm shadow-gv hover:shadow-gv-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-center"
          >
            Search
          </Link>
        </motion.div>

        {/* Trending Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="text-white/40 text-xs font-sub uppercase tracking-wider mr-2">Trending:</span>
          {['Music 🎵', 'Tech Summit 💻', 'Art Fair 🎨', 'Food Festival 🍜'].map(tag => (
            <Link 
              key={tag} 
              to={`/events?q=${tag.split(' ')[0]}`}
              className="glass px-4 py-1.5 rounded-full text-xs font-sub text-white/70 hover:text-white hover:bg-white/10 transition-colors border border-white/5"
            >
              {tag}
            </Link>
          ))}
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="label text-white/30 text-[10px]">Scroll to explore</span>
        <div className="w-5 h-8 glass rounded-full flex justify-center p-1 border border-white/10">
          <motion.div 
            animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-violet-light rounded-full"
          />
        </div>
      </motion.div>

    </section>
  );
}
