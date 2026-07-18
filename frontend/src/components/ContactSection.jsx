import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', program: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    } catch (err) { /* handle silently */ }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', email: '', program: '', message: '' });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container" style={{ marginBottom: '60px', textAlign: 'center' }}>
        <h2 className="section-title" style={{ fontSize: '2.5rem', textTransform: 'lowercase', letterSpacing: '-1px' }}>We're listening</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', marginTop: '32px' }}>
          {['SSC', 'HSC Science', 'HSC Commerce', 'Degree (B.Com/BAF/BMS)'].map((dept, i) => (
            <a key={i} href="tel:+919221105658" style={{ padding: '16px 32px', background: '#fff', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', color: 'var(--color-primary)', fontWeight: '700', fontSize: '1.1rem', boxShadow: 'var(--shadow-sm)', transition: 'var(--transition)' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-text-light)', textTransform: 'uppercase', marginBottom: '4px' }}>{dept}</span>
              +91 92211 05658
            </a>
          ))}
        </div>
      </div>
      <div className="container contact-grid">
        <div className="contact-form-wrap">
          <span className="section-label">Get in Touch</span>
          <h3 className="section-title" style={{ fontSize: '1.8rem' }}>Send Us an <span className="accent-text">Inquiry</span></h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Student Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
            <input type="tel" placeholder="+91 XXXXX XXXXX" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
            <input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
            <select value={form.program} onChange={e => setForm({...form, program: e.target.value})} required>
              <option value="">Select Program</option>
              <option>School Section (7th to 10th)</option>
              <option>College Section (11th & 12th)</option>
              <option>Degree Section (B.Com, BAF, BMS)</option>
            </select>
            <textarea placeholder="Your Message (optional)" rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
            <button type="submit" className="btn btn-primary">{submitted ? <><FaCheckCircle style={{marginRight: '8px'}}/> Sent!</> : <>Send Inquiry <FaArrowRight style={{marginLeft: '8px'}} /></>}</button>
          </form>
        </div>
        <div className="contact-info">
          <div className="info-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)' }}><FaMapMarkerAlt /> <span style={{color: 'var(--color-dark)'}}>Visit Us</span></h3>
            <p>1st & 2nd Floor, Near Baiganwadi, Above City Bakery, Govandi West, Mumbai - 400043</p>
          </div>
          <div className="info-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)' }}><FaPhoneAlt /> <span style={{color: 'var(--color-dark)'}}>Call Us</span></h3>
            <p><a href="tel:+919221105658">+91 92211 05658</a></p>
          </div>
          <div className="info-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)' }}><FaEnvelope /> <span style={{color: 'var(--color-dark)'}}>Email Us</span></h3>
            <p><a href="mailto:info@sscoachingclasses.in">info@sscoachingclasses.in</a></p>
          </div>
          <div className="info-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)' }}><FaClock /> <span style={{color: 'var(--color-dark)'}}>Timings</span></h3>
            <p>Mon–Sat: 3:00 PM – 9:30 PM<br/>Sunday: 10:00 AM – 7:00 PM</p>
          </div>
          <div className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d72.922!3d19.060!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzM2LjUiTiA3MsKwNTUnMTkuOCJF!5e0!3m2!1sen!2sin!4v1" width="100%" height="200" style={{border:0, borderRadius: '12px'}} allowFullScreen="" loading="lazy" title="Location" />
          </div>
        </div>
      </div>
    </section>
  );
}
