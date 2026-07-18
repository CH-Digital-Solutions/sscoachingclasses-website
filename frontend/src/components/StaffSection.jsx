
// Fallback avatar (stylized) shown until a real photo file exists in /public/staff/.
const fallbackAvatar = (seed) =>
  `https://api.dicebear.com/9.x/personas/svg?seed=${encodeURIComponent(seed)}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffdfbf`;

const staff = [
  { name: 'Prof. Farman Raza Syed', role: 'Founder & Director', subject: 'Mathematics', qualification: 'M.Sc. Mathematics', exp: '18+ years', photo: '/staff/farman.jpg' },
  { name: 'Mrs. Saima Khan', role: 'Senior Faculty', subject: 'Science', qualification: 'M.Sc. Chemistry', exp: '12+ years', photo: '/staff/saima.jpg' },
  { name: 'Mr. Mohd. Irfan', role: 'Faculty', subject: 'English & SST', qualification: 'M.A. English', exp: '10+ years', photo: '/staff/irfan.jpg' },
  { name: 'Mr. Asif Shaikh', role: 'Faculty', subject: 'Commerce & Accounts', qualification: 'M.Com, CA Inter', exp: '8+ years', photo: '/staff/asif.jpg' },
  { name: 'Ms. Nazia Parveen', role: 'Faculty', subject: 'Hindi & Urdu', qualification: 'M.A. Hindi', exp: '9+ years', photo: '/staff/nazia.jpg' },
  { name: 'Mr. Salman Ahmad', role: 'Faculty', subject: 'Physics & Maths', qualification: 'B.Tech, M.Sc.', exp: '7+ years', photo: '/staff/salman.jpg' },
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
              <div className="staff-photo">
                <img
                  src={s.photo}
                  alt={s.name}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = fallbackAvatar(s.name); }}
                />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
