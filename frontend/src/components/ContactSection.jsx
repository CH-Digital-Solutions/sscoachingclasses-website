import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCheckCircle, FaArrowRight, FaWhatsapp, FaPaperPlane, FaUserGraduate, FaHeadset } from 'react-icons/fa';

const quickDepts = ['School (1st-10th)', 'HSC Commerce', 'English Speaking Course'];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', program: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer re_512Mq8PA_M8yxRqPNY8j9g3UBYfR9rwSq'
        },
        body: JSON.stringify({
          from: 'Acme <onboarding@resend.dev>',
          to: ['manage.ssclasses@gmail.com'],
          subject: `New Inquiry from ${form.name} - SS Classes`,
          html: `
            <h2>New Inquiry from SS Coaching Classes Website</h2>
            <p><strong>Name:</strong> ${form.name}</p>
            <p><strong>Phone:</strong> ${form.phone}</p>
            <p><strong>Email:</strong> ${form.email || 'Not provided'}</p>
            <p><strong>Program:</strong> ${form.program}</p>
            <p><strong>Message:</strong></p>
            <p>${form.message || 'No message provided.'}</p>
          `
        })
      });
      if (!response.ok) {
        console.error('Failed to send email:', await response.text());
      }
    } catch (err) { console.error(err); }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', phone: '', email: '', program: '', message: '' });
  };

  return (
    <section className="contact-sec section" id="contact">
      <div className="wrap">
        {/* Inquiry Form — Redesigned */}
        <div className="inquiry-container">
          <div className="inquiry-grid">


            {/* Right Side — Form */}
            <div className="inquiry-form-wrap">
              {submitted ? (
                <div className="inquiry-success">
                  <div className="inquiry-success__icon">
                    <FaCheckCircle />
                  </div>
                  <h3>Thank You!</h3>
                  <p>Your inquiry has been received. We'll call you back shortly.</p>
                </div>
              ) : (
                <form className="inquiry-form" onSubmit={handleSubmit}>
                  <h3 className="inquiry-form__title"><FaPaperPlane /> Send Us an Inquiry</h3>

                  <div className="inquiry-field-grid">
                    <div className="inquiry-field">
                      <label>Student Name</label>
                      <input
                        type="text"
                        placeholder="Enter full name"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div className="inquiry-field">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        required
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="inquiry-field-grid">
                    <div className="inquiry-field">
                      <label>Email Address</label>
                      <input
                        type="email"
                        placeholder="Email (optional)"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    <div className="inquiry-field">
                      <label>Program</label>
                      <select
                        value={form.program}
                        onChange={e => setForm({ ...form, program: e.target.value })}
                        required
                      >
                        <option value="">Select Program</option>
                        <option>School Section (5th to 10th)</option>
                        <option>HSC Commerce</option>
                        <option>English Speaking Course</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="inquiry-field">
                    <label>Message</label>
                    <textarea
                      placeholder="Your message (optional)"
                      rows={3}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn--primary inquiry-submit-btn">
                    Send Inquiry <FaArrowRight />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Timing and Map Section */}
        <div className="contact-bottom-grid">
          <div className="contact-map-new">
            <iframe src="https://maps.google.com/maps?q=S+S+Coaching+Classes+(+Prof.+Satish+)&t=&z=14&ie=UTF8&iwloc=&output=embed" height="100%" allowFullScreen="" loading="lazy" title="Location" />
          </div>
        </div>
      </div>
    </section>
  );
}
