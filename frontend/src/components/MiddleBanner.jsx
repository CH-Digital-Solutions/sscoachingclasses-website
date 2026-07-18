import { FaTrophy, FaGlobe, FaChalkboardTeacher } from 'react-icons/fa';

const items = [
  { icon: <FaTrophy />, title: 'Board Excellence', desc: '95% pass rate with 200+ board toppers across SSC & HSC exams.' },
  { icon: <FaGlobe />, title: 'Multi-Medium Coaching', desc: 'Dedicated Hindi, Urdu & English medium batches — one of the only institutes in Govandi.' },
  { icon: <FaChalkboardTeacher />, title: 'Expert Faculty', desc: 'Subject-specialist teachers with 10+ years of board exam coaching experience.' },
];

export default function MiddleBanner() {
  return (
    <section className="mid-banner-sec">
      <div className="wrap">
        <div className="why-banner">
          {items.map((it, i) => (
            <div key={i} className="why-banner__col">
              <span className="why-banner__icon">{it.icon}</span>
              <div>
                <h3 className="why-banner__title">{it.title}</h3>
                <p className="why-banner__desc">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
