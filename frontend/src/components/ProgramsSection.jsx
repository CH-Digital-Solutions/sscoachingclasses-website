import { programs, academicChips } from '../data/programs';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

export default function ProgramsSection({ onEnquire }) {
  return (
    <>
      <section className="chips-sec" id="everything-we-teach">
        <div className="grid-pattern" />
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Everything We Teach</span>
            <h2 className="section-head__title">Everything We <em>Teach</em></h2>
          </div>
          <div className="chips-grid">
            {academicChips.map((c, i) => (
              <span key={i} className="chip"><span className="chip__icon"><FaCheck /></span>{c.label}</span>
            ))}
          </div>
        </div>
      </section>

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
              <div key={p.id} className={`prog-card${p.highlighted ? ' prog-card--highlight' : ''}`}>
                <div className="prog-card__top">
                  <span className="prog-card__icon">{p.icon}</span>
                  <span className="prog-card__tag">{p.subtitle}</span>
                </div>
                <div className="prog-card__main">
                  <h3 className="prog-card__title">{p.title}</h3>
                  <p className="prog-card__desc">{p.description}</p>
                  <ul className="prog-card__list">
                    {p.features.map((f, j) => (
                      <li key={j}><span className="prog-check"><FaCheck /></span>{f}</li>
                    ))}
                  </ul>
                  <div className="prog-card__actions">
                    <button className="btn btn--primary" onClick={onEnquire}>Enquire Now <FaArrowRight /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
