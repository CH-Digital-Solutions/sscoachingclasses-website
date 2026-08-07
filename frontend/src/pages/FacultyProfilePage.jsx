import { useParams, Link, Navigate } from 'react-router-dom';
import { FaArrowLeft, FaGraduationCap, FaBriefcase, FaChalkboardTeacher, FaBookOpen, FaStar, FaQuoteLeft } from 'react-icons/fa';
import { staff, fallbackAvatar } from '../data/staff';

export default function FacultyProfilePage() {
  const { id } = useParams();
  const teacher = staff.find((s) => s.id === id);

  if (!teacher) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="faculty-page">
      {/* Hero Section */}
      <section className="faculty-page__hero">
        <div className="wrap">
          <Link to="/#staff" className="wt-back-link faculty-page__back">
            <FaArrowLeft /> Back to Faculty
          </Link>
          <div className="faculty-page__header-content">
            <div className="faculty-page__photo-wrapper">
              <img
                src={teacher.photo}
                alt={teacher.name}
                onError={(e) => { e.currentTarget.src = fallbackAvatar(teacher.name); }}
              />
            </div>
            <div className="faculty-page__intro">
              <h1 className="faculty-page__name">{teacher.name}</h1>
              <span className="faculty-page__role">{teacher.role}</span>
              <div className="faculty-page__tags">
                {teacher.subject && <span className="faculty-page__tag"><FaChalkboardTeacher /> {teacher.subject}</span>}
                <span className="faculty-page__tag"><FaGraduationCap /> {teacher.qualification}</span>
                <span className="faculty-page__tag"><FaBriefcase /> {teacher.exp}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Body */}
      <section className="faculty-page__body section">
        <div className="wrap">
          <div className="faculty-page__grid">
            
            {/* Main Content */}
            <div className="faculty-page__main">
              <div className="faculty-page__section">
                <h3><FaBookOpen /> About {teacher.name.split(' ')[1]}</h3>
                <p className="faculty-page__bio">{teacher.bio}</p>
              </div>
              
              <div className="faculty-page__quote">
                <FaQuoteLeft className="faculty-page__quote-icon" />
                <p>{teacher.quote}</p>
              </div>
            </div>

            {/* Sidebar content */}
            <div className="faculty-page__sidebar">
              <div className="faculty-page__section faculty-page__section--card">
                <h3><FaStar /> Specializations</h3>
                <div className="faculty-page__chips">
                  {teacher.specializations.map((s, i) => (
                    <span key={i} className="faculty-page__chip">{s}</span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
