import { useState, useEffect } from 'react';
import { FaTimes, FaGraduationCap, FaCheckCircle, FaArrowRight, FaClock } from 'react-icons/fa';

export default function BookDemoModal({ isOpen, onClose, prefilledProgram }) {
  const [form, setForm] = useState({ name: '', phone: '', program: prefilledProgram || '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setForm(prev => ({ ...prev, program: prefilledProgram || '' }));
    }
  }, [isOpen, prefilledProgram]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/demo', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    } catch (err) { /* */ }
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); onClose(); }, 2500);
    setForm({ name: '', phone: '', program: '' });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal__head">
          <div className="grid-pattern" />
          <button className="modal__close" onClick={onClose} aria-label="Close"><FaTimes /></button>
          <span className="modal__eyebrow">Admissions 2026–27</span>
          <h2 className="modal__title"><FaGraduationCap style={{ marginRight: '.5rem' }} />Book Your Free Demo</h2>
          <p className="modal__lead">Fill in your details – a counsellor will call you back to schedule a free demo class.</p>
        </div>
        <div className="modal__body">
          {submitted ? (
            <div className="cf-success">
              <FaCheckCircle style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '.75rem' }} />
              <h4>Request Sent!</h4>
              <p>We'll reach out to you within 24 hours.</p>
            </div>
          ) : (
            <form className="modal__form" onSubmit={handleSubmit}>
              <div className="field">
                <label className="field__label">Student Name</label>
                <input className="field__input" type="text" placeholder="Full name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="field">
                <label className="field__label">Phone Number</label>
                <input className="field__input" type="tel" placeholder="+91 XXXXX XXXXX" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div className="field">
                <label className="field__label">Program</label>
                <select className="field__select" value={form.program} onChange={e => setForm({ ...form, program: e.target.value })}>
                  <option value="">Select Program</option>
                  <option>School Section (5th to 10th)</option>
                  <option>Commerce (11th & 12th)</option>
                  <option>Arts (11th & 12th)</option>
                  <option>Science (11th & 12th)</option>
                  <option>English Speaking Course</option>
                  <option>Other</option>
                </select>
              </div>
              <button type="submit" className="btn btn--primary">Request Free Consultation <FaArrowRight /></button>
              <p className="modal__note"><FaClock /> No obligation · We reply within 24 hours</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
