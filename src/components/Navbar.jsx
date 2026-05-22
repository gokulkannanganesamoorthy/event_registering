import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Discover', href: '/events' },
  { label: 'Host', href: '/post-event' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-[#1F1F1F] bg-[#0A0A0A]/95 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="3" fill="white"/>
                <path d="M12 3C12 3 19 7 19 12C19 17 12 21 12 21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 3C12 3 5 7 5 12C5 17 12 21 12 21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-sub font-semibold text-[#FAFAFA] text-sm tracking-tight">EventSphere</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`px-3 py-1.5 rounded-md text-sm font-sub transition-colors duration-150 ${
                  location.pathname === l.href
                    ? 'text-[#FAFAFA] bg-[#1F1F1F]'
                    : 'text-[#888] hover:text-[#FAFAFA]'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link to="/post-event" className="hidden sm:inline-flex btn-primary text-xs py-1.5 px-4">
              Post Event
            </Link>
            <button
              id="mobile-menu-btn"
              className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <motion.span animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-4.5 h-px bg-[#888] origin-center" style={{ width: '18px', height: '1.5px' }} />
              <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="block bg-[#888]" style={{ width: '18px', height: '1.5px' }} />
              <motion.span animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block bg-[#888] origin-center" style={{ width: '18px', height: '1.5px' }} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center gap-6"
          >
            {[{ label: 'Home', href: '/' }, ...NAV_LINKS].map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
              >
                <Link
                  to={l.href}
                  className="font-heading text-4xl text-[#FAFAFA]/80 hover:text-[#FAFAFA] transition-colors"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }}>
              <Link to="/post-event" className="btn-primary mt-4">Post an Event</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
