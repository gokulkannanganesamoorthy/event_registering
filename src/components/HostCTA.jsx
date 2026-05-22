import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HostCTA() {
  return (
    <section className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="card rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-10"
          style={{ background: '#0F0F0F' }}
        >
          {/* Left */}
          <div className="max-w-lg">
            <p className="label text-[#555] mb-4">For event creators</p>
            <h2
              className="font-heading text-[#FAFAFA] mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}
            >
              Host the events you want
              <br />
              <span className="italic text-gradient">to see in the world</span>
            </h2>
            <p className="text-[#555] font-sub text-sm leading-relaxed max-w-sm">
              From intimate workshops to massive festivals — EventSphere gives you everything to create,
              promote, and manage your event in one place.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 mt-7">
              {['Free to list', 'Instant reach', 'Ticket management', 'Attendee tracking', 'Email reminders', 'Analytics'].map((f) => (
                <div key={f} className="flex items-center gap-2 text-[#555] text-xs font-sub">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3 shrink-0">
            <Link to="/post-event" className="btn-primary px-7 py-3 text-sm">
              Post Your Event Free
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M7 17 17 7M7 7h10v10"/>
              </svg>
            </Link>
            <Link to="/about" className="btn-secondary px-7 py-3 text-sm text-center">
              Learn more
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
