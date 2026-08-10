import { useState, useEffect, useMemo } from 'react';
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaWhatsapp } from 'react-icons/fa';
import StatsBar from './StatsBar';

import { galleryImages } from '../data/gallery';

// Only use first 10 gallery photos for the hero carousel (not all 125!)
const HERO_SLIDE_COUNT = 10;
const heroImages = galleryImages.slice(0, HERO_SLIDE_COUNT).map(img => img.src);


export default function HeroSection({ onBookDemo }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % heroImages.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir) => setCurrent(p => (p + dir + heroImages.length) % heroImages.length);

  // Only render 3 slides in the DOM: previous, current, next
  const visibleIndices = useMemo(() => {
    const prev = (current - 1 + heroImages.length) % heroImages.length;
    const next = (current + 1) % heroImages.length;
    return [prev, current, next];
  }, [current]);

  return (
    <section className="hero" id="home">
      <div className="grid-pattern" />
      <div className="hero__glow hero__glow--a" />
      <div className="hero__glow hero__glow--b" />
      <div className="hero__wrap wrap">
        <div className="hero__grid">
          <div className="hero__content">
            <h1 className="hero__title">
              <span className="hero__hindi-tagline">एक कदम <span style={{ color: 'var(--accent)' }}>सफलता</span> की ओर</span>
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
                  {visibleIndices.map((i) => (
                    <div
                      key={i}
                      className={`hero__slide${i === current ? ' active' : ''}`}
                    >
                      <div className="hero__slide-overlay" />
                      <img
                        src={heroImages[i]}
                        alt={`SS Classes Gallery Photo ${i + 1}`}
                        className="hero__slide-img"
                        loading={i === current ? 'eager' : 'lazy'}
                        decoding="async"
                        fetchPriority={i === current ? 'high' : 'low'}
                      />
                    </div>
                  ))}
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
