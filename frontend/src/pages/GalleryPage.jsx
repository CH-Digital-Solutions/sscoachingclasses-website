import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaTimes, FaChevronLeft, FaChevronRight, FaSearch, FaChevronDown, FaChevronUp, FaCalendarAlt, FaPlus } from 'react-icons/fa';
import { galleryImages } from '../data/gallery';

export default function GalleryPage() {
  // Only the first section is open by default, all others remain closed
  const [openSections, setOpenSections] = useState({
    'teachers-day-2026': true
  });
  // Track photo display limits per section (10 photos at a time)
  const [sectionLimits, setSectionLimits] = useState({
    'teachers-day-2026': 10
  });
  const [lightbox, setLightbox] = useState({ open: false, index: 0, list: [] });

  const toggleSection = (sectionId) => {
    setOpenSections(prev => {
      const willBeOpen = !prev[sectionId];
      if (willBeOpen && !sectionLimits[sectionId]) {
        // Initialize with exactly 10 photos on first open
        setSectionLimits(current => ({ ...current, [sectionId]: 10 }));
      }
      return {
        ...prev,
        [sectionId]: willBeOpen
      };
    });
  };

  const handleLoadMore = (sectionId) => {
    setSectionLimits(prev => ({
      ...prev,
      [sectionId]: (prev[sectionId] || 10) + 10
    }));
  };

  const teachersDayPhotos = galleryImages.filter(img => img.category === 'teachers-day-2026');
  const othersPhotos = galleryImages.filter(img => img.category === 'others' || !img.category);

  const sections = [
    {
      id: 'teachers-day-2026',
      title: "Teacher's Day 2026",
      photos: teachersDayPhotos,
      emptyMessage: "No photos uploaded yet for Teacher's Day 2026. Photos will appear here once added."
    },
    {
      id: 'others',
      title: "Others",
      photos: othersPhotos,
      emptyMessage: "No photos in this category yet."
    }
  ];

  const openLightbox = (index, list) => {
    setLightbox({ open: true, index, list });
  };

  const closeLightbox = () => {
    setLightbox({ open: false, index: 0, list: [] });
  };

  const navigateLightbox = (dir) => {
    setLightbox(prev => {
      if (!prev.list.length) return prev;
      return {
        ...prev,
        index: (prev.index + dir + prev.list.length) % prev.list.length
      };
    });
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
    <div className="gallery-page-container">
      <div className="wrap">
        {/* Top Header */}
        <div className="gallery-page-header">
          <Link to="/" className="gallery-back-link">
            <FaArrowLeft /> Back to Home
          </Link>
          <h1 className="gallery-page-title">Photo Gallery</h1>
        </div>

        {/* Category Accordion Cards */}
        <div className="gallery-categories-list">
          {sections.map((sec) => {
            const isOpen = !!openSections[sec.id];
            const currentLimit = sectionLimits[sec.id] || 10;
            // Only render photos into the DOM if the section is opened by the user
            const displayedPhotos = isOpen ? sec.photos.slice(0, currentLimit) : [];
            const hasMore = isOpen && sec.photos.length > currentLimit;

            return (
              <div key={sec.id} className="gallery-category-card">
                <button
                  type="button"
                  className="gallery-category-header"
                  onClick={() => toggleSection(sec.id)}
                  aria-expanded={isOpen}
                >
                  <div className="gallery-category-title-wrap">
                    <span className="gallery-category-title">{sec.title}</span>
                    <span className="gallery-category-badge">{sec.photos.length} photos</span>
                  </div>
                  <span className="gallery-category-chevron" aria-hidden="true">
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>

                {isOpen && (
                  <div className="gallery-category-content">
                    {sec.photos.length > 0 ? (
                      <>
                        <div className="gallery-photo-grid">
                          {displayedPhotos.map((img, i) => (
                            <div
                              key={img.id}
                              className="gallery-photo-item"
                              onClick={() => openLightbox(i, sec.photos)}
                            >
                              <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
                              <div className="gallery-photo-overlay">
                                <div className="gallery-photo-zoom">
                                  <FaSearch />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {hasMore && (
                          <div className="gallery-load-more-wrap">
                            <button
                              type="button"
                              className="gallery-load-more-btn"
                              onClick={() => handleLoadMore(sec.id)}
                            >
                              <FaPlus style={{ fontSize: '0.8rem' }} /> Load More Photos ({sec.photos.length - currentLimit} remaining)
                            </button>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="gallery-category-empty">
                        <div className="gallery-category-empty__icon">
                          <FaCalendarAlt />
                        </div>
                        <p className="gallery-category-empty__text">{sec.emptyMessage}</p>
                        <span className="gallery-category-empty__pill">Empty Section</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox.open && lightbox.list[lightbox.index] && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <div className="gallery-lightbox__inner" onClick={e => e.stopPropagation()}>
            <img
              src={lightbox.list[lightbox.index].src}
              alt={lightbox.list[lightbox.index].alt}
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
              <p>{lightbox.list[lightbox.index].alt}</p>
              <span>{lightbox.index + 1} / {lightbox.list.length}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
