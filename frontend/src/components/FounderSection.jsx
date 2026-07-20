export default function FounderSection() {
  return (
    <section className="founder-sec section" id="about">
      <div className="wrap">
        <div className="founder-grid">
          <div className="founder-media">
            <div className="founder-img-wrapper">
              <div className="founder-bg-shape" />
              <img src="/SS Logo.svg" alt="SS Coaching Classes" className="founder-img" />
            </div>
          </div>

          <div className="founder-content">
            <span className="eyebrow">From the desk of the Founder</span>
            <h2 className="section-head__title" style={{ textAlign: 'left', whiteSpace: 'normal', marginBottom: '1.25rem' }}>
              Welcome to <span style={{ color: 'var(--primary)' }}>SS Coaching Classes</span>
            </h2>
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
