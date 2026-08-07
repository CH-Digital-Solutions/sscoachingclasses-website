import { useEffect, useRef, useState } from 'react';
import { FaCalendarAlt, FaGlobe, FaTrophy, FaUsers } from 'react-icons/fa';

const stats = [
  { icon: <FaCalendarAlt />, value: 18, suffix: '+', label: 'Years of Excellence' },
  { icon: <FaGlobe />, value: 3, suffix: '', label: 'Language Mediums' },
  { icon: <FaTrophy />, value: 200, suffix: '+', label: 'Top Board Scorers' },
  { icon: <FaUsers />, value: 35, suffix: '', label: 'Students / Batch' },
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

  return <span ref={ref} className="hero__stat-val">{count}{suffix}</span>;
}

export default function StatsBar() {
  return (
    <div className="hero__stats">
      {stats.map((s, i) => (
        <div key={i} className="hero__stat">
          <span className="hero__stat-icon">{s.icon}</span>
          <span className="hero__stat-text">
            <AnimatedNumber target={s.value} suffix={s.suffix} />
            <span className="hero__stat-lbl">{s.label}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
