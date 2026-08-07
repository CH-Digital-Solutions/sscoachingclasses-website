import { alumni } from '../data/alumni';

export default function AlumniSection() {
  return (
    <section className="alumni-sec section" id="alumni">
      <div className="alumni-bg-pattern" />
      <div className="wrap relative-z">
        <div className="section-head">
          <span className="eyebrow">Alumni Network</span>
          <h2 className="section-head__title">Our Successful <em>Alumni</em></h2>
        </div>
        <div className="alumni-grid">
          {alumni.map((a, i) => (
            <div key={i} className="alumni-card">
              <span className="alumni-icon-wrap">{a.icon}</span>
              <div className="alumni-info">
                <span className="alumni-name">{a.name}</span>
                <span className="alumni-profession">{a.career}</span>
                <span className="alumni-meta">{a.batch}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
