
import { FaMapMarkerAlt, FaPhone, FaDirections } from 'react-icons/fa';

const branches = [
  {
    name: 'Govandi West (Main Branch)',
    address: '1st & 2nd Floor, Near Baiganwadi, Above City Bakery, Govandi West, Mumbai - 400043',
    phone: '+91 92211 05658',
    mapLink: 'https://maps.google.com/?q=Govandi+West+Mumbai',
    isMain: true
  },
  {
    name: 'Govandi East Branch',
    address: 'Near Govandi Station, Govandi East, Mumbai - 400088',
    phone: '+91 92211 05658',
    mapLink: 'https://maps.google.com/?q=Govandi+East+Mumbai',
    isMain: false
  },
];

export default function BranchesSection() {
  return (
    <section className="branches section" id="branches">
      <div className="container">
        <div className="branches-header">
          <span className="section-label">Our Branches</span>
          <h2 className="section-title">Find Us <span className="accent-text">Near You</span></h2>
          <p className="section-subtitle">Conveniently located branches across Govandi to serve our community.</p>
        </div>
        <div className="branches-grid">
          {branches.map((b, i) => (
            <div key={i} className={`branch-card${b.isMain ? ' main' : ''}`}>
              {b.isMain && <span className="branch-badge">MAIN BRANCH</span>}
              <h3><FaMapMarkerAlt /> {b.name}</h3>
              <p className="branch-address">{b.address}</p>
              <p className="branch-phone"><FaPhone /> <a href={`tel:${b.phone.replace(/\s/g,'')}`}>{b.phone}</a></p>
              <a href={b.mapLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline branch-dir">
                <FaDirections /> Get Directions
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
