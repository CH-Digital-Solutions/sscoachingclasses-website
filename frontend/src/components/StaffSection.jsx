import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { staff, fallbackAvatar } from '../data/staff';

const StaffCard = ({ s }) => (
  <Link to={`/faculty/${s.id}`} className="staff-card" aria-label={`View profile of ${s.name}`}>
    <div className="staff-photo">
      <img
        src={s.photo}
        alt={s.name}
        loading="lazy"
        onError={(e) => { e.currentTarget.src = fallbackAvatar(s.name); }}
      />
    </div>
    <div className="staff-info">
      <div className="staff-info__main">
        {s.role && <span className="staff-role-badge">{s.role}</span>}
        <h4 className="staff-name">{s.name}</h4>
        {s.subject && <p className="staff-subject">{s.subject}</p>}
        <div className="staff-meta">
          {s.exp && (
            <span className="staff-badge staff-badge--exp">
              {s.exp.toLowerCase().includes('exp') ? s.exp : `${s.exp} Exp.`}
            </span>
          )}
          {s.qualification && (
            <span className="staff-badge staff-badge--qual">
              {s.qualification}
            </span>
          )}
        </div>
      </div>
      <div className="staff-action-btn" aria-hidden="true">
        <FaArrowRight />
      </div>
    </div>
  </Link>
);

// Show 4 faculty cards on the homepage in a balanced 2x2 grid; full list lives at /faculty
const PREVIEW_COUNT = 4;

export default function StaffSection() {
  const teachingFaculty = staff.filter(s => ['Founder', 'Co-founder', 'Faculty'].includes(s.role));
  const previewFaculty = teachingFaculty.slice(0, PREVIEW_COUNT);

  return (
    <section className="staff-sec section" id="staff">
      <div className="wrap">
        {/* Faculty */}
        <div className="section-head text-center">
          <span className="eyebrow">Our Educators</span>
          <h2 className="section-head__title">Meet Our <em>Expert Faculty</em></h2>
          <p className="section-head__desc">
            Experienced mentors passionate about building concepts and guiding students toward academic brilliance.
          </p>
        </div>
        <div className="staff-grid">
          {previewFaculty.map((s, i) => (
            <StaffCard key={i} s={s} />
          ))}
        </div>
        {teachingFaculty.length > PREVIEW_COUNT && (
          <div className="staff-viewmore">
            <Link to="/faculty" className="btn btn--outline btn--sm">
              View All Faculty <FaArrowRight />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
