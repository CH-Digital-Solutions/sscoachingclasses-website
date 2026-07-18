import { toppers, resultStats } from '../data/results';
import { FaTrophy, FaStar, FaMedal } from 'react-icons/fa';

export default function ResultsSection() {
  return (
    <section className="rs-sec section" id="results">
      <div className="rs-glow rs-glow--1" />
      <div className="wrap">
        <div className="rs-header-row">
          <div className="rs-header-text">
            <span className="rs-eyebrow"><FaTrophy /> Top Performers</span>
            <h2 className="rs-title">Our <em>Achievers</em></h2>
          </div>
          <div className="rs-stats">
            <div className="rs-stat">
              <div className="rs-stat__value">{resultStats.studentsTaught.toLocaleString()}+</div>
              <div className="rs-stat__label">Students Taught</div>
            </div>
            <div className="rs-stat">
              <div className="rs-stat__value">{resultStats.passRate}%</div>
              <div className="rs-stat__label">Pass Rate</div>
            </div>
            <div className="rs-stat">
              <div className="rs-stat__value">{resultStats.boardToppers}+</div>
              <div className="rs-stat__label">Board Toppers</div>
            </div>
          </div>
        </div>

        <div className="rs-toppers-wrap">
          <span className="rs-toppers-label"><FaMedal className="rs-toppers-label__icon" /> SSC Board Toppers 2025–26</span>
          <div className="rs-toppers-grid">
            {toppers.slice(0, 6).map((t, i) => (
              <div key={i} className="rs-topper">
                <div className="rs-topper__avatar-wrap">
                  <div className="rs-topper__avatar-inner">
                    {t.photo ? (
                      <img
                        src={t.photo}
                        alt={t.name}
                        className="rs-topper__avatar"
                        loading="lazy"
                        onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
                      />
                    ) : null}
                    <div className="rs-topper__avatar-fallback" style={{ display: t.photo ? 'none' : 'flex' }}>{t.name[0]}</div>
                  </div>
                  <div className={`rs-topper__medallion rank-${t.rankPos}`}>
                    <FaStar />
                    <span>{t.rankNum}</span>
                  </div>
                </div>
                <h4 className="rs-topper__name">{t.name}</h4>
                <div className="rs-topper__score">{t.percentage}</div>
                <div className="rs-topper__meta">
                  <span>{t.stream}</span>
                  <span className="rs-topper__dot">●</span>
                  <span>{t.year}</span>
                </div>
                <div className="rs-topper__school">{t.school}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
