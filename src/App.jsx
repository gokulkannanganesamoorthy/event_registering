import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import PostEvent from './pages/PostEvent';
import About from './pages/About';

function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppRoutes() {
  const location = useLocation();
  return (
    <>
      <ScrollReset />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/events" element={<Page><Events /></Page>} />
          <Route path="/post-event" element={<Page><PostEvent /></Page>} />
          <Route path="/about" element={<Page><About /></Page>} />
          <Route path="*" element={
            <Page>
              <div className="min-h-screen flex flex-col items-center justify-center text-center px-5 pt-20">
                <p className="font-heading text-[#1F1F1F]" style={{ fontSize: '8rem', lineHeight: 1 }}>404</p>
                <h1 className="font-sub font-semibold text-[#FAFAFA] text-xl mb-3">Page not found</h1>
                <p className="text-[#555] text-sm font-sub mb-8">This page doesn't exist in our universe.</p>
                <a href="/" className="btn-primary">Back to home</a>
              </div>
            </Page>
          } />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}
