import { useState, useEffect } from 'react';
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaWhatsapp } from 'react-icons/fa';
import StatsBar from './StatsBar';
import { galleryImages } from '../data/gallery';

// Shuffle and pick 8 images for the carousel
const heroImages = [...galleryImages]
  .sort(() => 0.5 - Math.random())
  .slice(0, 8)
  .map(img => img.src);


export default function HeroSection({ onBookDemo }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % heroImages.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir) => setCurrent(p => (p + dir + heroImages.length) % heroImages.length);

  return (
    <section className="hero" id="home">
      <div className="grid-pattern" />
      <div className="hero__glow hero__glow--a" />
      <div className="hero__glow hero__glow--b" />
      <div className="hero__wrap wrap">
        <div className="hero__grid">
          <div className="hero__content">
            <h1 className="hero__title">
              Shaping Tomorrow's <span className="hero__accent">Leaders</span>
            </h1>
                <p className="hero__desc">
                  Hindi, Semi-English &amp; English medium coaching for School &amp; HSC Commerce — with expert faculty,
                  small batches, and a proven board-topping record.
                </p>
                <div className="hero__btns">
                  <button className="btn btn--primary btn--lg" onClick={onBookDemo}>
                    Book Free Demo <FaArrowRight />
                  </button>
                  <a
                    href="https://wa.me/918080714141?text=Hello%2C%20I%20want%20to%20enquire%20about%20admissions"
                    target="_blank" rel="noopener noreferrer"
                    className="btn btn--wa btn--lg"
                  >
                    <FaWhatsapp /> WhatsApp Us
                  </a>
                </div>
              </div>

              <div className="hero__media">
                <div className="hero__photo">
                  {heroImages.map((img, i) => (
                    <div
                      key={i}
                      className={`hero__slide${i === current ? ' active' : ''}`}
                      style={{ backgroundImage: `url("${img}")` }}
                    />
                  ))}
                  <div className="hero__dots">
                    {heroImages.map((_, i) => (
                      <span key={i} className={`hero__dot${i === current ? ' active' : ''}`} onClick={() => setCurrent(i)} />
                    ))}
                  </div>
                  <div className="hero__nav">
                    <button className="hero__nav-btn" onClick={() => go(-1)} aria-label="Previous"><FaChevronLeft /></button>
                    <button className="hero__nav-btn" onClick={() => go(1)} aria-label="Next"><FaChevronRight /></button>
                  </div>
                </div>
              </div>
          </div>

          <StatsBar />
        </div>
    </section>
  );
}
