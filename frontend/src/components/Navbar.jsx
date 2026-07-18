import { useState, useEffect } from 'react';


const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
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

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner container">
        <a href="#home" className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/SS Logo.svg" alt="SS Coaching Classes Logo" style={{ height: '48px', width: 'auto' }} />
          <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '1.4rem', fontWeight: '900', color: '#000', letterSpacing: '0px' }}>SS Classes</span>
        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li className="nav-mobile-cta">
            <button className="btn btn-primary" onClick={() => { onEnrolClick(); setMenuOpen(false); }}>
              Enrol Now
            </button>
          </li>
        </ul>

        <div className="nav-right">
          <a href="tel:+919221105658" className="nav-phone">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            +91 92211 05658
          </a>
          <button className="btn btn-primary nav-enrol" onClick={onEnrolClick}>Enrol Now</button>
        </div>

        <button className={`hamburger${menuOpen ? ' active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}
