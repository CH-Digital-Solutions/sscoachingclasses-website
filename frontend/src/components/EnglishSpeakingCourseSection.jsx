import { FaGraduationCap, FaCheckCircle, FaMoneyBillWave, FaCalendarAlt } from 'react-icons/fa';

export default function EnglishSpeakingCourseSection({ onEnquire }) {
  return (
    <section className="section" id="english-speaking">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Special Program</span>
          <h2 className="section-head__title">SS English Speaking <em>Course</em></h2>
        </div>
        
        <div className="english-course-container" style={{
            background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(99, 102, 241, 0.05) 100%)',
            borderRadius: '24px',
            padding: '40px',
            border: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
        }}>
          
          <div className="english-course-header" style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--primary-color)', color: 'white', padding: '8px 16px', borderRadius: '30px', fontWeight: 'bold', marginBottom: '20px', fontSize: '0.9rem' }}>
              <FaCheckCircle /> One Week Demo Free!
            </div>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Master spoken English with our specialized course designed to build confidence, vocabulary, and fluent communication skills.
            </p>
          </div>

          <div className="english-course-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {/* Fees Structure */}
            <div className="course-card-inner" style={{
              background: 'var(--bg-white)',
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid var(--border-color)'
            }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-main)' }}>
                <FaMoneyBillWave color="var(--primary-color)" /> Fee Structure
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                  <span style={{ fontWeight: '500' }}>Monthly</span>
                  <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>₹2,000</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                  <span style={{ fontWeight: '500' }}>6 Months (Installments)</span>
                  <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>₹8,000</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                  <span style={{ fontWeight: '500' }}>6 Months (One-time)</span>
                  <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>₹6,000</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                  <span style={{ fontWeight: '500' }}>Yearly (Installments)</span>
                  <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>₹12,000</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: '500' }}>Yearly (One-time)</span>
                  <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>₹9,000</span>
                </li>
              </ul>
              <div style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                * Notes: ₹500 Extra
              </div>
            </div>

            {/* Course Features */}
            <div className="course-card-inner" style={{
              background: 'var(--bg-white)',
              padding: '24px',
              borderRadius: '16px',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-main)' }}>
                  <FaGraduationCap color="var(--primary-color)" /> Why Join Us?
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-muted)' }}>
                  <li style={{ display: 'flex', gap: '10px' }}><FaCheckCircle style={{ color: 'var(--primary-color)', marginTop: '4px', flexShrink: 0 }} /> Guaranteed improvement in fluency</li>
                  <li style={{ display: 'flex', gap: '10px' }}><FaCheckCircle style={{ color: 'var(--primary-color)', marginTop: '4px', flexShrink: 0 }} /> Daily conversational practice</li>
                  <li style={{ display: 'flex', gap: '10px' }}><FaCheckCircle style={{ color: 'var(--primary-color)', marginTop: '4px', flexShrink: 0 }} /> Professional & experienced trainers</li>
                  <li style={{ display: 'flex', gap: '10px' }}><FaCheckCircle style={{ color: 'var(--primary-color)', marginTop: '4px', flexShrink: 0 }} /> Learn with Prof. Satish</li>
                </ul>
              </div>
              
              <button 
                onClick={onEnquire}
                className="btn btn--primary" 
                style={{ width: '100%', marginTop: '24px', justifyContent: 'center' }}>
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
