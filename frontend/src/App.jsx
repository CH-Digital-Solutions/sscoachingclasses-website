import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import FounderSection from './components/FounderSection';


import MiddleBanner from './components/MiddleBanner';
import ProgramsSection from './components/ProgramsSection';
import TimingsSection from './components/TimingsSection';
import StaffSection from './components/StaffSection';
import ResultsSection from './components/ResultsSection';
import LimitedSeatsBanner from './components/LimitedSeatsBanner';
import TestimonialsSection from './components/TestimonialsSection';
import AlumniSection from './components/AlumniSection';
import BranchesSection from './components/BranchesSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import BookDemoModal from './components/BookDemoModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Navbar onEnrolClick={openModal} />
      <main>
        <div className="hero-stats-wrap">
          <HeroSection onBookDemo={openModal} />
          <StatsBar />
        </div>
        <FounderSection />


        <MiddleBanner />
        <ProgramsSection onEnquire={openModal} />
        <TimingsSection />
        <StaffSection />
        <ResultsSection />
        <LimitedSeatsBanner onBookDemo={openModal} />
        <TestimonialsSection />
        <AlumniSection />
        <BranchesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
      <BookDemoModal isOpen={modalOpen} onClose={closeModal} />
    </>
  );
}
