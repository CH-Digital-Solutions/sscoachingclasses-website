import { programs } from '../data/programs';
import { FaArrowRight, FaClock } from 'react-icons/fa';

export default function ProgramsSection({ onEnquire }) {
  return (
    <section className="courses-sec" id="programs">
      <div className="wrap">
        <div className="courses-header">
          <div className="courses-header__left">
            <span className="eyebrow">Our Programs</span>
            <h2 className="courses-header__title">Academic Programs <em>for Every Level</em></h2>
          </div>
        </div>

        <div className="courses-list">
          {programs.map((p, i) => (
            <div key={p.id} className="prog-card">
              <div className="prog-card__top">
                <span className="prog-card__icon">{p.icon}</span>
                <span className="prog-card__tag">{p.subtitle}</span>
              </div>
              <div className="prog-card__main">
                <h3 className="prog-card__title">{p.title}</h3>
                <p className="prog-card__desc">{p.description}</p>
                {p.timing && (
                  <div className="prog-card__timing" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--primary)', fontWeight: '600', background: 'rgba(29, 95, 214, 0.08)', padding: '4px 10px', borderRadius: '6px', marginBottom: '1.25rem' }}>
                    <FaClock style={{ flexShrink: 0 }} /> <span>{p.timing}</span>
                  </div>
                )}
                <div className="prog-card__actions">
                  <button className="btn btn--primary" onClick={() => onEnquire(p.title)}>Enquire Now <FaArrowRight /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
