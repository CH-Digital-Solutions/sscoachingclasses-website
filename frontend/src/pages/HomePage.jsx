import HeroSection from '../components/HeroSection';
import FounderSection from '../components/FounderSection';
import BranchesSection from '../components/BranchesSection';
import ProgramsSection from '../components/ProgramsSection';
import EnglishSpeakingCourseSection from '../components/EnglishSpeakingCourseSection';
import TimingsSection from '../components/TimingsSection';
import StaffSection from '../components/StaffSection';
import ResultsSection from '../components/ResultsSection';
import LimitedSeatsBanner from '../components/LimitedSeatsBanner';
import TestimonialsSection from '../components/TestimonialsSection';
import AlumniSection from '../components/AlumniSection';
import GallerySection from '../components/GallerySection';
import SocialMediaSection from '../components/SocialMediaSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

export default function HomePage({ onBookDemo, onEnquire }) {
  return (
    <main>
      {/* 1. Hero Section */}
      <HeroSection onBookDemo={onBookDemo} />

      {/* 2. From the Desk of the Founder */}
      <FounderSection />

      {/* 3. Find Us Near You (Branches) */}
      <BranchesSection />

      {/* 4. Everything We Teach + 5. English Speaking Course */}
      <ProgramsSection onEnquire={onEnquire} />

      {/* 5. English Speaking Course */}
      <EnglishSpeakingCourseSection onEnquire={onEnquire} />

      {/* 6. Batch Timings Schedule */}
      <TimingsSection />

      {/* 8. Results of Students */}
      <ResultsSection />

      {/* 9. Our Faculty */}
      <StaffSection />

      {/* 10. Admission 2026-27 */}
      <LimitedSeatsBanner onBookDemo={onBookDemo} />

      {/* 11. Reviews */}
      <TestimonialsSection />

      {/* 12. Our Successful Alumni */}
      <AlumniSection />

      {/* 13. Gallery */}
      <GallerySection />

      {/* 14. Social Media & Community */}
      <SocialMediaSection />

      {/* 15. Frequently Asked Questions */}
      <FAQSection />

      {/* 15. Inquiry Section + Timing and Map */}
      <ContactSection />
    </main>
  );
}
