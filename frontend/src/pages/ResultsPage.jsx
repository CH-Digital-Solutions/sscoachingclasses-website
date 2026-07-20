import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaTrophy, FaMedal, FaStar, FaChevronDown } from 'react-icons/fa';
import { achievementsByYear, resultStats } from '../data/results';

export default function ResultsPage() {
  // Get unique years
  const years = [...new Set(achievementsByYear.map(a => a.year))].sort((a, b) => b.localeCompare(a));
  const [activeYear, setActiveYear] = useState(years[0]);

  const yearResults = achievementsByYear.filter(a => a.year === activeYear);

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

      {/* Year Tabs */}
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

          {/* Results by Category */}
          <div className="rp-categories">
            {yearResults.map((cat, idx) => (
              <div key={idx} className="rp-category">
                <div className="rp-category__header">
                  <h2 className="rp-category__title">
                    <FaTrophy /> {cat.category} Results — {cat.year}
                  </h2>
                  <span className="rp-category__count">{cat.results.length} Students</span>
                </div>

                {cat.results.length > 0 ? (
                  <div className="rp-results-table">
                    <div className="rp-table-header">
                      <span className="rp-th rp-th--rank">Rank</span>
                      <span className="rp-th rp-th--photo">Photo</span>
                      <span className="rp-th rp-th--name">Student Name</span>
                      <span className="rp-th rp-th--school">School / College</span>
                      <span className="rp-th rp-th--score">Score</span>
                    </div>
                    {cat.results.map((student, i) => (
                      <div key={i} className={`rp-table-row${i < 3 ? ' rp-table-row--top' : ''}`}>
                        <span className="rp-td rp-td--rank">
                          {i < 3 ? (
                            <span className={`rp-rank-badge rp-rank-badge--${i + 1}`}>
                              <FaStar /> {student.rank}
                            </span>
                          ) : (
                            <span className="rp-rank-num">{student.rank}</span>
                          )}
                        </span>
                        <span className="rp-td rp-td--photo">
                          <span className={`rp-avatar${i < 3 ? ' rp-avatar--top' : ''}`}>
                            {student?.name ? student.name.split(' ').filter(Boolean).map(n => n[0]).slice(0, 2).join('') : '?'}
                          </span>
                        </span>
                        <span className="rp-td rp-td--name">{student.name}</span>
                        <span className="rp-td rp-td--school">{student.school}</span>
                        <span className="rp-td rp-td--score">
                          <span className={`rp-score${i < 3 ? ' rp-score--top' : ''}`}>{student.percentage}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rp-no-results">
                    <p>Results will be updated soon.</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
