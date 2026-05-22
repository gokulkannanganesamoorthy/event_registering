import { Link } from 'react-router-dom';

const LINKS = {
  Platform: [
    { label: 'Browse Events', href: '/events' },
    { label: 'Host an Event', href: '/post-event' },
    { label: 'About', href: '/about' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#1F1F1F] pt-14 pb-10 px-5 mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-14">
          {/* Brand */}
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" fill="white"/>
                  <path d="M12 3C12 3 19 7 19 12C19 17 12 21 12 21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 3C12 3 5 7 5 12C5 17 12 21 12 21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-sub font-semibold text-[#FAFAFA] text-sm">EventSphere</span>
            </Link>
            <p className="text-[#555] text-sm font-sub leading-relaxed">
              Where moments become movements. Discover extraordinary events or create your own.
            </p>
          </div>

          {/* Nav */}
          <div className="flex gap-16">
            {Object.entries(LINKS).map(([section, links]) => (
              <div key={section}>
                <p className="label text-[#444] mb-4">{section}</p>
                <ul className="flex flex-col gap-3">
                  {links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.href} className="text-[#555] hover:text-[#FAFAFA] text-sm font-sub transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <p className="label text-[#444] mb-4">Stay in the loop</p>
            <div className="flex gap-2">
              <input
                type="email"
                id="footer-email"
                placeholder="your@email.com"
                className="input-field w-44 text-xs py-2"
              />
              <button className="btn-primary text-xs py-2 px-4">Go</button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1F1F1F] pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#444] text-xs font-sub">© 2026 EventSphere</p>
          <p className="text-[#444] text-xs font-sub">Made with ♥ in India</p>
        </div>
      </div>
    </footer>
  );
}
