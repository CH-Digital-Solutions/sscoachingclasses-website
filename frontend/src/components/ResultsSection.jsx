import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrophy, FaMedal, FaArrowRight, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { resultStats } from '../data/results';

// Result pamphlet images
const pamphlets2025 = Array.from({ length: 11 }, (_, i) => `/results/2025-26/pamphlet-${i + 1}.jpeg`);

export default function ResultsSection() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const images = pamphlets2025;

  const go = (dir) => setCurrent(p => (p + dir + images.length) % images.length);

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <>
    <section className="rs-sec section" id="results">
      <div className="rs-glow rs-glow--1" />
      <div className="wrap">
        <div className="rs-header-row">
          <div className="rs-header-text">
            <span className="rs-eyebrow"><FaTrophy /> Top Performers</span>
            <h2 className="rs-title">Our <em>Achievers</em></h2>
          </div>
          <div className="rs-stats">
            <div className="rs-stat">
              <div className="rs-stat__value">{resultStats.studentsTaught.toLocaleString()}+</div>
              <div className="rs-stat__label">Students Taught</div>
            </div>
            <div className="rs-stat">
              <div className="rs-stat__value">{resultStats.passRate}%</div>
              <div className="rs-stat__label">Pass Rate</div>
            </div>
            <div className="rs-stat">
              <div className="rs-stat__value">{resultStats.boardToppers}+</div>
              <div className="rs-stat__label">Board Toppers</div>
            </div>
          </div>
        </div>

        {/* Pamphlet Slider */}
        <div className="rs-pamphlet-wrap">
          <span className="rs-toppers-label"><FaMedal className="rs-toppers-label__icon" /> Our Results 2025â€“26</span>

          <div className="rs-pamphlet-slider">
            <button className="rs-pamphlet-nav rs-pamphlet-nav--prev" onClick={() => go(-1)} aria-label="Previous">
              <FaChevronLeft />
            </button>

            <div className="rs-pamphlet-viewport">
              {images.map((img, i) => (
                <div
                  key={i}
                  className={`rs-pamphlet-slide${i === current ? ' active' : ''}`}
                  onClick={() => setLightbox(i)}
                >
                  <div
                    className="rs-pamphlet-blur"
                    style={{ backgroundImage: `url("${img}")` }}
                  />
                  <img
                    src={img}
                    alt={`SS Classes Result ${i + 1}`}
                    className="rs-pamphlet-img"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <button className="rs-pamphlet-nav rs-pamphlet-nav--next" onClick={() => go(1)} aria-label="Next">
              <FaChevronRight />
            </button>
          </div>

          <div className="rs-pamphlet-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`rs-pamphlet-dot${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to result ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Results Button */}
        <div className="rs-view-all">
          <Link to="/results" className="btn btn--primary btn--lg">
            View All Results <FaArrowRight />
          </Link>
        </div>
      </div>

      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <div className="gallery-lightbox__inner" onClick={e => e.stopPropagation()}>
            <img src={images[lightbox]} alt={`Result ${lightbox + 1}`} className="gallery-lightbox__img" />
            <button className="gallery-lightbox__close" onClick={() => setLightbox(null)} aria-label="Close"><FaTimes /></button>
            <button className="gallery-lightbox__nav gallery-lightbox__nav--prev" onClick={() => setLightbox((lightbox - 1 + images.length) % images.length)} aria-label="Previous">
              <FaChevronLeft />
            </button>
            <button className="gallery-lightbox__nav gallery-lightbox__nav--next" onClick={() => setLightbox((lightbox + 1) % images.length)} aria-label="Next">
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
