import { useState, useEffect } from 'react';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const heroImages = [
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80',
  'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1920&q=80',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&q=80',
];

export default function HeroSection({ onBookDemo }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(p => (p + 1) % heroImages.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-carousel-full">
        {heroImages.map((img, i) => (
          <div 
            key={i} 
            className={`hero-slide${i === current ? ' active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>


      <div className="carousel-nav-full">
        <button onClick={() => setCurrent(p => (p - 1 + heroImages.length) % heroImages.length)} aria-label="Previous"><FaChevronLeft /></button>
        <button onClick={() => setCurrent(p => (p + 1) % heroImages.length)} aria-label="Next"><FaChevronRight /></button>
      </div>
      <div className="carousel-dots-full">
        {heroImages.map((_, i) => (
          <span key={i} className={`dot${i === current ? ' active' : ''}`} onClick={() => setCurrent(i)} />
        ))}
      </div>
    </section>
  );
}
