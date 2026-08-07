import { FaGraduationCap, FaCheckCircle, FaMoneyBillWave, FaComments, FaMicrophone, FaGlobeAmericas, FaBookOpen, FaQuoteLeft } from 'react-icons/fa';

export default function EnglishSpeakingCourseSection({ onEnquire }) {
  return (
    <section className="eng-sec section" id="english-speaking">
      <div className="eng-bg-pattern" />
      <div className="eng-bg-letters">
        <span className="eng-float-letter eng-float-letter--1">A</span>
        <span className="eng-float-letter eng-float-letter--2">B</span>
        <span className="eng-float-letter eng-float-letter--3">C</span>
        <span className="eng-float-letter eng-float-letter--4">"</span>
        <span className="eng-float-letter eng-float-letter--5">Aa</span>
      </div>
      <div className="wrap relative-z">
        <div className="section-head">
          <span className="eyebrow"><FaComments /> Special Program</span>
          <h2 className="section-head__title">SS English Speaking <em>Course</em></h2>
          <p className="section-head__desc">
            Master spoken English with our specialized course designed to build confidence, vocabulary, and fluent communication skills.
          </p>
        </div>

        {/* Speech Bubble Quote */}
        <div className="eng-quote-bubble">
          <FaQuoteLeft className="eng-quote-icon" />
          <p>"Speak English with confidence — the world is waiting to hear your voice."</p>
          <span className="eng-quote-author">— Prof. Satish, Lead Instructor</span>
        </div>

        {/* Main Content Grid */}
        <div className="eng-content-grid">



          {/* Cards Grid */}
          <div className="eng-cards-grid">
            {/* Fee Structure Card */}
            <div className="eng-card eng-card--fees">
              <div className="eng-card__header">
                <FaMoneyBillWave /> Fee Structure
              </div>
              <div className="eng-card__body">
                <div className="eng-fee-row">
                  <span className="eng-fee-label">Monthly</span>
                  <span className="eng-fee-value">â‚¹999</span>
                </div>
                <div className="eng-fee-row">
                  <span className="eng-fee-label">6 Months (Installments)</span>
                  <span className="eng-fee-value">â‚¹9,000</span>
                </div>
                <div className="eng-fee-row">
                  <span className="eng-fee-label">6 Months (One-time)</span>
                  <span className="eng-fee-value eng-fee-value--save">â‚¹6,000 <small>Save â‚¹3,000</small></span>
                </div>
                <div className="eng-fee-row">
                  <span className="eng-fee-label">Yearly (Installments)</span>
                  <span className="eng-fee-value">â‚¹12,000</span>
                </div>
                <div className="eng-fee-row eng-fee-row--best">
                  <span className="eng-fee-label">Yearly (One-time) <span className="eng-best-badge">BEST VALUE</span></span>
                  <span className="eng-fee-value eng-fee-value--save">â‚¹9,000 <small>Save â‚¹3,000</small></span>
                </div>
                <div className="eng-fee-row">
                  <span className="eng-fee-label">Admission Fees</span>
                  <span className="eng-fee-value">â‚¹999</span>
                </div>
                <p className="eng-fee-note">Notes (â‚¹600), Bag (â‚¹300), T-Shirt (â‚¹300)</p>
              </div>
            </div>

            {/* Why Join Card */}
            <div className="eng-card eng-card--why">
              <div className="eng-card__header">
                <FaGraduationCap /> Why Join Us?
              </div>
              <div className="eng-card__body">
                <ul className="eng-why-list">
                  <li><FaCheckCircle className="eng-check" /> Guaranteed improvement in fluency</li>
                  <li><FaCheckCircle className="eng-check" /> Daily conversational practice</li>
                  <li><FaCheckCircle className="eng-check" /> Professional & experienced trainers</li>
                  <li><FaCheckCircle className="eng-check" /> Learn with Prof. Satish</li>
                  <li><FaCheckCircle className="eng-check" /> Small batch sizes for personal attention</li>
                  <li><FaCheckCircle className="eng-check" /> Grammar, vocabulary & pronunciation</li>
                </ul>
                <button
                  onClick={() => onEnquire('English Speaking Course')}
                  className="btn btn--primary eng-cta"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
