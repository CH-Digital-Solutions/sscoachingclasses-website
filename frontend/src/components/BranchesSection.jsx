import { FaMapMarkerAlt, FaPhoneAlt, FaDirections, FaClock } from 'react-icons/fa';

const branches = [
  {
    name: 'GTB Nagar (Head Office)',
    address: 'Vivekanand Society, near sardar nagar no 02 Bus stop, Sion Koliwada, Mumbai -37',
    phone: '+91 80807 14141',
    mapLink: 'https://maps.google.com/?q=Vivekanand+Society+Sion+Koliwada',
    timings: ['8:00 AM - 9:30 AM', '5:30 PM - 7:00 PM', '8:00 PM - 9:30 PM'],
    isMain: true
  },
  {
    name: 'Antophill Branch',
    address: 'RES School, Under Monorail station, Kalpak, Antophill, Mumbai -37',
    phone: '+91 80807 14141',
    mapLink: 'https://maps.google.com/?q=RES+School+Antophill+Mumbai',
    timings: ['6:00 PM - 7:30 PM', '8:00 PM - 9:30 PM'],
    isMain: false
  },
  {
    name: 'Wadala Branch',
    address: 'RES School, Shiv Sankar Nagar, Near Barkat Ali naka, Wadala East, Mumbai -37',
    phone: '+91 80807 14141',
    mapLink: 'https://maps.google.com/?q=RES+School+Wadala+East+Mumbai',
    timings: ['8:00 PM - 9:30 PM'],
    isMain: false
  },
];

export default function BranchesSection() {
  return (
    <section className="branches-sec section" id="branches">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Our Branches</span>
          <h2 className="section-head__title">Find Us <em>Near You</em></h2>
        </div>
        <div className="branches-grid">
          {branches.map((b, i) => (
            <div key={i} className={`branch-card${b.isMain ? ' branch-card--main' : ''}`}>
              {b.isMain && <span className="branch-badge">MAIN BRANCH</span>}
              <h3 className="branch-card__name"><FaMapMarkerAlt /> {b.name}</h3>
              <p className="branch-card__address">{b.address}</p>
              
              <div className="branch-card__timings" style={{ marginTop: '12px', marginBottom: '12px' }}>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-main)' }}>
                  <FaClock /> Timings:
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {b.timings.map((t, idx) => (
                    <li key={idx} style={{ marginBottom: '2px' }}>{t}</li>
                  ))}
                </ul>
              </div>

              <p className="branch-card__phone"><FaPhoneAlt /> <a href={`tel:${b.phone.replace(/\s/g, '')}`}>{b.phone}</a></p>
              <a href={b.mapLink} target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--sm">
                <FaDirections /> Get Directions
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
