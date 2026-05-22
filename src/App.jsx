import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import PostEvent from './pages/PostEvent';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { EventModalProvider } from './context/EventModalContext';
import { AuthProvider } from './context/AuthContext';
import SmokeBackground from './components/SmokeBackground';

// Grain overlay — rendered once at the top level
function GrainOverlay() {
  return <div className="grain-overlay" aria-hidden="true" />;
}

// Page transition wrapper
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Animated routes
function AnimatedRoutes() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/events" element={<PageWrapper><Events /></PageWrapper>} />
        <Route path="/post-event" element={<PageWrapper><PostEvent /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/signup" element={<PageWrapper><Signup /></PageWrapper>} />
        {/* 404 fallback */}
        <Route path="*" element={
          <PageWrapper>
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
              <div className="text-7xl mb-6">🌌</div>
              <h1 className="font-heading text-white text-5xl mb-4" style={{ letterSpacing: '-0.03em' }}>404</h1>
              <p className="p-lg text-white/50 mb-8">This page doesn't exist in our universe.</p>
              <a href="/" className="btn-primary">Take me home</a>
            </div>
          </PageWrapper>
        } />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <EventModalProvider>
            <SmokeBackground />
            <GrainOverlay />
            <Navbar />
            <AnimatedRoutes />
          </EventModalProvider>
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
