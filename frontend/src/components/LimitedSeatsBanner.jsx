import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';

export default function LimitedSeatsBanner({ onBookDemo }) {
  return (
    <section className="ab-sec">
      <div className="wrap">
        <div className="ab-card">
          <div className="ab-blob ab-blob--a" />
          <div className="ab-blob ab-blob--b" />
          <div className="ab-content">
            <span className="ab-tag">Admissions 2026â€“27</span>
            <h2 className="ab-title">Limited Seats Available for the 2026â€“27 Batch</h2>
            <p className="ab-desc">Only 35 students per batch â€” secure your child's spot before admissions close.</p>
            <div className="ab-btns">
              <button className="btn btn--primary btn--lg" onClick={onBookDemo}>Book Free Demo <FaArrowRight /></button>
              <a
                href="https://wa.me/918080714141?text=Hello%2C%20I%20want%20to%20enquire%20about%20admissions"
                target="_blank" rel="noopener noreferrer"
                className="btn btn--wa btn--lg"
              >
                <FaWhatsapp /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
