import { FaTrophy, FaGlobe, FaChalkboardTeacher } from 'react-icons/fa';

export default function MiddleBanner() {
  return (
    <section className="mid-banner">
      <div className="container mid-banner-grid">
        <div className="mid-item">
          <span className="mid-icon" style={{color: '#fff'}}><FaTrophy /></span>
          <h3>Board Excellence</h3>
          <p>95% pass rate with 200+ board toppers across SSC & HSC exams.</p>
        </div>
        <div className="mid-item">
          <span className="mid-icon" style={{color: '#fff'}}><FaGlobe /></span>
          <h3>Multi-Medium Coaching</h3>
          <p>Dedicated Hindi, Urdu & English medium batches — one of the only institutes in Govandi.</p>
        </div>
        <div className="mid-item">
          <span className="mid-icon" style={{color: '#fff'}}><FaChalkboardTeacher /></span>
          <h3>Expert Faculty</h3>
          <p>Subject-specialist teachers with 10+ years of board exam coaching experience.</p>
        </div>
      </div>
    </section>
  );
}
