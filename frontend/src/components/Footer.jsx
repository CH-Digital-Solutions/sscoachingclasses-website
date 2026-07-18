import { FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <a href="#home" className="footer-logo">
              <img src="/SS Logo.svg" alt="SS Coaching Classes Logo" className="footer-logo__img" />
              <span className="footer-logo-name">SS CLASSES</span>
            </a>
            <p className="footer-tagline">Nurturing curious minds since 2008. Hindi, Urdu & English medium coaching for SSC, HSC & Degree.</p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/sscoachingclasses" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://youtube.com/@sscoachingclasses" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#programs">Programs</a>
              <a href="#results">Results</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Programs</h4>
            <div className="footer-links">
              <a href="#programs">SSC (7th–10th)</a>
              <a href="#programs">HSC (11th–12th)</a>
              <a href="#programs">B.Com / BAF / BMS</a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-links">
              <p><FaMapMarkerAlt /> Govandi West, Mumbai – 400043</p>
              <a href="tel:+919221105658"><FaPhoneAlt /> +91 92211 05658</a>
              <a href="mailto:info@sscoachingclasses.in"><FaEnvelope /> info@sscoachingclasses.in</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SS Coaching Classes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
