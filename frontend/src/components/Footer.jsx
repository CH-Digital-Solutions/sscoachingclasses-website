
import { FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="brand-icon">SS</span>
            <div className="brand-text">
              <span className="brand-name">SS COACHING</span>
              <span className="brand-sub">Classes</span>
            </div>
          </div>
          <p className="footer-tagline">Nurturing curious minds since 2008. Hindi, Urdu & English medium coaching for SSC, HSC & Degree.</p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/sscoachingclasses" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://youtube.com/@sscoachingclasses" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#results">Results</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Programs</h4>
          <ul>
            <li><a href="#programs">SSC (7th–10th)</a></li>
            <li><a href="#programs">HSC (11th–12th)</a></li>
            <li><a href="#programs">B.Com / BAF / BMS</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p><FaMapMarkerAlt /> Govandi West, Mumbai – 400043</p>
          <p><FaPhone /> <a href="tel:+919221105658">+91 92211 05658</a></p>
          <p><FaEnvelope /> <a href="mailto:info@sscoachingclasses.in">info@sscoachingclasses.in</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} SS Coaching Classes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
