import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import EventCard from './EventCard';
import { MOCK_EVENTS } from '../data/mockEvents';

const FILTERS = ['All', 'Free', 'Music', 'Tech', 'Art', 'Food', 'Wellness', 'Networking'];

export default function EventGrid() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? MOCK_EVENTS
    : active === 'Free'
    ? MOCK_EVENTS.filter((e) => e.price === 0)
    : MOCK_EVENTS.filter((e) => e.category === active);

  return (
    <section className="py-20 px-5">
      <div className="max-w-6xl mx-auto">

        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-8"
        >
          <div>
            <p className="label text-[#555] mb-2">Happening near you</p>
            <h2
              className="font-heading text-[#FAFAFA]"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}
            >
              Events you'll love
            </h2>
          </div>
          <Link to="/events" className="btn-secondary hidden sm:inline-flex text-xs">
            View all
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </Link>
        </motion.div>

        {/* Filter chips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex gap-2 overflow-x-auto pb-1 mb-8"
          style={{ scrollbarWidth: 'none' }}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              id={`filter-${f.toLowerCase()}`}
              onClick={() => setActive(f)}
              className={`chip ${active === f ? 'active' : ''}`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-[#555] font-sub">No events for this filter</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((e, i) => (
              <EventCard key={e.id} event={e} index={i} />
            ))}

            {/* Inline host CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card p-5 flex flex-col justify-between border-dashed"
            >
              <div>
                <p className="label text-[#555] mb-3">For hosts</p>
                <h3 className="font-sub font-semibold text-[#FAFAFA] text-base mb-2 leading-snug">
                  Have an event idea?
                </h3>
                <p className="text-[#555] text-xs font-sub leading-relaxed">
                  Post it free and reach thousands of attendees.
                </p>
              </div>
              <Link to="/post-event" className="btn-primary text-xs mt-5 self-start py-2 px-4">
                Post Event
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
