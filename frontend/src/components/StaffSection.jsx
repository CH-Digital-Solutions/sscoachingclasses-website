import { Link } from 'react-router-dom';
import { staff, fallbackAvatar } from '../data/staff';

export default function StaffSection() {
  return (
    <section className="staff-sec section" id="staff">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Our Team</span>
          <h2 className="section-head__title">Meet Our <em>Expert Faculty</em></h2>
        </div>
        <div className="staff-grid">
          {staff.map((s, i) => (
            <Link key={i} to={`/faculty/${s.id}`} className="staff-card" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              <div className="staff-photo">
                <img
                  src={s.photo}
                  alt={s.name}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = fallbackAvatar(s.name); }}
                />
                <div className="staff-photo__overlay">
                  <span>View Profile</span>
                </div>
              </div>
              <div className="staff-info">
                <h4>{s.name}</h4>
                <p className="staff-role">{s.role}</p>
                <p className="staff-subject">{s.subject}</p>
                <div className="staff-meta">
                  <span>{s.qualification}</span>
                  <span>{s.exp}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
