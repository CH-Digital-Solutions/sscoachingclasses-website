import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaChalkboardTeacher, FaUserTie } from 'react-icons/fa';
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

export default function FacultyPage() {
  const teachingFaculty = staff.filter(s => ['Founder', 'Co-founder', 'Faculty'].includes(s.role));
  const adminStaff = staff.filter(s => !['Founder', 'Co-founder', 'Faculty'].includes(s.role));

  return (
    <div className="faculty-list-page">
      {/* Page Hero */}
      <section className="faculty-list-page__hero">
        <div className="grid-pattern" />
        <div className="faculty-hero__glow faculty-hero__glow--a" />
        <div className="faculty-hero__glow faculty-hero__glow--b" />
        <div className="wrap">
          <Link to="/" className="wt-back-link">
            <FaArrowLeft /> Back to Home
          </Link>
          <div className="faculty-hero__content">
            <span className="eyebrow"><FaChalkboardTeacher /> Faculty &amp; Staff Directory</span>
            <h1 className="faculty-hero__title">Meet Our <em>Expert Faculty &amp; Staff</em></h1>
            <p className="faculty-hero__desc">
              Dedicated educators, subject specialists, and administration staff working together to nurture student potential from 5th to 12th standard.
            </p>
          </div>
        </div>
      </section>

      {/* Directory Content */}
      <div className="faculty-page-content">
        <div className="wrap">
          {/* Section 1: Teaching Faculty */}
          <section className="faculty-directory-section" id="faculty">
            <div className="section-head">
              <span className="eyebrow"><FaChalkboardTeacher /> Academic Mentors</span>
              <h2 className="section-head__title">Teaching <em>Faculty</em></h2>
              <p className="section-head__desc">
                Experienced instructors guiding students with personalized attention across School, Commerce, Arts, and Science.
              </p>
            </div>
            <div className="staff-grid">
              {teachingFaculty.map((s, i) => (
                <StaffCard key={i} s={s} />
              ))}
            </div>
          </section>

          {/* Section 2: Administrative & Support Staff */}
          {adminStaff.length > 0 && (
            <section className="faculty-directory-section faculty-directory-section--admin" id="staff">
              <div className="section-head">
                <span className="eyebrow"><FaUserTie /> Operations &amp; Support</span>
                <h2 className="section-head__title">Administration &amp; <em>Staff</em></h2>
                <p className="section-head__desc">
                  Our dedicated team managing smooth daily operations, admissions counseling, and student assistance.
                </p>
              </div>
              <div className="staff-grid">
                {adminStaff.map((s, i) => (
                  <StaffCard key={i} s={s} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
