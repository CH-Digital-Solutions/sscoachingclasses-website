import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import BookDemoModal from './components/BookDemoModal';
import HomePage from './pages/HomePage';
import WhatWeTeachPage from './pages/WhatWeTeachPage';
import ResultsPage from './pages/ResultsPage';
import GalleryPage from './pages/GalleryPage';
import FacultyProfilePage from './pages/FacultyProfilePage';

function ScrollReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Select elements to reveal
    const targets = document.querySelectorAll('section, .prog-card, .branch-card, .staff-card, .rs-topper, .alumni-card, .rev-card, .gallery-item');
    
    // Add base class
    targets.forEach(el => el.classList.add('reveal-init'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          // Unobserve to only animate once per page load
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    targets.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');
  const openModal = (program) => {
    setSelectedProgram(typeof program === 'string' ? program : '');
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <ScrollToTop />
      <ScrollReveal />
      <Navbar onEnrolClick={openModal} />
      <Routes>
        <Route path="/" element={<HomePage onBookDemo={openModal} onEnquire={openModal} />} />
        <Route path="/what-we-teach" element={<WhatWeTeachPage onEnquire={openModal} />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/faculty/:id" element={<FacultyProfilePage />} />
      </Routes>
      <Footer />
      <FloatingButtons />
      <BookDemoModal isOpen={modalOpen} onClose={closeModal} prefilledProgram={selectedProgram} />
    </>
  );
}
