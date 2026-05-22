import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import EventCard from '../components/EventCard';
import Footer from '../components/Footer';
import { MOCK_EVENTS } from '../data/mockEvents';

const ALL_CATEGORIES = ['All', 'Music', 'Tech', 'Art', 'Food', 'Wellness', 'Networking'];
const ALL_CITIES = ['All Cities', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune'];
const PRICE_FILTERS = ['Any Price', 'Free', 'Paid'];

export default function Events() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [city, setCity] = useState(searchParams.get('city') || 'All Cities');
  const [category, setCategory] = useState('All');
  const [priceFilter, setPriceFilter] = useState('Any Price');

  const filtered = MOCK_EVENTS.filter((e) => {
    const matchQuery = !query || e.title.toLowerCase().includes(query.toLowerCase()) || e.category.toLowerCase().includes(query.toLowerCase());
    const matchCity = city === 'All Cities' || e.location === city;
    const matchCategory = category === 'All' || e.category === category;
    const matchPrice = priceFilter === 'Any Price' || (priceFilter === 'Free' ? e.price === 0 : e.price > 0);
    return matchQuery && matchCity && matchCategory && matchPrice;
  });

  return (
    <>
      <SEOHead
        title="EventSphere | Browse Events"
        description="Browse thousands of events across India. Filter by city, category, and date to find your perfect experience."
        ogUrl="https://eventsphere.app/events"
      />

      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <p className="label text-violet-light/60 mb-3">10,000+ events</p>
            <h1
              className="font-heading text-white"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
            >
              Discover{' '}
              <span className="italic text-gradient">extraordinary</span>
              <br />
              events
            </h1>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass rounded-2xl p-4 mb-10 flex flex-col sm:flex-row gap-3"
          >
            {/* Search */}
            <div className="flex-1 relative">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
              </svg>
              <input
                id="events-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search events..."
                className="input-dark pl-10"
              />
            </div>

            {/* City */}
            <select
              id="city-filter"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="input-dark sm:w-44 cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.05)' }}
            >
              {ALL_CITIES.map((c) => <option key={c} value={c} style={{ background: '#0d0d14' }}>{c}</option>)}
            </select>

            {/* Price */}
            <select
              id="price-filter"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="input-dark sm:w-36 cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.05)' }}
            >
              {PRICE_FILTERS.map((p) => <option key={p} value={p} style={{ background: '#0d0d14' }}>{p}</option>)}
            </select>
          </motion.div>

          {/* Category Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="flex gap-2 overflow-x-auto pb-3 mb-8"
            style={{ scrollbarWidth: 'none' }}
          >
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                id={`cat-${cat.toLowerCase()}`}
                onClick={() => setCategory(cat)}
                className={`category-pill ${category === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Results count */}
          <p className="p-sm text-white/40 mb-6 font-sub">
            {filtered.length} event{filtered.length !== 1 ? 's' : ''} found
          </p>

          {/* Grid */}
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-sub font-semibold text-white/60 text-xl mb-2">No events found</h3>
              <p className="p-md text-white/30">Try adjusting your filters</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((event, i) => (
                <EventCard key={event.id} event={event} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
