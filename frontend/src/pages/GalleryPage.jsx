import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaImages, FaArrowLeft, FaTimes, FaChevronLeft, FaChevronRight, FaSearch } from 'react-icons/fa';
import { galleryImages } from '../data/gallery';
import useProgressiveLoad from '../hooks/useProgressiveLoad';

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  // Progressive loading: show 20 initially, load 16 more per scroll
  const { visibleItems: filtered, sentinelRef, hasMore } = useProgressiveLoad(galleryImages, 20, 16);

  const openLightbox = (index) => setLightbox({ open: true, index });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });
  const navigateLightbox = (dir) => {
    // Navigate through ALL images (not just visible), so lightbox can explore the full gallery
    setLightbox(prev => ({
      ...prev,
      index: (prev.index + dir + galleryImages.length) % galleryImages.length
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
            <span className="gp-showing">{galleryImages.length} photos</span>
          </div>

          {/* Masonry Grid */}
          <div className="gp-grid">
            {filtered.map((img, i) => (
              <div
                key={img.id}
                className={`gp-item${i % 7 === 0 ? ' gp-item--tall' : ''}${i % 5 === 2 ? ' gp-item--wide' : ''}`}
                onClick={() => openLightbox(i)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
                <div className="gp-item__overlay">
                  <div className="gp-item__zoom"><FaSearch /></div>
                  <div className="gp-item__info">
                    <span className="gp-item__caption">{img.alt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll sentinel for progressive loading */}
          {hasMore && (
            <div ref={sentinelRef} className="gp-load-more">
              <div className="gp-load-spinner" />
              <span>Loading more photos...</span>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox.open && galleryImages[lightbox.index] && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <div className="gallery-lightbox__inner" onClick={e => e.stopPropagation()}>
            <img
              src={galleryImages[lightbox.index].src}
              alt={galleryImages[lightbox.index].alt}
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
              <p>{galleryImages[lightbox.index].alt}</p>
              <span>{lightbox.index + 1} / {galleryImages.length}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
