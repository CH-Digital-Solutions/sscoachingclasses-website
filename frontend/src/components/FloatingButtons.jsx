
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

export default function FloatingButtons() {
  return (
    <div className="floating-btns">
      <a href="https://wa.me/919221105658?text=Hello%2C%20I%20want%20to%20enquire%20about%20admissions" target="_blank" rel="noopener noreferrer" className="fab fab-wa" aria-label="WhatsApp">
        <FaWhatsapp />
      </a>
      <a href="tel:+919221105658" className="fab fab-call" aria-label="Call">
        <FaPhone />
      </a>
    </div>
  );
}
