import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Footer from '../components/Footer';

const STEPS = [
  { id: 1, label: 'Basics' },
  { id: 2, label: 'Details' },
  { id: 3, label: 'Publish' },
];

const CATEGORIES = ['Music', 'Tech', 'Art', 'Food', 'Wellness', 'Networking', 'Conference', 'Sports', 'Education', 'Other'];

const DEFAULT_FORM = {
  title: '',
  category: '',
  date: '',
  time: '',
  location: '',
  city: '',
  capacity: '',
  price: '',
  description: '',
  website: '',
  contactEmail: '',
  tags: '',
};

function StepIndicator({ current, total }) {
  return (
    <div className="flex items-center gap-0 mb-12">
      {STEPS.map((step, i) => (
        <div key={step.id} className="flex items-center">
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-sub font-semibold text-sm transition-all duration-300 ${
              step.id < current
                ? 'bg-violet text-white'
                : step.id === current
                ? 'bg-gradient-to-br from-violet to-violet-light text-white shadow-glow-violet-sm'
                : 'glass border border-white/10 text-white/30'
            }`}>
              {step.id < current ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              ) : step.id}
            </div>
            <span className={`label text-[10px] mt-1.5 ${step.id === current ? 'text-violet-light' : 'text-white/30'}`}>
              {step.label}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <div className={`h-px w-16 sm:w-24 mx-2 mb-5 transition-all duration-500 ${
              step.id < current ? 'bg-violet' : 'bg-white/10'
            }`} />
          )}
        </div>
      ))}
    </div>
  );
}

export default function PostEvent() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(DEFAULT_FORM);
  const [submitted, setSubmitted] = useState(false);

  const update = (field, value) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <SEOHead title="EventSphere | Event Posted!" ogUrl="https://eventsphere.app/post-event" />
        <div className="min-h-screen flex items-center justify-center px-4 pt-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-md"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-7xl mb-6"
            >
              🎉
            </motion.div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet to-violet-light flex items-center justify-center mx-auto mb-6 shadow-glow-violet">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </div>
            <h2 className="font-heading text-white text-4xl mb-4">Your event is live!</h2>
            <p className="p-lg text-white/60 mb-8">
              <strong className="text-white">{form.title}</strong> is now visible to thousands of event enthusiasts near {form.city || 'you'}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/events" className="btn-primary">Browse Events</Link>
              <button onClick={() => { setSubmitted(false); setStep(1); setForm(DEFAULT_FORM); }} className="btn-secondary">
                Post Another
              </button>
            </div>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="EventSphere | Host an Event"
        description="Post your event on EventSphere and reach thousands of passionate attendees across every city."
        ogUrl="https://eventsphere.app/post-event"
      />

      <div className="min-h-screen pt-28 pb-20 px-4">
        {/* Background orbs */}
        <div className="orb orb-violet fixed w-96 h-96 top-16 -right-24 opacity-10 pointer-events-none" />
        <div className="orb orb-purple fixed w-72 h-72 bottom-24 -left-16 opacity-08 pointer-events-none" />

        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <p className="label text-violet-light/60 mb-3">For Event Creators</p>
            <h1
              className="font-heading text-white mb-3"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
            >
              Post your{' '}
              <span className="italic text-gradient">event</span>
            </h1>
            <p className="p-lg text-white/50">
              Reach thousands of passionate attendees in minutes. It's completely free.
            </p>
          </motion.div>

          {/* Step Indicator */}
          <StepIndicator current={step} total={3} />

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8 border border-white/08"
          >
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-5"
                  >
                    <h3 className="font-heading text-white text-2xl mb-6">Event Basics</h3>

                    {/* Title */}
                    <div>
                      <label htmlFor="event-title" className="label text-white/50 mb-2 block">Event Title *</label>
                      <input
                        id="event-title"
                        type="text"
                        required
                        value={form.title}
                        onChange={(e) => update('title', e.target.value)}
                        placeholder="e.g. Neon Nights Music Festival"
                        className="input-dark"
                      />
                    </div>

                    {/* Category */}
                    <div>
                      <label htmlFor="event-category" className="label text-white/50 mb-2 block">Category *</label>
                      <div className="flex flex-wrap gap-2">
                        {CATEGORIES.map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            id={`cat-btn-${cat.toLowerCase()}`}
                            onClick={() => update('category', cat)}
                            className={`category-pill ${form.category === cat ? 'active' : ''}`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Date + Time */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="event-date" className="label text-white/50 mb-2 block">Date *</label>
                        <input
                          id="event-date"
                          type="date"
                          required
                          value={form.date}
                          onChange={(e) => update('date', e.target.value)}
                          className="input-dark"
                          style={{ colorScheme: 'dark' }}
                        />
                      </div>
                      <div>
                        <label htmlFor="event-time" className="label text-white/50 mb-2 block">Time *</label>
                        <input
                          id="event-time"
                          type="time"
                          required
                          value={form.time}
                          onChange={(e) => update('time', e.target.value)}
                          className="input-dark"
                          style={{ colorScheme: 'dark' }}
                        />
                      </div>
                    </div>

                    {/* City + Venue */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="event-city" className="label text-white/50 mb-2 block">City *</label>
                        <input
                          id="event-city"
                          type="text"
                          required
                          value={form.city}
                          onChange={(e) => update('city', e.target.value)}
                          placeholder="Mumbai"
                          className="input-dark"
                        />
                      </div>
                      <div>
                        <label htmlFor="event-location" className="label text-white/50 mb-2 block">Venue / Location *</label>
                        <input
                          id="event-location"
                          type="text"
                          required
                          value={form.location}
                          onChange={(e) => update('location', e.target.value)}
                          placeholder="NSCI Dome, Worli"
                          className="input-dark"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-5"
                  >
                    <h3 className="font-heading text-white text-2xl mb-6">Event Details</h3>

                    {/* Description */}
                    <div>
                      <label htmlFor="event-desc" className="label text-white/50 mb-2 block">Description *</label>
                      <textarea
                        id="event-desc"
                        required
                        rows={5}
                        value={form.description}
                        onChange={(e) => update('description', e.target.value)}
                        placeholder="Tell people what makes your event special..."
                        className="input-dark resize-none"
                      />
                    </div>

                    {/* Capacity + Price */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="event-capacity" className="label text-white/50 mb-2 block">Capacity</label>
                        <input
                          id="event-capacity"
                          type="number"
                          min="1"
                          value={form.capacity}
                          onChange={(e) => update('capacity', e.target.value)}
                          placeholder="100"
                          className="input-dark"
                        />
                      </div>
                      <div>
                        <label htmlFor="event-price" className="label text-white/50 mb-2 block">
                          Ticket Price (₹) 
                          <span className="text-violet-light/60 ml-1 font-normal">0 = Free</span>
                        </label>
                        <input
                          id="event-price"
                          type="number"
                          min="0"
                          value={form.price}
                          onChange={(e) => update('price', e.target.value)}
                          placeholder="0"
                          className="input-dark"
                        />
                      </div>
                    </div>

                    {/* Tags */}
                    <div>
                      <label htmlFor="event-tags" className="label text-white/50 mb-2 block">Tags</label>
                      <input
                        id="event-tags"
                        type="text"
                        value={form.tags}
                        onChange={(e) => update('tags', e.target.value)}
                        placeholder="live music, outdoor, family friendly"
                        className="input-dark"
                      />
                      <p className="p-sm text-white/30 mt-1.5">Separate tags with commas</p>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-5"
                  >
                    <h3 className="font-heading text-white text-2xl mb-6">Final Details</h3>

                    {/* Contact + Website */}
                    <div>
                      <label htmlFor="event-email" className="label text-white/50 mb-2 block">Contact Email *</label>
                      <input
                        id="event-email"
                        type="email"
                        required
                        value={form.contactEmail}
                        onChange={(e) => update('contactEmail', e.target.value)}
                        placeholder="hello@yourevent.com"
                        className="input-dark"
                      />
                    </div>

                    <div>
                      <label htmlFor="event-website" className="label text-white/50 mb-2 block">Event Website (optional)</label>
                      <input
                        id="event-website"
                        type="url"
                        value={form.website}
                        onChange={(e) => update('website', e.target.value)}
                        placeholder="https://yourevent.com"
                        className="input-dark"
                      />
                    </div>

                    {/* Preview card */}
                    <div className="glass-violet rounded-2xl p-5 mt-6">
                      <p className="label text-violet-light/60 mb-4">Preview</p>
                      <div className="space-y-2">
                        <h4 className="font-heading text-white text-xl">{form.title || 'Your Event Title'}</h4>
                        <div className="flex items-center gap-4">
                          {form.category && (
                            <span className="category-pill active text-xs">{form.category}</span>
                          )}
                          {form.price !== '' && (
                            <span className="p-sm text-white/60">{form.price === '0' || form.price === '' ? 'Free' : `₹${form.price}`}</span>
                          )}
                        </div>
                        {form.date && <p className="p-sm text-white/50">{form.date} {form.time && `at ${form.time}`}</p>}
                        {form.location && <p className="p-sm text-white/50">📍 {form.location}{form.city && `, ${form.city}`}</p>}
                        {form.description && <p className="p-sm text-white/40 line-clamp-2">{form.description}</p>}
                      </div>
                    </div>

                    {/* Agreement */}
                    <div className="flex items-start gap-3 pt-2">
                      <input type="checkbox" id="agree-terms" required className="mt-1 accent-violet" />
                      <label htmlFor="agree-terms" className="p-sm text-white/50">
                        I agree to EventSphere's{' '}
                        <a href="#" className="text-violet-light hover:underline">Terms of Service</a>
                        {' '}and{' '}
                        <a href="#" className="text-violet-light hover:underline">Event Guidelines</a>
                      </label>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/08">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="btn-secondary px-6 py-3"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M19 12H5m7-7-7 7 7 7"/>
                    </svg>
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="btn-primary px-7 py-3"
                    disabled={step === 1 && (!form.title || !form.category || !form.date || !form.city)}
                  >
                    Continue
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M5 12h14m-7-7 7 7-7 7"/>
                    </svg>
                  </button>
                ) : (
                  <button type="submit" className="btn-primary px-7 py-3">
                    Publish Event 🚀
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
