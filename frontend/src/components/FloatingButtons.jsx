import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function FloatingButtons() {
  return (
    <>
      <div className="fab-wrap">
        <a href="https://wa.me/918080714141?text=Hello%2C%20I%20want%20to%20enquire%20about%20admissions" target="_blank" rel="noopener noreferrer" className="fab fab--wa" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="tel:+918080714141" className="fab fab--phone" aria-label="Call">
          <FaPhoneAlt />
        </a>
      </div>

      <div className="mobile-bottom">
        <div className="mobile-bottom__row wrap">
          <a href="tel:+918080714141" className="btn btn--outline"><FaPhoneAlt /> Call</a>
          <a href="https://wa.me/918080714141?text=Hello%2C%20I%20want%20to%20enquire%20about%20admissions" target="_blank" rel="noopener noreferrer" className="btn btn--wa"><FaWhatsapp /> WhatsApp</a>
        </div>
      </div>
    </>
  );
}
