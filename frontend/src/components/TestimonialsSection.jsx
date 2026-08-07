import { useState, useEffect } from 'react';
import { FaQuoteRight, FaStar, FaPen } from 'react-icons/fa';
import { testimonials, googleRating } from '../data/testimonials';

const GOOGLE_REVIEW_URL = 'https://local.google.com/place?placeid=ChIJOyzrk6TP5zsRmI_1t4OSUQ8&utm_medium=noren&utm_source=gbp&utm_campaign=2026';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="rev-sec section" id="reviews">
      <div className="wrap">
        <div className="rev-head">
          <div>
            <span className="eyebrow">Reviews</span>
            <h2 className="rev-title">What Parents &amp; Students <em>Say</em></h2>
            <div className="rev-summary">
              <span className="rev-summary__score">{googleRating.score}</span>
              <span className="rev-summary__stars">{Array.from({ length: 5 }).map((_, i) => <FaStar key={i} />)}</span>
              <span className="rev-summary__count">Based on {googleRating.totalReviews} Google Reviews</span>
            </div>
          </div>
        </div>

        <div className="rev-track">
          {testimonials.slice(0, 9).map((t, i) => (
            <div key={i} className="rev-card">
              <FaQuoteRight className="rev-card__quote-mark" />
              <div className="rev-card__stars">{Array.from({ length: t.rating }).map((_, j) => <FaStar key={j} />)}</div>
              <p className="rev-card__text">"{t.quote}"</p>
              <div className="rev-card__author">
                <div className="rev-card__avatar">{t.name[0]}</div>
                <div>
                  <span className="rev-card__name">{t.name}</span>
                  <span className="rev-card__role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rev-dots">
          {testimonials.slice(0, 9).map((_, i) => (
            <button key={i} className={`rev-dot${i === current ? ' active' : ''}`} onClick={() => setCurrent(i)} aria-label={`Go to review ${i + 1}`} />
          ))}
        </div>

        <div className="rev-write-review">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--lg"
          >
            <FaPen /> Write a Review
          </a>
        </div>
      </div>
    </section>
  );
}
