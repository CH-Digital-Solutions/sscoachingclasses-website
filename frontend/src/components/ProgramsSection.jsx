import { programs } from '../data/programs';
import { FaArrowRight } from 'react-icons/fa';

export default function ProgramsSection({ onEnquire }) {
  return (
    <section className="programs section" id="programs">
      <div className="container">
        <div className="programs-header">
          <span className="section-label">Our Programs</span>
          <h2 className="section-title">Academic Programs <span className="accent-text italic-accent">for Every Level</span></h2>
          <p className="section-subtitle">Comprehensive coaching from school to university — in your preferred language.</p>
        </div>
        <div className="programs-grid">
          {programs.map(p => (
            <div key={p.id} className={`program-card${p.highlighted ? ' highlighted' : ''}`}>
              <span className="program-icon">{p.icon}</span>
              <h3>{p.title}</h3>
              <p className="program-sub">{p.subtitle}</p>
              <p className="program-desc">{p.description}</p>
              <ul className="program-features">
                {p.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <button className="btn btn-primary program-cta" onClick={onEnquire}>Enquire Now <FaArrowRight style={{marginLeft: '8px'}} /></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
