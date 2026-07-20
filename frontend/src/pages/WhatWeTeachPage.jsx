import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBook, FaGraduationCap, FaCheck, FaArrowRight, FaUsers, FaClock } from 'react-icons/fa';
import { programDetails } from '../data/whatWeTeach';

export default function WhatWeTeachPage({ onEnquire }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'School', 'College'];

  const categoryIcons = {
    School: <FaBook />,
    College: <FaGraduationCap />
  };

  const filtered = activeCategory === 'All'
    ? programDetails
    : programDetails.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero Banner */}
      <section className="wt-hero">
        <div className="grid-pattern" />
        <div className="wt-hero__glow wt-hero__glow--a" />
        <div className="wt-hero__glow wt-hero__glow--b" />
        <div className="wrap">
          <Link to="/" className="wt-back-link">
            <FaArrowLeft /> Back to Home
          </Link>
          <div className="wt-hero__content">
            <span className="eyebrow">Complete Curriculum</span>
            <h1 className="wt-hero__title">Everything We <em>Teach</em></h1>
            <p className="wt-hero__desc">
              Explore our comprehensive range of academic programs across School and College levels.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="wt-filters">
        <div className="wrap">
          <div className="wt-filter-row">
            {categories.map(cat => (
              <button
                key={cat}
                className={`wt-filter-btn${activeCategory === cat ? ' wt-filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat !== 'All' && <span className="wt-filter-icon">{categoryIcons[cat]}</span>}
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="wt-programs section">
        <div className="wrap">
          <div className="wt-programs-grid">
            {filtered.map(program => (
              <div key={program.id} className="wt-card" style={{ '--card-accent': program.color }}>
                <div className="wt-card__header">
                  <span className="wt-card__category">{program.category}</span>
                  <h2 className="wt-card__title">{program.title}</h2>
                  <p className="wt-card__tagline">{program.tagline}</p>
                </div>

                <div className="wt-card__body">
                  <p className="wt-card__desc">{program.description}</p>

                  <div className="wt-card__section">
                    <h3 className="wt-card__section-title">
                      <FaBook /> Subjects Covered
                    </h3>
                    <div className="wt-card__subjects">
                      {program.subjects.map((sub, i) => (
                        <span key={i} className="wt-card__subject-chip">{sub}</span>
                      ))}
                    </div>
                  </div>

                  <div className="wt-card__section">
                    <h3 className="wt-card__section-title">
                      <FaCheck /> Key Highlights
                    </h3>
                    <ul className="wt-card__highlights">
                      {program.highlights.map((h, i) => (
                        <li key={i}>
                          <span className="wt-card__check"><FaCheck /></span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="wt-card__meta-grid">
                    <div className="wt-card__meta-item">
                      <FaUsers className="wt-card__meta-icon" />
                      <div>
                        <span className="wt-card__meta-label">Batch Size</span>
                        <span className="wt-card__meta-value">{program.batchSize}</span>
                      </div>
                    </div>
                    <div className="wt-card__meta-item">
                      <FaClock className="wt-card__meta-icon" />
                      <div>
                        <span className="wt-card__meta-label">Duration</span>
                        <span className="wt-card__meta-value">{program.duration}</span>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="wt-card__footer">
                  <button className="btn btn--primary" onClick={() => onEnquire(program.title)}>
                    Enquire Now <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
