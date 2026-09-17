import { FaInstagram, FaYoutube, FaGoogle, FaArrowRight, FaStar, FaPlay, FaHeart } from 'react-icons/fa';

export default function SocialMediaSection() {
  const channels = [
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@ssclassesprofsatish',
      url: 'https://www.instagram.com/ssclassesprofsatish?utm_source=qr&igsh=bzljYXYwOTU3azg=',
      icon: <FaInstagram />,
      badge: 'Reels & Life at SS',
      badgeIcon: <FaHeart />,
      tagline: 'Connect on Instagram',
      description: 'Get daily exam motivation, classroom moments, toppers celebration reels, and important updates.',
      cta: 'Follow on Instagram',
      themeClass: 'social-card--instagram'
    },
    {
      id: 'youtube',
      name: 'YouTube',
      handle: '@ssclassesprof.satish8939',
      url: 'https://www.youtube.com/@ssclassesprof.satish8939',
      icon: <FaYoutube />,
      badge: 'Free Video Lectures',
      badgeIcon: <FaPlay />,
      tagline: 'Learn on YouTube',
      description: 'Watch in-depth concept explanations, board paper solutions, study strategies, and live sessions.',
      cta: 'Subscribe Channel',
      themeClass: 'social-card--youtube'
    },
    {
      id: 'google',
      name: 'Google Reviews',
      handle: '4.9 ★ Rating (50+ Reviews)',
      url: 'https://local.google.com/place?placeid=ChIJOyzrk6TP5zsRmI_1t4OSUQ8&utm_medium=noren&utm_source=gbp&utm_campaign=2026',
      icon: <FaGoogle />,
      badge: '50+ 5-Star Reviews',
      badgeIcon: <FaStar />,
      tagline: 'Verified Google Rating',
      description: 'Check authentic reviews from students and parents across Mumbai, or share your own experience.',
      cta: 'Read & Review on Google',
      themeClass: 'social-card--google'
    }
  ];

  return (
    <section className="social-sec section" id="community">
      <div className="wrap">
        <div className="section-head text-center">
          <span className="eyebrow">Connect With Us</span>
          <h2 className="section-head__title">
            Join Our <em>Digital Community</em>
          </h2>
          <p className="section-head__desc">
            Stay updated with free lectures, study tips, student achievements, and authentic parent reviews across our official platforms.
          </p>
        </div>

        <div className="social-grid">
          {channels.map((ch) => (
            <a
              key={ch.id}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-card ${ch.themeClass}`}
              aria-label={`${ch.name} - ${ch.handle}`}
            >
              <div className="social-card__glow" aria-hidden="true" />
              <div className="social-card__top">
                <div className="social-card__icon-box">
                  {ch.icon}
                </div>
                <div className="social-card__badge">
                  {ch.badgeIcon} <span>{ch.badge}</span>
                </div>
              </div>

              <div className="social-card__body">
                <h3 className="social-card__title">{ch.name}</h3>
                <p className="social-card__handle">{ch.handle}</p>
                <p className="social-card__desc">{ch.description}</p>
              </div>

              <div className="social-card__footer">
                <span className="social-card__btn">
                  {ch.cta} <FaArrowRight className="social-card__arrow" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
