import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import EventGrid from '../components/EventGrid';
import HowItWorks from '../components/HowItWorks';
import HostCTA from '../components/HostCTA';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <SEOHead
        title="EventSphere | Discover & Host Extraordinary Events"
        description="Discover extraordinary events near you or host your own to inspire thousands. EventSphere — Where Moments Become Movements."
        ogUrl="https://eventsphere.app/"
      />

      <main>
        <Hero />

        {/* Divider */}
        <div className="section-divider" />

        <Stats />

        <div className="section-divider" />

        <EventGrid />

        <div className="section-divider" />

        <HowItWorks />

        <div className="section-divider" />

        <HostCTA />

        <Testimonials />
      </main>

      <Footer />
    </>
  );
}
