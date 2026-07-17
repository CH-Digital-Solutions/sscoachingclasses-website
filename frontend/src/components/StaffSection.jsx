
import { FaChalkboardTeacher, FaLinkedin } from 'react-icons/fa';

const staff = [
  { name: 'Prof. Farman Raza Syed', role: 'Founder & Director', subject: 'Mathematics', qualification: 'M.Sc. Mathematics', exp: '18+ years' },
  { name: 'Mrs. Saima Khan', role: 'Senior Faculty', subject: 'Science', qualification: 'M.Sc. Chemistry', exp: '12+ years' },
  { name: 'Mr. Mohd. Irfan', role: 'Faculty', subject: 'English & SST', qualification: 'M.A. English', exp: '10+ years' },
  { name: 'Mr. Asif Shaikh', role: 'Faculty', subject: 'Commerce & Accounts', qualification: 'M.Com, CA Inter', exp: '8+ years' },
  { name: 'Ms. Nazia Parveen', role: 'Faculty', subject: 'Hindi & Urdu', qualification: 'M.A. Hindi', exp: '9+ years' },
  { name: 'Mr. Salman Ahmad', role: 'Faculty', subject: 'Physics & Maths', qualification: 'B.Tech, M.Sc.', exp: '7+ years' },
];

export default function StaffSection() {
  return (
    <section className="staff section" id="staff">
      <div className="container">
        <div className="staff-header">
          <span className="section-label">Our Team</span>
          <h2 className="section-title">Meet Our <span className="accent-text italic-accent">Expert Faculty</span></h2>
          <p className="section-subtitle">Dedicated educators who go beyond the syllabus to shape future leaders.</p>
        </div>
        <div className="staff-grid">
          {staff.map((s, i) => (
            <div key={i} className="staff-card">
              <div className="staff-avatar"><FaChalkboardTeacher /></div>
              <h4>{s.name}</h4>
              <p className="staff-role">{s.role}</p>
              <p className="staff-subject">{s.subject}</p>
              <div className="staff-meta">
                <span>{s.qualification}</span>
                <span>{s.exp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
