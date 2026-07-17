import { toppers, resultStats } from '../data/results';


export default function ResultsSection() {
  return (
    <section className="results section" id="results">
      <div className="container">
        <div className="results-header">
          <span className="section-label">Our Results</span>
          <h2 className="section-title">Proven Track Record of <span className="accent-text">Excellence</span></h2>
        </div>
        <div className="result-stats-row">
          <div className="r-stat"><strong>{resultStats.studentsTaught.toLocaleString()}+</strong><span>Students Taught</span></div>
          <div className="r-stat"><strong>{resultStats.passRate}%</strong><span>Pass Rate</span></div>
          <div className="r-stat"><strong>{resultStats.boardToppers}+</strong><span>Board Toppers</span></div>
        </div>
        <div className="toppers-grid">
          {toppers.slice(0, 6).map((t, i) => (
            <div key={i} className="topper-card">
              <div className="topper-rank">{t.rank}</div>
              <div className="topper-avatar">{t.name[0]}</div>
              <h4>{t.name}</h4>
              <p className="topper-pct">{t.percentage}</p>
              <span className="topper-stream">{t.stream} · {t.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
