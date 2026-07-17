import { useState } from 'react';


export default function BookDemoModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', program: 'School Section (7th to 10th)' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/demo', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    } catch (err) { /* */ }
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); onClose(); }, 2500);
    setForm({ name: '', phone: '', program: 'School Section (7th to 10th)' });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-header">
          <span className="modal-badge">ADMISSIONS 2026–27</span>
          <h2>Book Your Free Demo</h2>
          <p>Fill in your details – a counsellor will call you back to schedule a free demo class.</p>
        </div>
        <form className="modal-form" onSubmit={handleSubmit}>
          <label>STUDENT NAME<input type="text" placeholder="Full name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} /></label>
          <label>PHONE NUMBER<input type="tel" placeholder="+91 XXXXX XXXXX" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} /></label>
          <label>PROGRAM
            <select value={form.program} onChange={e => setForm({...form, program: e.target.value})}>
              <option>School Section (7th to 10th)</option>
              <option>College Section (11th & 12th)</option>
              <option>Degree Section (B.Com, BAF, BMS)</option>
            </select>
          </label>
          <button type="submit" className="btn btn-primary modal-submit">{submitted ? '✓ Request Sent!' : 'Request Free Consultation ↗'}</button>
          <p className="modal-note">🕐 No obligation · We reply within 24 hours</p>
        </form>
      </div>
    </div>
  );
}
