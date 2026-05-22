import { createContext, useContext, useState } from 'react';
import EventModal from '../components/EventModal';
import { useAuth } from './AuthContext';

const EventModalContext = createContext();

export function EventModalProvider({ children }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  // Try to use auth, but handle if provider isn't ready
  let logActivity;
  try {
    const auth = useAuth();
    logActivity = auth?.logActivity;
  } catch (e) {
    // AuthContext might not be wrapping this properly yet during dev
  }

  const openModal = (event) => {
    setSelectedEvent(event);
    if (logActivity && event.category) {
      logActivity(event.category);
    }
    // Prevent background scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedEvent(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <EventModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <EventModal event={selectedEvent} isOpen={!!selectedEvent} onClose={closeModal} />
    </EventModalContext.Provider>
  );
}

export function useEventModal() {
  return useContext(EventModalContext);
}
