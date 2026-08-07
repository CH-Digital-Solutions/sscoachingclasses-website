import { FaAward } from 'react-icons/fa';

export default function FounderSection() {
  return (
    <section className="founder-sec section" id="about">
      <div className="wrap">
        <div className="founder-grid">
          <div className="founder-media">
            <div className="founder-img-container">
              <div className="founder-img-wrapper">
                <img src="/Prof Satish Photo.webp" alt="Prof. Satish Maurya - Founder, SS Coaching Classes" className="founder-img" />
              </div>
              <div className="founder-circle founder-circle--right">
                <span className="founder-circle-number">20+</span>
                <span className="founder-circle-text">Years<br/>Experience</span>
              </div>
            </div>
            <h3 className="founder-name-label">Professor Satish Maurya</h3>
          </div>

          <div className="founder-content">
            <span className="eyebrow">From the desk of the Founder</span>
            <h2 className="section-head__title" style={{ textAlign: 'left', whiteSpace: 'normal', marginBottom: '1.25rem' }}>
              Welcome to <span style={{ color: 'var(--primary)' }}>SS Coaching Classes</span>
            </h2>

            <div className="founder-quals">
              <span className="founder-qual"><FaAward /> B.Com</span>
              <span className="founder-qual"><FaAward /> M.Com</span>
              <span className="founder-qual"><FaAward /> UGC NET</span>
            </div>

            <div className="founder-text">
              <p>
                Founded in 2015 by Mr. Satish Maurya and Mr. Sandeep Maurya, our institute was established with a clear vision—to bring a meaningful revolution to the field of education through quality teaching, academic excellence, and student-focused learning.
              </p>
              <p>
                Over the years, we have earned the trust of students and parents by providing a strong academic foundation, experienced faculty, and a supportive learning environment that helps every student achieve their full potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
