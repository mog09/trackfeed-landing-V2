'use client'

export default function LandingPage() {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #fff;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          color: #1D1D1F;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          width: 100%;
          max-width: 100%;
        }
        html {
          overflow-x: hidden;
          width: 100%;
        }
        section, div, nav, footer {
          max-width: 100%;
        }

        /* NAV */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          height: 52px;
          display: flex; justify-content: space-between; align-items: center;
          padding: 0 20px;
          background: rgba(255,255,255,0.88);
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          border-bottom: 0.5px solid rgba(0,0,0,0.12);
        }
        .nav-logo { font-size: 18px; font-weight: 700; color: #1D1D1F; letter-spacing: -0.5px; }
        .nav-links { display: none; }
        .nav-link { font-size: 14px; font-weight: 400; color: #555; text-decoration: none; }
        .nav-actions { display: flex; gap: 10px; align-items: center; }
        .nav-login { font-size: 14px; font-weight: 500; color: #007AFF; text-decoration: none; }
        .nav-cta {
          padding: 8px 18px;
          background: #007AFF; color: #fff;
          border: none; border-radius: 980px;
          font-size: 14px; font-weight: 500;
          cursor: pointer; text-decoration: none;
        }

        /* HERO */
        .hero {
          padding: 100px 20px 70px;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        .hero-eyebrow {
          display: inline-block;
          font-size: 12px; font-weight: 500;
          letter-spacing: 0.5px;
          color: #007AFF;
          background: rgba(0,122,255,0.08);
          padding: 6px 14px; border-radius: 100px;
          margin-bottom: 24px;
        }
        .hero-title {
          font-size: clamp(36px, 8vw, 72px);
          font-weight: 800;
          letter-spacing: -2px;
          line-height: 1.05;
          color: #1D1D1F;
          margin-bottom: 20px;
        }
        .hero-title span { color: #007AFF; }
        .hero-sub {
          font-size: clamp(16px, 2.5vw, 19px);
          font-weight: 400;
          color: #6E6E73; line-height: 1.6;
          max-width: 500px; margin: 0 auto 36px;
        }
        .hero-actions { display: flex; gap: 12px; justify-content: center; align-items: center; flex-wrap: wrap; }
        .btn-primary {
          padding: 14px 28px;
          background: #007AFF; color: #fff;
          border: none; border-radius: 980px;
          font-size: 16px; font-weight: 600;
          cursor: pointer; text-decoration: none;
          display: inline-block;
          letter-spacing: -0.2px;
        }
        .btn-ghost {
          padding: 14px 28px;
          background: transparent; color: #007AFF;
          border: none; border-radius: 980px;
          font-size: 16px; font-weight: 500;
          cursor: pointer; text-decoration: none;
          display: inline-block;
        }
        .hero-note { font-size: 12px; color: #AEAEB2; margin-top: 16px; }

        /* STATS */
        .stats-bar {
          background: #F5F5F7;
          border-top: 0.5px solid #D2D2D7;
          border-bottom: 0.5px solid #D2D2D7;
          padding: 24px 20px;
          overflow-x: hidden;
          width: 100%;
        }
        .stats-inner {
          max-width: 900px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .stat { text-align: center; padding: 12px; }
        .stat-num { font-size: 32px; font-weight: 700; letter-spacing: -1.5px; color: #1D1D1F; line-height: 1; margin-bottom: 6px; }
        .stat-num span { color: #007AFF; }
        .stat-label { font-size: 13px; color: #6E6E73; font-weight: 400; }

        /* MOCKUP */
        .mockup-section {
          padding: 70px 20px;
          max-width: 1100px; margin: 0 auto;
        }
        .mockup-text { margin-bottom: 48px; }
        .mockup-text .tag { font-size: 12px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #007AFF; margin-bottom: 14px; }
        .mockup-text h2 { font-size: clamp(28px, 5vw, 40px); font-weight: 700; letter-spacing: -1px; line-height: 1.1; margin-bottom: 14px; color: #1D1D1F; }
        .mockup-text p { font-size: 15px; color: #6E6E73; line-height: 1.65; margin-bottom: 14px; }
        .tg-download { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 8px; }
        .tg-btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px; border-radius: 10px; font-size: 13px; font-weight: 600; text-decoration: none; }
        .tg-btn-ios { background: #000; color: #fff; }
        .tg-btn-android { background: #01875F; color: #fff; }

        .phone-wrap { display: flex; justify-content: center; width: 100%; overflow: hidden; }
        .phone {
          background: #1C1C1E; border-radius: 44px; padding: 16px; width: min(280px, 85vw);
          box-shadow: 0 0 0 1px rgba(255,255,255,0.08), 0 30px 60px rgba(0,0,0,0.2);
        }
        .phone-screen { background: #000; border-radius: 28px; overflow: hidden; }
        .phone-notch-bar { background: #1C1C1E; height: 24px; display: flex; align-items: center; justify-content: center; }
        .phone-notch { width: 80px; height: 14px; background: #000; border-radius: 0 0 10px 10px; }
        .tg-header { background: #1C1C1E; padding: 10px 14px; display: flex; align-items: center; gap: 10px; border-bottom: 0.5px solid rgba(255,255,255,0.06); }
        .tg-avatar { width: 30px; height: 30px; background: #007AFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; color: #fff; flex-shrink: 0; }
        .tg-name { color: #fff; font-size: 13px; font-weight: 600; }
        .tg-status { color: #48484A; font-size: 10px; }
        .tg-body { background: #000; padding: 14px 10px; }
        .msg-bubble { background: #1C1C1E; border-radius: 16px 16px 16px 4px; padding: 12px 14px; font-size: 11.5px; line-height: 1.65; color: #E8E8ED; }
        .msg-label { color: #007AFF; font-weight: 700; font-size: 10px; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 8px; }
        .msg-horse { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 8px; letter-spacing: -0.3px; }
        .msg-row { display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 0.5px solid rgba(255,255,255,0.06); }
        .msg-row:last-of-type { border-bottom: none; }
        .msg-key { color: #636366; font-size: 11px; }
        .msg-val { color: #E8E8ED; font-size: 11px; font-weight: 500; text-align: right; max-width: 130px; }
        .msg-sales { margin-top: 8px; padding-top: 8px; border-top: 0.5px solid rgba(255,255,255,0.08); }
        .msg-sales-label { color: #007AFF; font-size: 10px; font-weight: 700; margin-bottom: 4px; }
        .msg-sales-row { color: #8E8E93; font-size: 10px; line-height: 1.5; }
        .msg-filters { margin-top: 8px; padding-top: 8px; border-top: 0.5px solid rgba(255,255,255,0.08); }
        .msg-filter-label { color: #48484A; font-size: 10px; margin-bottom: 5px; }
        .msg-chip { display: inline-block; background: rgba(0,122,255,0.2); color: #007AFF; padding: 2px 7px; border-radius: 4px; font-size: 10px; font-weight: 600; margin: 2px 2px 0 0; }
        .msg-time { color: #48484A; font-size: 9px; text-align: right; margin-top: 6px; }

        /* HOW IT WORKS */
        .how-section { background: #F5F5F7; padding: 70px 20px; }
        .how-inner { max-width: 1000px; margin: 0 auto; }
        .section-tag { font-size: 12px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #007AFF; margin-bottom: 14px; }
        .section-title { font-size: clamp(28px, 5vw, 40px); font-weight: 700; letter-spacing: -1px; line-height: 1.1; color: #1D1D1F; margin-bottom: 40px; }
        .steps { display: flex; flex-direction: column; gap: 2px; }
        .step { background: #fff; padding: 28px 24px; border-radius: 0; }
        .step:first-child { border-radius: 16px 16px 0 0; }
        .step:last-child { border-radius: 0 0 16px 16px; }
        .step-num { font-size: 12px; font-weight: 600; color: #007AFF; letter-spacing: 0.5px; margin-bottom: 14px; }
        .step-title { font-size: 18px; font-weight: 600; letter-spacing: -0.3px; margin-bottom: 8px; color: #1D1D1F; }
        .step-desc { font-size: 14px; color: #6E6E73; line-height: 1.6; }

        /* FILTERS */
        .filters-section { padding: 70px 20px; max-width: 1000px; margin: 0 auto; }
        .filter-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 32px; width: 100%; overflow: hidden; }
        .ftag { padding: 8px 16px; background: #F5F5F7; border-radius: 100px; font-size: 13px; font-weight: 500; color: #3A3A3C; border: 0.5px solid #D2D2D7; cursor: default; }
        .ftag.highlight { background: #007AFF; color: #fff; border-color: #007AFF; }
        .ftag.sales { background: #F3E5FF; color: #5B1FBF; border-color: #D4A8FF; }

        /* WHO */
        .who-section { background: #000; padding: 70px 20px; color: #fff; }
        .who-inner { max-width: 1000px; margin: 0 auto; }
        .who-inner .section-tag { color: #0A84FF; }
        .who-inner .section-title { color: #fff; }
        .who-grid { display: flex; flex-direction: column; gap: 2px; }
        .who-card { background: #1C1C1E; padding: 28px 24px; }
        .who-card:first-child { border-radius: 16px 16px 0 0; }
        .who-card:last-child { border-radius: 0 0 16px 16px; }
        .who-tag { font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #0A84FF; margin-bottom: 10px; }
        .who-title { font-size: 17px; font-weight: 600; letter-spacing: -0.3px; margin-bottom: 8px; color: #fff; }
        .who-desc { font-size: 14px; color: #8E8E93; line-height: 1.6; }

        /* PRICING */
        .pricing-section { padding: 70px 20px; max-width: 900px; margin: 0 auto; }
        .pricing-section .section-title { text-align: center; }
        .pricing-section .section-tag { text-align: center; }
        .pricing-subtitle { font-size: 16px; color: '#6E6E73'; text-align: center; margin-bottom: 40px; }
        .pricing-grid { display: flex; flex-direction: column; gap: 16px; margin-top: 40px; width: 100%; }
        .pricing-card { border: 0.5px solid #D2D2D7; border-radius: 20px; padding: 28px 24px; position: relative; background: #fff; width: 100%; box-sizing: border-box; }
        .pricing-card.featured { border-color: #007AFF; border-width: 1.5px; background: #F5F9FF; }
        .pricing-card.team-card { border-color: #1D1D1F; background: #FAFAFA; }
        .popular-badge { position: absolute; top: -13px; left: 50%; transform: translateX(-50%); background: #007AFF; color: #fff; padding: 4px 16px; border-radius: 100px; font-size: 11px; font-weight: 600; letter-spacing: 0.5px; white-space: nowrap; }
        .plan-name { font-size: 12px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #6E6E73; margin-bottom: 16px; }
        .plan-price { font-size: 48px; font-weight: 700; letter-spacing: -2px; line-height: 1; color: #1D1D1F; margin-bottom: 4px; }
        .plan-period { font-size: 14px; color: #6E6E73; margin-bottom: 6px; }
        .plan-saving { font-size: 13px; color: #34C759; font-weight: 600; margin-bottom: 24px; }
        .plan-divider { height: 0.5px; background: #D2D2D7; margin-bottom: 20px; }
        .plan-features { list-style: none; margin-bottom: 28px; }
        .plan-features li { font-size: 14px; color: #3A3A3C; padding: 8px 0; border-bottom: 0.5px solid #F2F2F7; display: flex; gap: 10px; align-items: flex-start; }
        .plan-features li:last-child { border-bottom: none; }
        .check { color: #007AFF; font-weight: 700; flex-shrink: 0; font-size: 14px; }
        .plan-btn { display: block; width: 100%; padding: 15px; border-radius: 980px; font-size: 16px; font-weight: 600; text-align: center; text-decoration: none; cursor: pointer; border: none; font-family: inherit; letter-spacing: -0.2px; }
        .plan-btn-blue { background: #007AFF; color: #fff; }
        .plan-btn-dark { background: #1D1D1F; color: #fff; }
        .plan-btn-black { background: #1D1D1F; color: #fff; }
        .enterprise-bar { margin-top: 16px; padding: 18px 20px; background: #F5F5F7; border-radius: 14px; display: flex; flex-direction: column; gap: 12px; width: 100%; box-sizing: border-box; }
        .enterprise-text { font-size: 15px; font-weight: 600; color: #1D1D1F; }
        .enterprise-sub { font-size: 13px; color: #6E6E73; margin-top: 2px; }
        .enterprise-btn { padding: 10px 20px; background: #007AFF; color: #fff; border-radius: 980px; font-size: 14px; font-weight: 600; text-decoration: none; white-space: nowrap; }
        .pricing-note { font-size: 13px; color: #AEAEB2; margin-top: 20px; text-align: center; }

        /* SUPPORT */
        .support-section { background: #F5F5F7; padding: 70px 20px; }
        .support-inner { max-width: 700px; margin: 0 auto; text-align: center; }
        .support-title { font-size: clamp(24px, 4vw, 32px); font-weight: 700; letter-spacing: -0.8px; color: #1D1D1F; margin-bottom: 12px; }
        .support-desc { font-size: 16px; color: #6E6E73; line-height: 1.6; margin-bottom: 28px; }
        .support-cards { display: flex; flex-direction: column; gap: 12px; text-align: left; width: 100%; }
        .support-card { background: #fff; border-radius: 14px; padding: 20px 22px; display: flex; align-items: flex-start; gap: 14px; box-shadow: 0 1px 0 rgba(0,0,0,0.06); }
        .support-icon { font-size: 24px; flex-shrink: 0; margin-top: 2px; }
        .support-card-title { font-size: 15px; font-weight: 600; color: #1D1D1F; margin-bottom: 4px; }
        .support-card-desc { font-size: 14px; color: #6E6E73; line-height: 1.5; }
        .support-email { color: #007AFF; text-decoration: none; font-weight: 500; }

        /* CTA */
        .cta-section { background: #000; padding: 70px 20px; text-align: center; }
        .cta-inner { max-width: 560px; margin: 0 auto; }
        .cta-title { font-size: clamp(28px, 6vw, 44px); font-weight: 700; letter-spacing: -1.5px; line-height: 1.05; color: #fff; margin-bottom: 16px; }
        .cta-sub { font-size: 16px; color: #8E8E93; line-height: 1.6; margin-bottom: 32px; }

        /* FOOTER */
        .footer { border-top: 0.5px solid #D2D2D7; padding: 24px 20px; display: flex; flex-direction: column; gap: 8px; text-align: center; }
        .footer-logo { font-size: 16px; font-weight: 600; color: #1D1D1F; }
        .footer-note { font-size: 12px; color: #AEAEB2; }
        .footer-links { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .footer-link { font-size: 12px; color: #007AFF; text-decoration: none; }

        /* DESKTOP OVERRIDES */
        @media (min-width: 768px) {
          .nav { padding: 0 32px; }
          .stats-inner { grid-template-columns: repeat(4, 1fr); }
          .stat { border-right: 0.5px solid #D2D2D7; }
          .stat:last-child { border-right: none; }
          .mockup-section { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; padding: 100px 32px; }
          .mockup-text { margin-bottom: 0; }
          .how-section { padding: 100px 32px; }
          .steps { flex-direction: row; }
          .step { flex: 1; }
          .step:first-child { border-radius: 16px 0 0 16px; }
          .step:last-child { border-radius: 0 16px 16px 0; }
          .step:not(:first-child):not(:last-child) { border-radius: 0; }
          .filters-section { padding: 100px 32px; }
          .who-section { padding: 100px 32px; }
          .who-grid { display: grid; grid-template-columns: repeat(3, 1fr); }
          .who-card { border-radius: 0 !important; }
          .who-card:nth-child(1) { border-radius: 16px 0 0 0 !important; }
          .who-card:nth-child(3) { border-radius: 0 16px 0 0 !important; }
          .who-card:nth-child(4) { border-radius: 0 0 0 16px !important; }
          .who-card:nth-child(6) { border-radius: 0 0 16px 0 !important; }
          .pricing-section { padding: 100px 32px; }
          .pricing-grid { flex-direction: row; align-items: stretch; }
          .pricing-card { flex: 1; }
          .support-section { padding: 100px 32px; }
          .support-cards { flex-direction: row; }
          .enterprise-bar { flex-direction: row; justify-content: space-between; align-items: center; }
          .nav-links { display: flex; gap: 24px; align-items: center; }
          .support-card { flex: 1; }
          .cta-section { padding: 100px 32px; }
          .footer { flex-direction: row; justify-content: space-between; align-items: center; padding: 28px 32px; text-align: left; }
          .hero { padding: 140px 32px 100px; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">TrackFeed</div>
        <div className="nav-links">
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#pricing" className="nav-link">Pricing</a>
        </div>
        <div className="nav-actions">
          <a href="https://stallion-alert-v2.vercel.app/login" className="nav-login">Log In</a>
          <a href="https://stallion-alert-v2.vercel.app/login" className="nav-cta">Get Started</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-eyebrow">Australian Thoroughbred Racing Intelligence</div>
        <h1 className="hero-title">Know the moment your horse <span>wins.</span></h1>
        <p className="hero-sub">Real-time winner alerts to your Telegram. Filter by sire, trainer, vendor, race class, state and more.</p>
        <div className="hero-actions">
          <a href="#pricing" className="btn-primary">Start Free Trial</a>
          <a href="#how-it-works" className="btn-ghost">How it works →</a>
        </div>
        <p className="hero-note">7-day free trial · Cancel anytime · Australian racing only</p>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat">
            <div className="stat-num"><span>2</span> min</div>
            <div className="stat-label">Polling interval</div>
          </div>
          <div className="stat">
            <div className="stat-num">All <span>5</span></div>
            <div className="stat-label">Australian states</div>
          </div>
          <div className="stat">
            <div className="stat-num"><span>15</span>+</div>
            <div className="stat-label">Filter types</div>
          </div>
          <div className="stat">
            <div className="stat-num"><span>65k</span>+</div>
            <div className="stat-label">Horses in database</div>
          </div>
        </div>
      </div>

      {/* ALERT MOCKUP */}
      <section className="mockup-section">
        <div className="mockup-text">
          <div className="tag">Live Alerts</div>
          <h2>Instant. Professional. On your phone.</h2>
          <p>The moment a winner matches your filters, TrackFeed fires a Telegram alert with full breeding details, race information, auction history, and exactly which filter triggered it.</p>
          <p style={{ color: '#6E6E73', fontSize: 14, marginBottom: 12 }}>Delivered via Telegram — a free messaging app. Download it on iPhone or Android and connect in 30 seconds.</p>
          <div className="tg-download">
            <a className="tg-btn tg-btn-ios" href="https://apps.apple.com/app/telegram-messenger/id686449807" target="_blank" rel="noopener noreferrer">🍎 App Store</a>
            <a className="tg-btn tg-btn-android" href="https://play.google.com/store/apps/details?id=org.telegram.messenger" target="_blank" rel="noopener noreferrer">▶ Google Play</a>
          </div>
        </div>
        <div className="phone-wrap">
          <div className="phone">
            <div className="phone-screen">
              <div className="phone-notch-bar"><div className="phone-notch" /></div>
              <div className="tg-header">
                <div className="tg-avatar">T</div>
                <div><div className="tg-name">TrackFeed</div><div className="tg-status">bot · just now</div></div>
              </div>
              <div className="tg-body">
                <div className="msg-bubble">
                  <div className="msg-label">🏇 Winner Alert</div>
                  <div className="msg-horse">Semelle Rouge</div>
                  <div className="msg-row"><span className="msg-key">Race</span><span className="msg-val">R7 — Werribee (1200m)</span></div>
                  <div className="msg-row"><span className="msg-key">Class</span><span className="msg-val">BM56 · Good</span></div>
                  <div className="msg-row"><span className="msg-key">Prize</span><span className="msg-val">$35,000</span></div>
                  <div className="msg-row"><span className="msg-key">Sire</span><span className="msg-val">I Am Invincible</span></div>
                  <div className="msg-row"><span className="msg-key">Trainer</span><span className="msg-val">Mick Price</span></div>
                  <div className="msg-row"><span className="msg-key">SP</span><span className="msg-val">$3.80</span></div>
                  <div className="msg-sales">
                    <div className="msg-sales-label">Sales History</div>
                    <div className="msg-sales-row">Inglis Easter 2023 · $320,000</div>
                    <div className="msg-sales-row">Vendor: Coolmore · Buyer: Magic Bloodstock</div>
                  </div>
                  <div className="msg-filters">
                    <div className="msg-filter-label">Matched your filters:</div>
                    <span className="msg-chip">✓ I Am Invincible</span>
                    <span className="msg-chip">✓ Victoria</span>
                  </div>
                  <div className="msg-time">Mon 27 May 2026 · VIC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section" id="how-it-works">
        <div className="how-inner">
          <div className="section-tag">How It Works</div>
          <h2 className="section-title">Up and running in 3 minutes.</h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">01</div>
              <div className="step-title">Download Telegram & sign up</div>
              <p className="step-desc">Telegram is a free messaging app. Download it on iPhone or Android, then create your TrackFeed account. Takes 2 minutes.</p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <div className="step-title">Connect & build your filters</div>
              <p className="step-desc">Connect your Telegram in one tap. Then search for sires, trainers, vendors and race criteria. Add multiple values of the same type to match any of them.</p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <div className="step-title">Receive instant winner alerts</div>
              <p className="step-desc">The moment a winner matches, a Telegram alert fires with full breeding details, race info, and auction history including vendor and buyer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="filters-section" id="filters">
        <div className="section-tag">Filter By Anything</div>
        <h2 className="section-title">Your intelligence. Your rules.</h2>
        <p style={{ fontSize: 16, color: '#6E6E73', lineHeight: 1.65, maxWidth: 520 }}>
          Build alerts around any combination. Add multiple values of the same type to match any of them. Different types must all match.
        </p>
        <div className="filter-tags">
          {[
            { label: 'Sire', active: true },
            { label: 'Dam' }, { label: 'Trainer', active: true },
            { label: 'Jockey' }, { label: 'Horse' },
            { label: 'Group 1', active: true }, { label: 'Group 2' },
            { label: 'Group 3' }, { label: 'Listed' }, { label: 'Any Stakes' },
            { label: 'Victoria', active: true }, { label: 'New South Wales' },
            { label: 'Queensland' }, { label: 'South Australia' }, { label: 'Western Australia' },
            { label: '2YO' }, { label: '3YO' }, { label: 'Fillies' },
            { label: 'Mares' }, { label: 'Geldings' },
            { label: 'Good' }, { label: 'Soft' }, { label: 'Heavy' },
            { label: 'Maiden' }, { label: 'BM72' },
            { label: 'Min Distance' }, { label: 'Max Distance' }, { label: 'Course' },
            { label: 'Vendor', sales: true }, { label: 'Magic Millions', sales: true },
            { label: 'Inglis', sales: true }, { label: 'Karaka (NZB)', sales: true },
          ].map((f: any) => (
            <div key={f.label} className={`ftag ${f.active ? 'highlight' : ''} ${f.sales ? 'sales' : ''}`}>{f.label}</div>
          ))}
        </div>
        <p style={{ fontSize: 12, color: '#AEAEB2', marginTop: 16 }}>Purple filters use real-time bloodstock sales data</p>
      </section>

      {/* WHO */}
      <section className="who-section">
        <div className="who-inner">
          <div className="section-tag">Built For</div>
          <h2 className="section-title">Australian racing professionals.</h2>
          <div className="who-grid">
            <div className="who-card">
              <div className="who-tag">Stallion Farms & Studs</div>
              <div className="who-title">Track every winner by your sires.</div>
              <p className="who-desc">Know before the press release. Every winning progeny flagged the moment results are confirmed.</p>
            </div>
            <div className="who-card">
              <div className="who-tag">Bloodstock Agents</div>
              <div className="who-title">Be on the front foot.</div>
              <p className="who-desc">Know results before your clients do. Sales history included in every alert.</p>
            </div>
            <div className="who-card">
              <div className="who-tag">Breeders</div>
              <div className="who-title">Stay up to date with stallions.</div>
              <p className="who-desc">Track stakes performance and stay ahead of the market.</p>
            </div>
            <div className="who-card">
              <div className="who-tag">Racing Media</div>
              <div className="who-title">Never miss a notable winner.</div>
              <p className="who-desc">Set alerts for stakes races and key trainers so you're always first to the story.</p>
            </div>
            <div className="who-card">
              <div className="who-tag">Racing Managers</div>
              <div className="who-title">Keep clients informed instantly.</div>
              <p className="who-desc">Alert fires before the client calls you.</p>
            </div>
            <div className="who-card">
              <div className="who-tag">Trainers</div>
              <div className="who-title">Track the competition.</div>
              <p className="who-desc">Watch rival stables, monitor bloodlines, and keep an eye on horses that interest you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section" id="pricing">
        <div className="section-tag" style={{ textAlign: 'center' }}>Pricing</div>
        <h2 className="section-title" style={{ marginBottom: 8 }}>Simple, honest pricing.</h2>
        <p style={{ fontSize: 16, color: '#6E6E73', textAlign: 'center' }}>Everything included. No hidden fees.</p>

        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="plan-name">Individual · Monthly</div>
            <div className="plan-price">$19</div>
            <div className="plan-period">per month · cancel anytime</div>
            <div className="plan-saving">Less than 63¢ a day</div>
            <div className="plan-divider" />
            <ul className="plan-features">
              <li><span className="check">✓</span> 3 alert subscriptions</li>
              <li><span className="check">✓</span> 15+ filter types</li>
              <li><span className="check">✓</span> Instant Telegram alerts</li>
              <li><span className="check">✓</span> Bloodstock sales data</li>
              <li><span className="check">✓</span> Vendor & company filters</li>
              <li><span className="check">✓</span> All 5 Australian states</li>
              <li><span className="check">✓</span> 65,000+ horse database</li>
            </ul>
            <a href="https://stallion-alert-v2.vercel.app/login" className="plan-btn plan-btn-dark">Start Free Trial</a>
          </div>

          <div className="pricing-card featured">
            <div className="popular-badge">Best Value</div>
            <div className="plan-name">Individual · Annual</div>
            <div className="plan-price">$179</div>
            <div className="plan-period">per year · billed annually</div>
            <div className="plan-saving">Just $3.44 a week · save $49</div>
            <div className="plan-divider" />
            <ul className="plan-features">
              <li><span className="check">✓</span> 3 alert subscriptions</li>
              <li><span className="check">✓</span> 15+ filter types</li>
              <li><span className="check">✓</span> Instant Telegram alerts</li>
              <li><span className="check">✓</span> Bloodstock sales data</li>
              <li><span className="check">✓</span> Vendor & company filters</li>
              <li><span className="check">✓</span> All 5 Australian states</li>
              <li><span className="check">✓</span> 65,000+ horse database</li>
            </ul>
            <a href="https://stallion-alert-v2.vercel.app/login" className="plan-btn plan-btn-blue">Start Free Trial</a>
          </div>

          <div className="pricing-card team-card">
            <div className="plan-name">Team</div>
            <div className="plan-price">$99</div>
            <div className="plan-period">per month · up to 10 users</div>
            <div className="plan-saving">From $9.90 per person</div>
            <div className="plan-divider" />
            <ul className="plan-features">
              <li><span className="check">✓</span> 5–10 users</li>
              <li><span className="check">✓</span> 3 alerts per user</li>
              <li><span className="check">✓</span> Everything in Individual</li>
              <li><span className="check">✓</span> Single monthly invoice</li>
              <li><span className="check">✓</span> Priority support</li>
              <li><span className="check">✓</span> Onboarding assistance</li>
            </ul>
            <a href="mailto:trackfeedaus@gmail.com?subject=TrackFeed Team Plan" className="plan-btn plan-btn-black">Get Started →</a>
          </div>
        </div>

        <div className="enterprise-bar">
          <div>
            <div className="enterprise-text">10+ users?</div>
            <div className="enterprise-sub">Custom pricing for large operations, studs and racing organisations.</div>
          </div>
          <a href="mailto:trackfeedaus@gmail.com?subject=TrackFeed Enterprise Enquiry" className="enterprise-btn">Enquire Now →</a>
        </div>

        <p className="pricing-note">7-day free trial on individual plans · Team plans start immediately · Cancel anytime</p>
      </section>

      {/* SUPPORT */}
      <section className="support-section">
        <div className="support-inner">
          <div className="section-tag" style={{ textAlign: 'center' }}>Support</div>
          <h2 className="support-title">We're here to help.</h2>
          <p className="support-desc">Got a question or need help getting set up? Reach out — we respond fast.</p>
          <div className="support-cards">
            <div className="support-card">
              <div className="support-icon">✉️</div>
              <div>
                <div className="support-card-title">Email Support</div>
                <div className="support-card-desc">For general questions, onboarding help, or team plan enquiries.</div>
                <div style={{ marginTop: 8 }}>
                  <a href="mailto:trackfeedaus@gmail.com" className="support-email">trackfeedaus@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="support-card">
              <div className="support-icon">🏇</div>
              <div>
                <div className="support-card-title">Team & Enterprise</div>
                <div className="support-card-desc">Setting up a team for your stud or racing operation? We'll handle the onboarding personally.</div>
                <div style={{ marginTop: 8 }}>
                  <a href="mailto:trackfeedaus@gmail.com?subject=TrackFeed Team Enquiry" className="support-email">Get in touch →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2 className="cta-title">Start tracking what matters.</h2>
          <p className="cta-sub">Join racing professionals who never miss a winner. Set up in 3 minutes.</p>
          <a href="https://stallion-alert-v2.vercel.app/login" className="btn-primary" style={{ fontSize: 17, padding: '16px 40px' }}>Start Free Trial</a>
          <p style={{ marginTop: 16, fontSize: 12, color: '#636366' }}>7-day free trial · Cancel anytime · Australian racing only</p>
        </div>
      </section>

      {/* FOOTER */}
      <div className="footer">
        <div className="footer-logo">TrackFeed</div>
        <div className="footer-links">
          <a href="mailto:trackfeedaus@gmail.com" className="footer-link">trackfeedaus@gmail.com</a>
        </div>
        <div className="footer-note">Australian Thoroughbred Racing Intelligence · © 2026</div>
      </div>
    </>
  )
}
