import { useEffect, useRef, useState } from 'react';
import { FaCalendarAlt, FaGlobe, FaTrophy, FaUsers } from 'react-icons/fa';

const stats = [
  { icon: <FaCalendarAlt />, value: 18, suffix: '+', label: 'YEARS OF EXCELLENCE' },
  { icon: <FaGlobe />, value: 3, suffix: '', label: 'LANGUAGE MEDIUMS' },
  { icon: <FaTrophy />, value: 200, suffix: '+', label: 'TOP BOARD SCORERS' },
  { icon: <FaUsers />, value: 35, suffix: '', label: 'STUDENTS / BATCH' },
];

function AnimatedNumber({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const duration = 1500;
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          setCount(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className="stat-number">{count}{suffix}</span>;
}

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-item">
            <span className="stat-icon" style={{color: 'rgba(255,255,255,0.8)'}}>{s.icon}</span>
            <div>
              <AnimatedNumber target={s.value} suffix={s.suffix} />
              <span className="stat-label">{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
