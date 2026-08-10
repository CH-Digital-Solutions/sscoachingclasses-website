import { Link } from 'react-router-dom';
import { FaImages, FaArrowRight } from 'react-icons/fa';
import { galleryImages } from '../data/gallery';

export default function GallerySection() {
  // Show only first 6 images on the landing page
  const preview = galleryImages.slice(0, 6);

  return (
    <section className="gallery-sec section" id="gallery">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow"><FaImages /> Photo Gallery</span>
          <h2 className="section-head__title">Life at <em>SS Classes</em></h2>
          <p className="section-head__desc">
            A glimpse into our vibrant learning environment, events, and campus life.
          </p>
        </div>

        {/* View All */}
        <div className="gallery-filter-bar" style={{ justifyContent: 'flex-end' }}>
          <Link to="/gallery" className="btn btn--primary gallery-view-all-btn">
            View All <FaArrowRight />
          </Link>
        </div>

        {/* Image Grid (preview) */}
        <div className="gallery-grid">
          {preview.map((img, i) => (
            <div
              key={img.id}
              className={`gallery-item${i % 5 === 0 ? ' gallery-item--wide' : ''}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
              <div className="gallery-item__overlay">
                <span className="gallery-item__caption">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

