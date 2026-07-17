import { FaChalkboardTeacher } from 'react-icons/fa';

export default function FounderSection() {
  return (
    <section className="founder section" id="about">
      <div className="container founder-grid">
        <div className="founder-image-wrap">
          <div className="founder-image-placeholder">
            <span style={{color: 'var(--color-primary)'}}><FaChalkboardTeacher /></span>
          </div>
          <div className="founder-exp-badge">
            <strong>18+</strong>
            <span>Years Exp.</span>
          </div>
        </div>
        <div className="founder-content">
          <span className="section-label">Meet Our Founder</span>
          <h2 className="section-title">A Vision for <span className="accent-text italic-accent">Quality Education</span></h2>
          <blockquote className="founder-quote">
            "Every student deserves access to quality education, regardless of their medium of instruction. At SS Coaching Classes, we bridge the gap between potential and achievement."
          </blockquote>
          <div className="founder-info">
            <h3>Prof. Farman Raza Syed</h3>
            <p className="founder-title">Founder & Director</p>
            <p className="founder-credentials">M.Sc. Mathematics · 18+ Years in Education</p>
          </div>
          <p className="founder-desc">
            Since 2008, Professor Syed has been on a mission to provide accessible, high-quality education to students from all backgrounds. With dedicated Hindi, Urdu & English medium batches, SS Coaching Classes has transformed over 3,000 students into confident achievers.
          </p>
        </div>
      </div>
    </section>
  );
}
