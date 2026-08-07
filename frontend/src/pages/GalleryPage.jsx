import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaImages, FaArrowLeft, FaTimes, FaChevronLeft, FaChevronRight, FaSearch } from 'react-icons/fa';
import { galleryImages } from '../data/gallery';

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  const filtered = galleryImages;

  const openLightbox = (index) => setLightbox({ open: true, index });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });
  const navigateLightbox = (dir) => {
    setLightbox(prev => ({
      ...prev,
      index: (prev.index + dir + filtered.length) % filtered.length
    }));
  };

  useEffect(() => {
    if (lightbox.open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightbox.open]);

  return (
    <>
      {/* Hero */}
      <section className="gp-hero">
        <div className="grid-pattern" />
        <div className="gp-hero__glow gp-hero__glow--a" />
        <div className="gp-hero__glow gp-hero__glow--b" />
        <div className="wrap">
          <Link to="/" className="wt-back-link">
            <FaArrowLeft /> Back to Home
          </Link>
          <div className="gp-hero__content">
            <span className="eyebrow"><FaImages /> Photo Gallery</span>
            <h1 className="gp-hero__title">Life at <em>SS Classes</em></h1>
            <p className="gp-hero__desc">
              Explore moments from our classrooms, events, campus, and student activities. 
              Every photo tells a story of learning and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gp-gallery section no-reveal">
        <div className="wrap">
          {/* Filter Bar */}
          <div className="gp-filter-bar">
            <span className="gp-showing">{filtered.length} photos</span>
          </div>

          {/* Masonry Grid */}
          <div className="gp-grid">
            {filtered.map((img, i) => (
              <div
                key={img.id}
                className={`gp-item${i % 7 === 0 ? ' gp-item--tall' : ''}${i % 5 === 2 ? ' gp-item--wide' : ''}`}
                onClick={() => openLightbox(i)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gp-item__overlay">
                  <div className="gp-item__zoom"><FaSearch /></div>
                  <div className="gp-item__info">
                    <span className="gp-item__caption">{img.alt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox.open && filtered[lightbox.index] && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <div className="gallery-lightbox__inner" onClick={e => e.stopPropagation()}>
            <img
              src={filtered[lightbox.index].src}
              alt={filtered[lightbox.index].alt}
              className="gallery-lightbox__img"
            />
            <button className="gallery-lightbox__close" onClick={closeLightbox} aria-label="Close">
              <FaTimes />
            </button>
            <button
              className="gallery-lightbox__nav gallery-lightbox__nav--prev"
              onClick={() => navigateLightbox(-1)}
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>
            <button
              className="gallery-lightbox__nav gallery-lightbox__nav--next"
              onClick={() => navigateLightbox(1)}
              aria-label="Next"
            >
              <FaChevronRight />
            </button>
            <div className="gallery-lightbox__caption">
              <p>{filtered[lightbox.index].alt}</p>
              <span>{lightbox.index + 1} / {filtered.length}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

