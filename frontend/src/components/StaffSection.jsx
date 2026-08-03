import { Link } from 'react-router-dom';
import { staff, fallbackAvatar } from '../data/staff';

const StaffCard = ({ s }) => (
  <Link to={`/faculty/${s.id}`} className="staff-card" style={{ cursor: 'pointer', textDecoration: 'none' }}>
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
      {s.subject && <p className="staff-subject">{s.subject}</p>}
      <div className="staff-meta">
        <span>{s.qualification}</span>
        <span>{s.exp}</span>
      </div>
    </div>
  </Link>
);

export default function StaffSection() {
  const teachingFaculty = staff.filter(s => ['Founder', 'Co-founder', 'Faculty'].includes(s.role));
  const adminStaff = staff.filter(s => !['Founder', 'Co-founder', 'Faculty'].includes(s.role));

  return (
    <section className="staff-sec section" id="staff">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Our Team</span>
          <h2 className="section-head__title">Meet Our <em>Expert Faculty</em></h2>
        </div>
        <div className="staff-grid">
          {teachingFaculty.map((s, i) => (
            <StaffCard key={i} s={s} />
          ))}
        </div>

        {adminStaff.length > 0 && (
          <>
            <div className="section-head" style={{ marginTop: '5rem' }}>
              <span className="eyebrow">Administration</span>
              <h2 className="section-head__title">Meet Our <em>Staff</em></h2>
            </div>
            <div className="staff-grid">
              {adminStaff.map((s, i) => (
                <StaffCard key={i} s={s} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
