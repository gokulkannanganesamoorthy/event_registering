import { Link } from 'react-router-dom';

const SOCIAL_LINKS = [
  { name: 'Twitter', href: '#', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.257 5.627 5.907-5.627zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )},
  { name: 'Instagram', href: '#', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  )},
  { name: 'LinkedIn', href: '#', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )},
];

const FOOTER_LINKS = {
  Platform: [
    { label: 'Browse Events', href: '/events' },
    { label: 'Host an Event', href: '/post-event' },
    { label: 'About Us', href: '/about' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #1e0533 0%, #3B0764 40%, #7C3AED 100%)' }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between gap-14 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6 max-w-xs">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" fill="white"/>
                  <path d="M12 2C12 2 20 7 20 12C20 17 12 22 12 22" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M12 2C12 2 4 7 4 12C4 17 12 22 12 22" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" strokeOpacity="0.4"/>
                </svg>
              </div>
              <span className="font-sub font-bold text-white text-xl">EventSphere</span>
            </Link>

            <p className="p-md text-white/70 leading-relaxed font-sub">
              Where moments become movements. Discover extraordinary events or create your own legacy.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white hover:scale-110 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-16 md:gap-24">
            {Object.entries(FOOTER_LINKS).map(([section, links]) => (
              <div key={section}>
                <p className="label text-white/50 mb-6 tracking-[0.15em]">{section}</p>
                <ul className="flex flex-col gap-4">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="p-md text-white/70 hover:text-white font-sub hover:translate-x-1 transition-all inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="max-w-xs">
            <p className="label text-white/50 mb-5 tracking-[0.15em]">Stay in the loop</p>
            <p className="p-sm text-white/60 mb-5 font-sub">Get weekly event picks delivered directly to your inbox.</p>
            <div className="flex gap-2 p-1.5 glass rounded-2xl border-white/20">
              <input
                type="email"
                id="newsletter-email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-4 py-2 text-white text-sm placeholder-white/50 outline-none font-sub"
              />
              <button className="bg-white text-violet-dark font-sub font-bold px-5 py-2.5 rounded-xl hover:bg-white/90 hover:scale-105 transition-all shadow-sm">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Large tagline */}
        <div className="border-t border-white/10 pt-16 pb-6">
          <h2
            className="font-heading text-white text-center drop-shadow-lg"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 0.95, letterSpacing: '-0.03em' }}
          >
            Step outside.{' '}
            <span className="italic text-white/60 block mt-2">The world is waiting.</span>
          </h2>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-sub text-white/50 tracking-wide">© 2026 EventSphere. All rights reserved.</p>
          <p className="text-sm font-sub text-white/50 tracking-wide">Made with ♥ in India</p>
        </div>
      </div>
    </footer>
  );
}
