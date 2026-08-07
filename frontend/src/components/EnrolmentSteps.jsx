import { FaClipboardList, FaBullseye, FaBook, FaRocket, FaPhone, FaArrowRight } from 'react-icons/fa';

const steps = [
  { num: '01', title: 'Choose Your Program', desc: 'Select from School or HSC Commerce programs in your preferred medium.', icon: <FaClipboardList /> },
  { num: '02', title: 'Book a Free Demo', desc: 'Experience our teaching methodology with a complimentary 2-day trial.', icon: <FaBullseye /> },
  { num: '03', title: 'Enrol & Get Materials', desc: 'Complete enrolment and receive comprehensive study materials.', icon: <FaBook /> },
  { num: '04', title: 'Start Learning', desc: 'Begin your journey towards academic excellence with expert guidance.', icon: <FaRocket /> },
];

export default function EnrolmentSteps({ onBookDemo }) {
  return (
    <section className="enrolment section">
      <div className="container">
        <div className="enrolment-header">
          <span className="section-label">Simple Process</span>
          <h2 className="section-title">Get Started in <span className="accent-text">4 Easy Steps</span></h2>
          <p className="section-subtitle">Joining SS Coaching Classes is simple, transparent, and commitment-free.</p>
        </div>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <div key={i} className="step-card">
              <div className="step-num">{s.num}</div>
              <span className="step-icon" style={{color: 'var(--color-primary)'}}>{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {i < steps.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </div>
        <div className="enrolment-actions">
          <button className="btn btn-primary" onClick={onBookDemo}>Book Free Demo <FaArrowRight /></button>
          <a href="tel:+918080714141" className="btn btn-outline"><FaPhone /> Call Us</a>
        </div>
      </div>
    </section>
  );
}
