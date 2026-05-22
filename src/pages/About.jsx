import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Footer from '../components/Footer';

const VALUES = [
  { icon: '✨', title: 'Premium Experiences', desc: 'We curate only the best events, ensuring every experience is extraordinary and memorable.' },
  { icon: '🌍', title: 'Community First', desc: 'We believe in the power of bringing people together. Real connections happen in real life.' },
  { icon: '🚀', title: 'Creator Empowered', desc: 'We give every event creator the tools to bring their vision to life, from idea to execution.' },
  { icon: '🔒', title: 'Trust & Safety', desc: 'Every event on our platform is verified. Your safety and security is our top priority.' },
];

const TEAM = [
  { name: 'Aryan Kapoor', role: 'Co-Founder & CEO', emoji: '👨‍💼', city: 'Mumbai' },
  { name: 'Priya Mehta', role: 'Co-Founder & CPO', emoji: '👩‍🎨', city: 'Bangalore' },
  { name: 'Rahul Singh', role: 'Head of Engineering', emoji: '👨‍💻', city: 'Delhi' },
  { name: 'Sneha Iyer', role: 'Head of Growth', emoji: '👩‍🚀', city: 'Chennai' },
];

export default function About() {
  return (
    <>
      <SEOHead
        title="EventSphere | About"
        description="Learn about EventSphere's mission to make extraordinary experiences accessible to everyone, everywhere."
        ogUrl="https://eventsphere.app/about"
      />

      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-40 pb-24 px-4 text-center overflow-hidden">
          <div className="orb orb-violet absolute w-96 h-96 top-0 left-1/2 -translate-x-1/2 opacity-15" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <p className="label text-violet-light/60 mb-6">Our Story</p>
            <h1
              className="font-heading text-white mb-8"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '-0.04em' }}
            >
              We believe life is lived{' '}
              <span className="italic text-gradient">offline</span>
            </h1>
            <p className="p-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              EventSphere was born from a simple belief: the most meaningful moments happen when
              people come together in the real world. We built a platform to make discovering and
              hosting those moments effortless and accessible to everyone.
            </p>
          </motion.div>
        </section>

        {/* Values */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-14"
            >
              <h2 className="font-heading text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
                What we stand for
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {VALUES.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="card-glow p-8 flex gap-5"
                >
                  <div className="text-3xl shrink-0">{v.icon}</div>
                  <div>
                    <h3 className="font-heading text-white text-xl mb-3">{v.title}</h3>
                    <p className="p-md text-white/50 leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-14"
            >
              <h2 className="font-heading text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
                The{' '}
                <span className="italic text-gradient">team</span>
              </h2>
              <p className="p-lg text-white/50 mt-4">The passionate people behind EventSphere</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {TEAM.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="card-glow p-6 text-center"
                >
                  <div className="text-5xl mb-4">{member.emoji}</div>
                  <h3 className="font-sub font-semibold text-white text-lg mb-1">{member.name}</h3>
                  <p className="p-sm text-violet-light/80 mb-2">{member.role}</p>
                  <p className="p-sm text-white/30">{member.city}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-white mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}>
                Ready to create something{' '}
                <span className="italic text-gradient">extraordinary?</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/post-event" className="btn-primary px-8 py-4 text-base">
                  Host an Event
                </Link>
                <Link to="/events" className="btn-secondary px-8 py-4 text-base">
                  Explore Events
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
