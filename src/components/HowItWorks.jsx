import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const STEPS = [
  { n: '01', title: 'Discover', desc: 'Browse curated events in your city, filtered by what you love.' },
  { n: '02', title: 'Register', desc: 'One-click registration. Get your ticket and details instantly.' },
  { n: '03', title: 'Experience', desc: 'Show up, connect, and create memories that last.' },
  { n: '04', title: 'Host', desc: 'Have an idea? Post your event free and reach thousands.' },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-5">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="label text-[#555] mb-2">Simple by design</p>
          <h2
            className="font-heading text-[#FAFAFA]"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}
          >
            How it works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card p-6 group"
            >
              <div
                className="font-heading text-[#1F1F1F] group-hover:text-[#2A2A2A] transition-colors mb-5"
                style={{ fontSize: '3rem', lineHeight: 1 }}
              >
                {s.n}
              </div>
              <h3 className="font-sub font-semibold text-[#FAFAFA] text-base mb-2">{s.title}</h3>
              <p className="text-[#555] text-sm font-sub leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <Link to="/events" className="btn-secondary text-sm">
            Start exploring
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
