import { FaClock, FaSun, FaMoon } from 'react-icons/fa';

const batches = [
  { icon: <FaSun />, shift: 'Morning Batch', time: '10:00 AM – 1:00 PM', days: 'Sunday Only', classes: 'SSC & HSC' },
  { icon: <FaClock />, shift: 'Afternoon Batch', time: '3:00 PM – 6:00 PM', days: 'Mon – Sat', classes: 'School Section (7th–10th)' },
  { icon: <FaMoon />, shift: 'Evening Batch', time: '6:00 PM – 9:30 PM', days: 'Mon – Sat', classes: 'College Section (HSC Commerce)' },
];

export default function TimingsSection() {
  return (
    <section className="timings-sec section" id="timings">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Batch Timings</span>
          <h2 className="section-head__title">Class <em>Schedule</em></h2>
        </div>
        <div className="timings-grid">
          {batches.map((b, i) => (
            <div key={i} className="timing-card">
              <div className="timing-card__icon">{b.icon}</div>
              <h3 className="timing-card__shift">{b.shift}</h3>
              <p className="timing-card__time">{b.time}</p>
              <p className="timing-card__days">{b.days}</p>
              <span className="timing-card__classes">{b.classes}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
