
import { FaClock, FaSun, FaMoon } from 'react-icons/fa';

const batches = [
  { icon: <FaSun />, shift: 'Morning Batch', time: '10:00 AM – 1:00 PM', days: 'Sunday Only', classes: 'SSC & HSC' },
  { icon: <FaClock />, shift: 'Afternoon Batch', time: '3:00 PM – 6:00 PM', days: 'Mon – Sat', classes: 'School Section (7th–10th)' },
  { icon: <FaMoon />, shift: 'Evening Batch', time: '6:00 PM – 9:30 PM', days: 'Mon – Sat', classes: 'College & Degree Section' },
];

export default function TimingsSection() {
  return (
    <section className="timings section" id="timings">
      <div className="container">
        <div className="timings-header">
          <span className="section-label">Batch Timings</span>
          <h2 className="section-title">Class <span className="accent-text">Schedule</span></h2>
          <p className="section-subtitle">Flexible batch timings designed to fit every student's routine.</p>
        </div>
        <div className="timings-grid">
          {batches.map((b, i) => (
            <div key={i} className="timing-card">
              <div className="timing-icon">{b.icon}</div>
              <h3>{b.shift}</h3>
              <p className="timing-time">{b.time}</p>
              <p className="timing-days">{b.days}</p>
              <span className="timing-classes">{b.classes}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
