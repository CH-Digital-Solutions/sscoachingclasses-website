import { toppers, resultStats } from '../data/results';


export default function ResultsSection() {
  return (
    <section className="results section" id="results">
      <div className="container">
        <div className="results-header">
          <span className="section-label">Top Performers</span>
          <h2 className="section-title">Our <span className="accent-text">Achievers</span></h2>
        </div>
        <div className="result-stats-row">
          <div className="r-stat"><strong>{resultStats.studentsTaught.toLocaleString()}+</strong><span>Students Taught</span></div>
          <div className="r-stat"><strong>{resultStats.passRate}%</strong><span>Pass Rate</span></div>
          <div className="r-stat"><strong>{resultStats.boardToppers}+</strong><span>Board Toppers</span></div>
        </div>
        <div className="toppers-grid">
          {toppers.slice(0, 6).map((t, i) => (
            <div key={i} className="topper-card">
              <div className="topper-photo-wrap">
                <div className={`topper-photo-ring rank-${t.rankPos}`}>
                  {t.photo ? (
                    <img src={t.photo} alt={t.name} loading="lazy" />
                  ) : (
                    <div className="topper-avatar-fallback">{t.name[0]}</div>
                  )}
                </div>
                <div className={`topper-rank-badge rank-${t.rankPos}`}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 0c-44.1 0-80 35.9-80 80c0 11.4 2.4 22.3 6.7 32.2L68.4 226.5c-9 10.3-6.6 26.2 4.9 33.5l55.8 35.3c-2.3 9.4-3.5 19.3-3.5 29.5c0 61.9 50.1 112 112 112s112-50.1 112-112c0-10.2-1.2-20-3.5-29.5l55.8-35.3c11.5-7.3 13.9-23.2 4.9-33.5L293.3 112.2C297.6 102.3 300 91.4 300 80c0-44.1-35.9-80-80-80zM224 80c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32zm-73.6 156.4l50.8-58.1c16.3 14.4 37.9 23.3 61.3 23.3s45-8.9 61.3-23.3l50.8 58.1L256 322.2l-105.6-85.8zm105.6 169.2c-40.8 0-74-33.2-74-74c0-6 1-11.8 2.8-17.2l71.2 57.8l71.2-57.8c1.8 5.4 2.8 11.2 2.8 17.2c0 40.8-33.2 74-74 74z"></path></svg>
                  <span>{t.rankNum}</span>
                </div>
              </div>
              <h4 className="topper-name">{t.name}</h4>
              <p className="topper-pct-green">{t.percentage}</p>
              <span className="topper-stream">{t.stream} &middot; {t.year}</span>
              <div className="topper-school-pill">{t.school}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
