import { useState, useEffect } from 'react';
import { testimonials, googleRating } from '../data/testimonials';


export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials section" id="reviews">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-label">Reviews</span>
          <h2 className="section-title">What Parents & Students <span className="accent-text italic-accent">Say</span></h2>
          <div className="google-rating">
            <div className="rating-stars">{'★'.repeat(5)}</div>
            <span className="rating-score">{googleRating.score}</span>
            <span className="rating-count">Based on {googleRating.totalReviews} Google Reviews</span>
          </div>
        </div>
        <div className="testimonials-carousel">
          <div className="testimonials-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-stars">{'★'.repeat(t.rating)}</div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="testimonials-dots">
          {testimonials.map((_, i) => (
            <span key={i} className={`t-dot${i === current ? ' active' : ''}`} onClick={() => setCurrent(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
