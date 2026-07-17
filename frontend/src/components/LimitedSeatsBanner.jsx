

export default function LimitedSeatsBanner({ onBookDemo }) {
  return (
    <section className="seats-banner">
      <div className="container seats-inner">
        <div className="seats-text">
          <h2>Limited Seats Available for 2026–27 Batch</h2>
          <p>Only 35 students per batch — secure your child's spot before admissions close.</p>
        </div>
        <div className="seats-actions">
          <button className="btn btn-white" onClick={onBookDemo}>Book Free Demo ↗</button>
          <a href="https://wa.me/919221105658?text=Hello%2C%20I%20want%20to%20enquire%20about%20admissions" target="_blank" rel="noopener noreferrer" className="btn btn-outline seats-wa">💬 WhatsApp Us</a>
        </div>
      </div>
    </section>
  );
}
