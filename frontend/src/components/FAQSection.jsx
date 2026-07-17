import { useState } from 'react';
import { faqs } from '../data/faqs';


export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="faq-header">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Frequently Asked <span className="accent-text">Questions</span></h2>
          <p className="section-subtitle">Everything parents and students ask us — answered.</p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item${openIdx === i ? ' open' : ''}`}>
              <button className="faq-question" onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                <span>{f.question}</span>
                <span className="faq-toggle">{openIdx === i ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{f.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="faq-cta">
          <span>Still have questions?</span>
          <a href="#contact" className="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </section>
  );
}
