import { FaLanguage, FaChalkboardTeacher, FaSnowflake, FaHandsHelping, FaChartLine, FaBookOpen } from 'react-icons/fa';

const features = [
  { icon: <FaLanguage />, title: 'Dedicated Hindi & Urdu Batches', desc: 'One of the few institutes offering full-fledged Hindi & Urdu medium coaching alongside English.' },
  { icon: <FaChalkboardTeacher />, title: 'Expert Faculty', desc: 'Subject-specialist teachers with years of board exam coaching experience.' },
  { icon: <FaSnowflake />, title: 'AC Smart Classrooms', desc: 'Modern air-conditioned classrooms with digital teaching tools for an optimal learning environment.' },
  { icon: <FaHandsHelping />, title: '1-on-1 Doubt Sessions', desc: 'Personal attention for every student with dedicated doubt-clearing hours after lectures.' },
  { icon: <FaChartLine />, title: 'Weekly Tests & Analytics', desc: 'Regular assessments with detailed performance tracking and parent updates.' },
  { icon: <FaBookOpen />, title: 'Complete Study Material', desc: 'In-house topic-wise modules, formula sheets, practice sets & previous year papers.' },
];

export default function WhyChooseUs() {
  return (
    <section className="why-us section">
      <div className="container">
        <div className="why-us-header">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">Best Coaching Institute in <span className="accent-text">Sion</span></h2>
          <p className="section-subtitle">Everything your child needs to excel — under one roof.</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon" style={{color: 'var(--color-primary)'}}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
