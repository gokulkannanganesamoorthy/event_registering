import { createContext, useContext, useState } from 'react';
import EventModal from '../components/EventModal';

const EventModalContext = createContext();

export function EventModalProvider({ children }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
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
