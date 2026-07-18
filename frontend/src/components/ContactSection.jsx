import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const quickDepts = ['SSC', 'HSC Science', 'HSC Commerce', 'Degree (B.Com/BAF/BMS)'];

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
    <section className="contact-sec section" id="contact">
      <div className="wrap">
        <div className="contact-header">
          <span className="ch-label">Get in Touch</span>
          <h2 className="ch-title">We're <em>Listening</em></h2>
        </div>

        <div className="contact-quick">
          {quickDepts.map((d, i) => (
            <a key={i} href="tel:+919221105658" className="contact-quick__card">
              <span>{d}</span>
              +91 92211 05658
            </a>
          ))}
        </div>

        <div className="contact-grid">
          <div className="contact-form-wrap">
            <h3 className="cf-title">Send Us an Inquiry</h3>
            <p className="cf-sub">Fill in your details and a counsellor will get back to you.</p>
            {submitted ? (
              <div className="cf-success">
                <FaCheckCircle style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '.75rem' }} />
                <h4>Thank you!</h4>
                <p>Your inquiry has been received. We'll call you back shortly.</p>
              </div>
            ) : (
              <form className="cf-form" onSubmit={handleSubmit}>
                <div className="cf-row">
                  <div className="field">
                    <label className="field__label">Student Name</label>
                    <input className="field__input" type="text" placeholder="Full name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="field">
                    <label className="field__label">Phone Number</label>
                    <input className="field__input" type="tel" placeholder="+91 XXXXX XXXXX" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                </div>
                <div className="cf-row">
                  <div className="field">
                    <label className="field__label">Email Address</label>
                    <input className="field__input" type="email" placeholder="Email (optional)" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div className="field">
                    <label className="field__label">Program</label>
                    <select className="field__select" value={form.program} onChange={e => setForm({ ...form, program: e.target.value })} required>
                      <option value="">Select Program</option>
                      <option>School Section (7th to 10th)</option>
                      <option>College Section (11th & 12th)</option>
                      <option>Degree Section (B.Com, BAF, BMS)</option>
                    </select>
                  </div>
                </div>
                <div className="field">
                  <label className="field__label">Message</label>
                  <textarea className="field__textarea" placeholder="Your message (optional)" rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>
                <button type="submit" className="btn btn--primary">Send Inquiry <FaArrowRight /></button>
              </form>
            )}
          </div>

          <div className="contact-info">
            <div className="info-card">
              <h3><FaMapMarkerAlt /> Visit Us</h3>
              <p>1st & 2nd Floor, Near Baiganwadi, Above City Bakery, Govandi West, Mumbai - 400043</p>
            </div>
            <div className="info-card">
              <h3><FaPhoneAlt /> Call Us</h3>
              <p><a href="tel:+919221105658">+91 92211 05658</a></p>
            </div>
            <div className="info-card">
              <h3><FaEnvelope /> Email Us</h3>
              <p><a href="mailto:info@sscoachingclasses.in">info@sscoachingclasses.in</a></p>
            </div>
            <div className="info-card">
              <h3><FaClock /> Timings</h3>
              <p>Mon–Sat: 3:00 PM – 9:30 PM<br />Sunday: 10:00 AM – 7:00 PM</p>
            </div>
            <div className="contact-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d72.922!3d19.060!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzM2LjUiTiA3MsKwNTUnMTkuOCJF!5e0!3m2!1sen!2sin!4v1" height="200" allowFullScreen="" loading="lazy" title="Location" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
