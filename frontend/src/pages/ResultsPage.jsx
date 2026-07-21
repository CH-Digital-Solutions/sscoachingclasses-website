import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaTrophy, FaMedal, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { resultStats } from '../data/results';

// Result pamphlet images by year
const pamphletsByYear = {
  '2025-26': Array.from({ length: 11 }, (_, i) => `/results/2025-26/pamphlet-${i + 1}.jpeg`),
  '2024-25': Array.from({ length: 13 }, (_, i) => `/results/2024-25/pamphlet-${i + 1}.jpeg`),
};

const years = Object.keys(pamphletsByYear);

export default function ResultsPage() {
  const [activeYear, setActiveYear] = useState(years[0]);
  const [lightbox, setLightbox] = useState(null);

  const currentImages = pamphletsByYear[activeYear] || [];

  const lightboxNav = (dir) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + currentImages.length) % currentImages.length);
  };

  return (
    <>
      {/* Hero */}
      <section className="rp-hero">
        <div className="grid-pattern" />
        <div className="rp-hero__glow rp-hero__glow--a" />
        <div className="rp-hero__glow rp-hero__glow--b" />
        <div className="wrap">
          <Link to="/" className="wt-back-link">
            <FaArrowLeft /> Back to Home
          </Link>
          <div className="rp-hero__content">
            <span className="eyebrow"><FaTrophy /> Our Achievements</span>
            <h1 className="rp-hero__title">Student <em>Results</em></h1>
            <p className="rp-hero__desc">
              Celebrating the academic excellence of our students across all boards and programs.
            </p>
          </div>

          {/* Stats */}
          <div className="rp-stats-row">
            <div className="rp-stat-card">
              <span className="rp-stat-card__value">{resultStats.studentsTaught.toLocaleString()}+</span>
              <span className="rp-stat-card__label">Students Taught</span>
            </div>
            <div className="rp-stat-card">
              <span className="rp-stat-card__value">{resultStats.passRate}%</span>
              <span className="rp-stat-card__label">Pass Rate</span>
            </div>
            <div className="rp-stat-card">
              <span className="rp-stat-card__value">{resultStats.boardToppers}+</span>
              <span className="rp-stat-card__label">Board Toppers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Year Tabs + Pamphlet Gallery */}
      <section className="rp-results section">
        <div className="wrap">
          <div className="rp-year-tabs">
            {years.map(year => (
              <button
                key={year}
                className={`rp-year-tab${activeYear === year ? ' rp-year-tab--active' : ''}`}
                onClick={() => setActiveYear(year)}
              >
                <FaMedal /> {year} Results
              </button>
            ))}
          </div>

          {/* Pamphlet Grid */}
          <div className="rp-pamphlet-grid">
            {currentImages.map((img, i) => (
              <div
                key={i}
                className="rp-pamphlet-card"
                onClick={() => setLightbox(i)}
              >
                <div
                  className="rp-pamphlet-card__blur"
                  style={{ backgroundImage: `url("${img}")` }}
                />
                <img
                  src={img}
                  alt={`${activeYear} Result ${i + 1}`}
                  className="rp-pamphlet-card__img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="rs-lightbox" onClick={() => setLightbox(null)}>
          <button className="rs-lightbox__close" onClick={() => setLightbox(null)} aria-label="Close"><FaTimes /></button>
          <div className="rs-lightbox__content" onClick={e => e.stopPropagation()}>
            <div className="rs-lightbox__blur" style={{ backgroundImage: `url("${currentImages[lightbox]}")` }} />
            <img src={currentImages[lightbox]} alt={`Result ${lightbox + 1}`} className="rs-lightbox__img" />
            <button className="rs-lightbox__nav rs-lightbox__nav--prev" onClick={() => lightboxNav(-1)} aria-label="Previous">
              <FaChevronLeft />
            </button>
            <button className="rs-lightbox__nav rs-lightbox__nav--next" onClick={() => lightboxNav(1)} aria-label="Next">
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
