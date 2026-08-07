import { useState, useEffect } from 'react';
import { FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Results', href: '#results' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onEnrolClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [menuOpen]);

  const Brand = () => (
    <a href="#home" className="nav__brand" onClick={() => setMenuOpen(false)}>
      <img src="/SS Logo.svg" alt="SS Coaching Classes Logo" className="nav__logo-img" />
      <span className="nav__logo-text">
        <span className="nav__logo-name">SS CLASSES</span>
      </span>
    </a>
  );

  return (
    <nav className={`nav${scrolled ? ' nav--solid' : ''}`}>
      <div className="nav__row wrap">
        <Brand />

        <ul className="nav__links">
          {navLinks.map(l => (
            <li key={l.href}><a href={l.href} className="nav__link">{l.label}</a></li>
          ))}
        </ul>

        <div className="nav__right">
          <a href="tel:+918080714141" className="nav__phone">
            <FaPhoneAlt /> +91 80807 14141
          </a>
          <button className="btn btn--primary btn--sm nav__cta" onClick={onEnrolClick}>Enrol Now</button>
          <button className="nav__hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <FaBars />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="nav__mobile">
          <div className="nav__mobile-header">
            <Brand />
            <button className="nav__hamburger" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <FaTimes />
            </button>
          </div>
          <div className="nav__mobile-links">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="nav__mobile-link" onClick={() => setMenuOpen(false)}>{l.label}</a>
            ))}
          </div>
          <div className="nav__mobile-actions">
            <a href="tel:+918080714141" className="btn btn--outline"><FaPhoneAlt /> +91 80807 14141</a>
            <button className="btn btn--primary" onClick={() => { onEnrolClick(); setMenuOpen(false); }}>Enrol Now</button>
          </div>
        </div>
      )}
    </nav>
  );
}
