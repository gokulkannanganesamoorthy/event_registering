import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
        style={{ pointerEvents: 'none' }}
      >
        <div
          className={`relative flex items-center justify-between px-6 py-3.5 rounded-full transition-all duration-500 w-full max-w-4xl pointer-events-auto ${
            scrolled
              ? 'glass shadow-card-h'
              : 'bg-black/20 backdrop-blur-md border border-white/10 shadow-card'
          }`}
        >
          {/* Subtle glow when scrolled */}
          {scrolled && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet/20 via-transparent to-violet/20 blur-md -z-10" />
          )}

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-light to-violet flex items-center justify-center group-hover:shadow-gv-sm transition-all duration-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3" fill="white"/>
                <path d="M12 2C12 2 20 7 20 12C20 17 12 22 12 22" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 2C12 2 4 7 4 12C4 17 12 22 12 22" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" strokeOpacity="0.4"/>
              </svg>
            </div>
            <span className="font-sub font-bold text-white tracking-tight">EventSphere</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {[
              { name: 'Discover', path: '/events' },
              { name: 'Host', path: '/post-event' },
              { name: 'About', path: '/about' },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-sub text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Post CTA (Desktop) */}
          <div className="hidden md:block">
            <Link to="/post-event" className="btn-primary py-2 px-5 text-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 5v14M5 12h14"/>
              </svg>
              Post Event
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 z-50 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-current transition-transform"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-current transition-opacity"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-current transition-transform"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at top right)' }}
            animate={{ clipPath: 'circle(150% at top right)' }}
            exit={{ clipPath: 'circle(0% at top right)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-space/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8 text-center">
              {[
                { name: 'Home', path: '/' },
                { name: 'Discover', path: '/events' },
                { name: 'Host an Event', path: '/post-event' },
                { name: 'About', path: '/about' },
              ].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="font-heading text-4xl text-white hover:text-violet-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12"
            >
              <Link to="/post-event" className="btn-primary text-lg px-8 py-4">
                Post an Event
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
