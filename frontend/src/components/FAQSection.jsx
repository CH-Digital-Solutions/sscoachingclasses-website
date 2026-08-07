import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { faqs } from '../data/faqs';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="faq-sec section" id="faq">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-head__title">Frequently Asked <em>Questions</em></h2>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <div key={i} className={`faq-item${open ? ' faq-item--open' : ''}`}>
                <button className="faq-q" onClick={() => setOpenIdx(open ? -1 : i)}>
                  <span className="faq-q__text">{f.question}</span>
                  <span className={`faq-q__icon${open ? ' faq-q__icon--open' : ''}`}><FaPlus /></span>
                </button>
                {open && <div className="faq-a"><p>{f.answer}</p></div>}
              </div>
            );
          })}
        </div>
        <div className="faq-foot">
          <span>Still have questions?</span>
          <a href="#contact" className="btn btn--primary btn--sm">Contact Us</a>
        </div>
      </div>
    </section>
  );
}
