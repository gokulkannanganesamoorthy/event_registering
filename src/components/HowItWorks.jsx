import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const STEPS = [
  {
    number: '01',
    title: 'Discover',
    description: 'Browse thousands of events curated for your city and interests. Filter by category, date, and price.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Register',
    description: 'Seamlessly register for any event in seconds. Get your ticket and all event details instantly.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Experience',
    description: 'Attend the event, connect with like-minded people, and create unforgettable memories.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Host',
    description: 'Have an amazing idea? Post your own event and reach thousands of passionate attendees.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="orb orb-purple absolute w-96 h-96 -right-24 top-1/3 opacity-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className="label text-violet-light/60 mb-4">Simple. Seamless. Spectacular.</p>
          <h2
            className="font-heading text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}
          >
            How EventSphere{' '}
            <span className="italic text-gradient">works</span>
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px">
            <div className="h-full bg-gradient-to-r from-transparent via-violet/30 to-transparent" />
          </div>

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="card-glow p-6 h-full flex flex-col group border border-white/5 bg-white/5 backdrop-blur-xl rounded-3xl">
                {/* Step number + icon */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-2xl glass-violet flex items-center justify-center text-violet-light group-hover:shadow-gv-sm transition-all duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>
                  <span
                    className="font-heading text-white/15 group-hover:text-white/25 transition-colors"
                    style={{ fontSize: '2rem', lineHeight: 1 }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="font-heading text-white mb-3 relative z-10"
                  style={{ fontSize: '1.5rem', lineHeight: 1.2 }}
                >
                  {step.title}
                </h3>
                <p className="p-sm text-white/50 leading-relaxed flex-1 relative z-10">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link to="/events" className="btn-primary">
            Start Exploring
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
