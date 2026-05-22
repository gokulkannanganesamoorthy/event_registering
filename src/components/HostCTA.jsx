import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HostCTA() {
  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0d0d14 0%, #1a0a2e 50%, #0d0d14 100%)' }}
        >
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'linear-gradient(rgba(124,58,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.3) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />

          {/* Orbs */}
          <div className="orb orb-violet absolute w-80 h-80 -top-20 -right-20 opacity-30" />
          <div className="orb orb-gold absolute w-48 h-48 bottom-0 left-16 opacity-20" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 p-10 md:p-16">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="label text-violet-light/60 glass-violet px-4 py-2 rounded-full inline-block mb-6 shadow-gv-sm">
                  For Event Creators
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-heading text-white mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}
              >
                Host events you want{' '}
                <br />
                <span className="italic text-gradient">to see in the world</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-lg text-white/50 mb-10 max-w-lg mx-auto lg:mx-0"
              >
                From intimate workshops to massive festivals. EventSphere gives you every tool
                to create, promote, and manage your event — all in one place.
              </motion.p>

              {/* Feature bullets */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
              >
                {[
                  'Free to list your event',
                  'Reach thousands instantly',
                  'Easy ticket management',
                  'Real-time attendee tracking',
                  'Automated reminders',
                  'Post-event analytics',
                ].map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-white/70">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-violet to-violet-light flex items-center justify-center shrink-0">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <span className="p-sm">{feat}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 items-center lg:items-start"
              >
                <Link to="/post-event" className="btn-primary text-base px-8 py-4">
                  Post Your Event Free
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M7 17 17 7M7 7h10v10"/>
                  </svg>
                </Link>
                <Link to="/about" className="btn-secondary text-base px-8 py-4">
                  Learn More
                </Link>
              </motion.div>
            </div>

            {/* Right — Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 w-full lg:w-auto"
            >
              {/* Floating phone-like card mockup */}
              <div className="relative mx-auto" style={{ width: '280px' }}>
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-radial from-violet/40 to-transparent blur-2xl scale-110" />

                {/* Card */}
                <div className="relative glass border border-white/10 rounded-3xl overflow-hidden p-5 shadow-gv">
                  <div className="mb-4">
                    <div className="w-full h-36 rounded-xl bg-gradient-to-br from-violet/30 to-violet-light/20 flex items-center justify-center text-5xl mb-3">
                      🎭
                    </div>
                    <div className="space-y-2">
                      <div className="skeleton h-5 w-3/4 rounded" />
                      <div className="skeleton h-3 w-1/2 rounded" />
                    </div>
                  </div>

                  <div className="glass-violet rounded-xl p-3 mb-3 border border-violet/30">
                    <p className="p-sm text-violet-light font-sub font-medium mb-1">Event Posted! 🎉</p>
                    <p className="p-sm text-white/50 text-xs">Your event is live and reaching 12,000+ people nearby</p>
                  </div>

                  <div className="flex gap-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-violet to-violet-light opacity-80 border border-black/50 shadow-sm" style={{ opacity: 1 - i * 0.15, marginLeft: i > 0 ? '-10px' : '0' }} />
                    ))}
                    <span className="p-sm text-white/40 text-[10px] self-center ml-1">+847 interested</span>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 glass border border-white/10 rounded-2xl px-3 py-2 shadow-gv-sm"
                >
                  <p className="p-sm text-white font-sub font-semibold text-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    Live Now ✨
                  </p>
                  <p className="p-sm text-white/40 text-[10px]">23 registrations/hr</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
