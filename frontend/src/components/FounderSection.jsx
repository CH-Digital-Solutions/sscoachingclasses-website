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
                At SS Coaching Classes, your child's future is an intrinsic part of our collective vision.
                For over 15 years, we have been striving to achieve the perfect balance between
                <strong> knowledge &amp; wisdom</strong>, between individual attention &amp; collective growth —
                just to shape your child into leaders of tomorrow.
              </p>
              <p>
                Today we are recognized as a premium coaching institute for SSC, HSC, Commerce, Science &amp;
                Degree programs. The environment we provide and the non-academic interventions we make are all
                a product of our commitment to the student's overall academic improvement. We truly believe that,
                at our very core, <strong>SS Coaching Classes is a family!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
