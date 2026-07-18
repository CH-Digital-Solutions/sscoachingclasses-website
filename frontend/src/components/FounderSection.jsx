import { FaChalkboardTeacher } from 'react-icons/fa';

export default function FounderSection() {
  return (
    <section className="founder section" id="about">
      <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
        <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '24px' }}>
          Welcome to <span className="accent-text">SS Coaching Classes</span>
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--color-dark)', lineHeight: '1.8', marginBottom: '32px', fontWeight: '500' }}>
          At SS Coaching Classes, your child’s future is an intrinsic part of our collective vision. For over 15 years, we have been striving to achieve the perfect balance between knowledge & wisdom, between individual attention & collective growth; just to shape your child into leaders of tomorrow.
        </p>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', lineHeight: '1.7', marginBottom: '40px' }}>
          Today we are recognized as a premium coaching institute for SSC, HSC, Commerce, Science & Degree programs. The environment we provide and the non-academic interventions we make are all a product of our commitment to the student’s overall academic improvement. We truly believe that, at our very core, SS Coaching Classes is a family!
        </p>

      </div>
    </section>
  );
}
