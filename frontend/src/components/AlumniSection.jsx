import { alumni } from '../data/alumni';


export default function AlumniSection() {
  return (
    <section className="alumni section">
      <div className="container">
        <div className="alumni-header">
          <span className="section-label">Alumni Network</span>
          <h2 className="section-title">Our Successful <span className="accent-text italic-accent">Alumni</span></h2>
          <p className="section-subtitle">From our classrooms to the world — meet achievers we're proud of.</p>
        </div>
        <div className="alumni-grid">
          {alumni.map((a, i) => (
            <div key={i} className="alumni-card">
              <span className="alumni-icon">{a.icon}</span>
              <h4>{a.career}</h4>
              <p className="alumni-name">{a.name}</p>
              <span className="alumni-batch">{a.batch}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
