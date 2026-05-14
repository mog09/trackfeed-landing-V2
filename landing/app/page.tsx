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
        }

        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          height: 52px;
          display: flex; justify-content: space-between; align-items: center;
          padding: 0 32px;
          background: rgba(255,255,255,0.88);
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          border-bottom: 0.5px solid rgba(0,0,0,0.12);
        }
        .nav-logo { font-size: 18px; font-weight: 700; color: #1D1D1F; letter-spacing: -0.5px; }
        .nav-links { display: flex; gap: 32px; align-items: center; }
        .nav-link { font-size: 14px; font-weight: 400; color: #555; text-decoration: none; transition: color 0.15s; }
        .nav-link:hover { color: #1D1D1F; }
        .nav-cta {
          padding: 8px 20px;
          background: #007AFF; color: #fff;
          border: none; border-radius: 980px;
          font-size: 14px; font-weight: 500;
          cursor: pointer; text-decoration: none;
          transition: opacity 0.2s;
        }
        .nav-cta:hover { opacity: 0.85; }

        .hero {
          padding: 140px 32px 100px;
          text-align: center;
          max-width: 960px;
          margin: 0 auto;
        }
        .hero-eyebrow {
          display: inline-block;
          font-size: 13px; font-weight: 500;
          letter-spacing: 0.5px;
          color: #007AFF;
          background: rgba(0,122,255,0.08);
          padding: 6px 14px; border-radius: 100px;
          margin-bottom: 28px;
        }
        .hero-title {
          font-size: clamp(40px, 6.5vw, 76px);
          font-weight: 800;
          letter-spacing: -2.5px;
          line-height: 1.04;
          color: #1D1D1F;
          margin-bottom: 24px;
        }
        .hero-title span { color: #007AFF; }
        .hero-sub {
          font-size: 19px; font-weight: 400;
          color: #6E6E73; line-height: 1.6;
          max-width: 560px; margin: 0 auto 44px;
        }
        .hero-actions { display: flex; gap: 14px; justify-content: center; align-items: center; flex-wrap: wrap; }
        .btn-primary {
          padding: 15px 32px;
          background: #007AFF; color: #fff;
          border: none; border-radius: 980px;
          font-size: 16px; font-weight: 600;
          cursor: pointer; text-decoration: none;
          display: inline-block; transition: opacity 0.2s;
          letter-spacing: -0.2px;
        }
        .btn-primary:hover { opacity: 0.88; }
        .btn-ghost {
          padding: 15px 32px;
          background: transparent; color: #007AFF;
          border: none; border-radius: 980px;
          font-size: 16px; font-weight: 500;
          cursor: pointer; text-decoration: none;
          display: inline-block; transition: background 0.2s;
        }
        .btn-ghost:hover { background: rgba(0,122,255,0.06); }
        .hero-note { font-size: 13px; color: #AEAEB2; margin-top: 20px; }

        .stats-bar {
          background: #F5F5F7;
          border-top: 0.5px solid #D2D2D7;
          border-bottom: 0.5px solid #D2D2D7;
          padding: 32px;
        }
        .stats-inner {
          max-width: 900px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr);
        }
        .stat { text-align: center; padding: 0 24px; border-right: 0.5px solid #D2D2D7; }
        .stat:last-child { border-right: none; }
        .stat-num { font-size: 36px; font-weight: 700; letter-spacing: -1.5px; color: #1D1D1F; line-height: 1; margin-bottom: 6px; }
        .stat-num span { color: #007AFF; }
        .stat-label { font-size: 13px; color: #6E6E73; font-weight: 400; }

        .mockup-section {
          padding: 100px 32px;
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: center;
        }
        .mockup-text .tag { font-size: 12px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #007AFF; margin-bottom: 16px; }
        .mockup-text h2 { font-size: 40px; font-weight: 700; letter-spacing: -1.5px; line-height: 1.1; margin-bottom: 18px; color: #1D1D1F; }
        .mockup-text p { font-size: 16px; color: #6E6E73; line-height: 1.65; margin-bottom: 16px; }

        .phone-wrap { display: flex; justify-content: center; }
        .phone {
          background: #1C1C1E; border-radius: 44px; padding: 18px; width: 300px;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px rgba(0,0,0,0.25);
        }
        .phone-screen { background: #000; border-radius: 30px; overflow: hidden; }
        .phone-notch-bar { background: #1C1C1E; height: 28px; display: flex; align-items: center; justify-content: center; }
        .phone-notch { width: 90px; height: 16px; background: #000; border-radius: 0 0 12px 12px; }
        .tg-header {
          background: #1C1C1E; padding: 12px 16px;
          display: flex; align-items: center; gap: 10px;
          border-bottom: 0.5px solid rgba(255,255,255,0.06);
        }
        .tg-avatar { width: 32px; height: 32px; background: #007AFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: #fff; flex-shrink: 0; }
        .tg-name { color: #fff; font-size: 14px; font-weight: 600; }
        .tg-status { color: #48484A; font-size: 11px; }
        .tg-body { background: #000; padding: 16px 12px; min-height: 340px; }
        .msg-bubble { background: #1C1C1E; border-radius: 18px 18px 18px 4px; padding: 14px 16px; font-size: 12.5px; line-height: 1.65; color: #E8E8ED; margin-bottom: 8px; }
        .msg-label { color: #007AFF; font-weight: 700; font-size: 11px; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 10px; }
        .msg-horse { font-size: 16px; font-weight: 700; color: #fff; margin-bottom: 10px; letter-spacing: -0.3px; }
        .msg-row { display: flex; justify-content: space-between; padding: 5px 0; border-bottom: 0.5px solid rgba(255,255,255,0.06); }
        .msg-row:last-of-type { border-bottom: none; }
        .msg-key { color: #636366; font-size: 12px; }
        .msg-val { color: #E8E8ED; font-size: 12px; font-weight: 500; text-align: right; max-width: 150px; }
        .msg-filters { margin-top: 10px; padding-top: 10px; border-top: 0.5px solid rgba(255,255,255,0.08); }
        .msg-filter-label { color: #48484A; font-size: 11px; margin-bottom: 6px; }
        .msg-chip { display: inline-block; background: rgba(0,122,255,0.2); color: #007AFF; padding: 3px 8px; border-radius: 5px; font-size: 11px; font-weight: 600; margin: 2px 2px 0 0; }
        .msg-time { color: #48484A; font-size: 10px; text-align: right; margin-top: 8px; }

        .how-section { background: #F5F5F7; padding: 100px 32px; }
        .how-inner { max-width: 1000px; margin: 0 auto; }
        .section-tag { font-size: 12px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #007AFF; margin-bottom: 16px; }
        .section-title { font-size: 42px; font-weight: 700; letter-spacing: -1.5px; line-height: 1.1; color: #1D1D1F; margin-bottom: 56px; }
        .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
        .step { background: #fff; padding: 36px 32px; }
        .step:first-child { border-radius: 16px 0 0 16px; }
        .step:last-child { border-radius: 0 16px 16px 0; }
        .step-num { font-size: 13px; font-weight: 600; color: #007AFF; letter-spacing: 0.5px; margin-bottom: 20px; }
        .step-title { font-size: 19px; font-weight: 600; letter-spacing: -0.4px; margin-bottom: 10px; color: #1D1D1F; }
        .step-desc { font-size: 15px; color: #6E6E73; line-height: 1.6; }

        .filters-section { padding: 100px 32px; max-width: 1000px; margin: 0 auto; }
        .filter-tags { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 40px; }
        .ftag {
          padding: 9px 18px; background: #F5F5F7;
          border-radius: 100px; font-size: 14px; font-weight: 500;
          color: #3A3A3C; border: 0.5px solid #D2D2D7;
          transition: all 0.15s; cursor: default;
        }
        .ftag:hover { background: #007AFF; color: #fff; border-color: #007AFF; }
        .ftag.highlight { background: #007AFF; color: #fff; border-color: #007AFF; }

        .who-section { background: #000; padding: 100px 32px; color: #fff; }
        .who-inner { max-width: 1000px; margin: 0 auto; }
        .who-inner .section-tag { color: #0A84FF; }
        .who-inner .section-title { color: #fff; }
        .who-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
        .who-card { background: #1C1C1E; padding: 32px; }
        .who-card:nth-child(1) { border-radius: 16px 0 0 0; }
        .who-card:nth-child(3) { border-radius: 0 16px 0 0; }
        .who-card:nth-child(4) { border-radius: 0 0 0 16px; }
        .who-card:nth-child(6) { border-radius: 0 0 16px 0; }
        .who-tag { font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #0A84FF; margin-bottom: 14px; }
        .who-title { font-size: 18px; font-weight: 600; letter-spacing: -0.3px; margin-bottom: 10px; color: #fff; }
        .who-desc { font-size: 14px; color: #8E8E93; line-height: 1.6; }

        .pricing-section { padding: 100px 32px; max-width: 800px; margin: 0 auto; text-align: center; }
        .pricing-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 56px; text-align: left; }
        .pricing-card { border: 0.5px solid #D2D2D7; border-radius: 20px; padding: 36px 32px; position: relative; background: #fff; }
        .pricing-card.featured { border-color: #007AFF; border-width: 1.5px; background: #F5F9FF; }
        .popular-badge {
          position: absolute; top: -13px; left: 50%; transform: translateX(-50%);
          background: #007AFF; color: #fff;
          padding: 4px 16px; border-radius: 100px;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.5px; white-space: nowrap;
        }
        .plan-name { font-size: 12px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: #6E6E73; margin-bottom: 20px; }
        .plan-price { font-size: 52px; font-weight: 700; letter-spacing: -2px; line-height: 1; color: #1D1D1F; margin-bottom: 4px; }
        .plan-period { font-size: 14px; color: #6E6E73; margin-bottom: 28px; }
        .plan-divider { height: 0.5px; background: #D2D2D7; margin-bottom: 24px; }
        .plan-features { list-style: none; margin-bottom: 32px; }
        .plan-features li { font-size: 15px; color: #3A3A3C; padding: 9px 0; border-bottom: 0.5px solid #F2F2F7; display: flex; gap: 12px; align-items: flex-start; }
        .plan-features li:last-child { border-bottom: none; }
        .check { color: #007AFF; font-weight: 700; flex-shrink: 0; font-size: 14px; margin-top: 1px; }
        .plan-btn { display: block; width: 100%; padding: 15px; border-radius: 980px; font-size: 16px; font-weight: 600; text-align: center; text-decoration: none; cursor: pointer; border: none; font-family: inherit; transition: opacity 0.2s; letter-spacing: -0.2px; }
        .plan-btn:hover { opacity: 0.85; }
        .plan-btn-blue { background: #007AFF; color: #fff; }
        .plan-btn-dark { background: #1D1D1F; color: #fff; }
        .pricing-note { font-size: 14px; color: #AEAEB2; margin-top: 28px; }

        .cta-section { background: #F5F5F7; padding: 100px 32px; text-align: center; }
        .cta-inner { max-width: 600px; margin: 0 auto; }
        .cta-title { font-size: 48px; font-weight: 700; letter-spacing: -2px; line-height: 1.05; color: #1D1D1F; margin-bottom: 18px; }
        .cta-sub { font-size: 18px; color: #6E6E73; line-height: 1.6; margin-bottom: 36px; }

        .footer { border-top: 0.5px solid #D2D2D7; padding: 32px; display: flex; justify-content: space-between; align-items: center; }
        .footer-logo { font-size: 16px; font-weight: 600; color: #1D1D1F; }
        .footer-note { font-size: 13px; color: #AEAEB2; }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .nav { padding: 0 20px; }
          .hero { padding: 100px 20px 70px; }
          .stats-inner { grid-template-columns: repeat(2, 1fr); gap: 24px; }
          .stat { border-right: none; }
          .mockup-section { grid-template-columns: 1fr; gap: 48px; padding: 70px 20px; }
          .steps { grid-template-columns: 1fr; gap: 2px; }
          .step:first-child { border-radius: 16px 16px 0 0; }
          .step:last-child { border-radius: 0 0 16px 16px; }
          .who-grid { grid-template-columns: 1fr; }
          .who-card { border-radius: 0 !important; }
          .who-card:nth-child(1) { border-radius: 16px 16px 0 0 !important; }
          .who-card:last-child { border-radius: 0 0 16px 16px !important; }
          .pricing-grid { grid-template-columns: 1fr; }
          .how-section, .filters-section, .pricing-section { padding: 70px 20px; }
          .cta-section { padding: 70px 20px; }
          .footer { flex-direction: column; gap: 12px; text-align: center; padding: 24px 20px; }
        }
      `}</style>

      <nav className="nav">
        <div className="nav-logo">TrackFeed</div>
        <div className="nav-links">
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#filters" className="nav-link">Filters</a>
          <a href="#pricing" className="nav-link">Pricing</a>
        </div>
        <a href="https://stallion-alert-v2.vercel.app/login" className="nav-cta">Get Started</a>
      </nav>

      <section className="hero">
        <div className="hero-eyebrow">Australian Thoroughbred Racing Intelligence</div>
        <h1 className="hero-title">Know the moment<br />your <span>stallion wins.</span></h1>
        <p className="hero-sub">Real-time winner alerts to your Telegram. Filter by sire, trainer, race class, state and more. No noise — just the results that matter.</p>
        <div className="hero-actions">
          <a href="#pricing" className="btn-primary">Start Free Trial</a>
          <a href="#how-it-works" className="btn-ghost">See how it works →</a>
        </div>
        <p className="hero-note">No credit card required · 7-day free trial · Cancel anytime</p>
      </section>

      <div className="stats-bar">
        <div className="stats-inner">
          <div className="stat"><div className="stat-num"><span>3</span> min</div><div className="stat-label">Alert polling interval</div></div>
          <div className="stat"><div className="stat-num">All <span>5</span></div><div className="stat-label">Australian states covered</div></div>
          <div className="stat"><div className="stat-num"><span>13</span>+</div><div className="stat-label">Filter types available</div></div>
          <div className="stat"><div className="stat-num"><span>0</span>s</div><div className="stat-label">Delay after result confirmed</div></div>
        </div>
      </div>

      <section className="mockup-section">
        <div className="mockup-text">
          <div className="tag">Live Alerts</div>
          <h2>Instant. Professional. On your phone.</h2>
          <p>The moment a winner matches your filters, TrackFeed fires a Telegram alert with full breeding details, race information, and exactly which of your filters triggered it.</p>
          <p style={{ color: '#AEAEB2', fontSize: 14 }}>No app to download. Telegram delivers instantly to iOS and Android.</p>
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
                  <div className="msg-label">Winner Alert</div>
                  <div className="msg-horse">Semelle Rouge</div>
                  <div className="msg-row"><span className="msg-key">Race</span><span className="msg-val">R7 — Werribee (1200m)</span></div>
                  <div className="msg-row"><span className="msg-key">Class</span><span className="msg-val">BM56</span></div>
                  <div className="msg-row"><span className="msg-key">Prize</span><span className="msg-val">$35,000</span></div>
                  <div className="msg-row"><span className="msg-key">Sire</span><span className="msg-val">I Am Invincible</span></div>
                  <div className="msg-row"><span className="msg-key">Dam</span><span className="msg-val">Lubiton</span></div>
                  <div className="msg-row"><span className="msg-key">Trainer</span><span className="msg-val">Mick Price & M. Kent</span></div>
                  <div className="msg-row"><span className="msg-key">SP</span><span className="msg-val">$3.80</span></div>
                  <div className="msg-filters">
                    <div className="msg-filter-label">Matched your filters:</div>
                    <span className="msg-chip">✓ I Am Invincible</span>
                    <span className="msg-chip">✓ Victoria</span>
                  </div>
                  <div className="msg-time">Wed 14 May 2026 · VIC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-section" id="how-it-works">
        <div className="how-inner">
          <div className="section-tag">How It Works</div>
          <h2 className="section-title">Up and running in 3 minutes.</h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">01</div>
              <div className="step-title">Create your account</div>
              <p className="step-desc">Sign up with your email. No credit card required to start your free trial. Takes 30 seconds.</p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <div className="step-title">Connect Telegram</div>
              <p className="step-desc">Tap one link to connect your Telegram. Alerts arrive instantly — no extra apps, no configuration.</p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <div className="step-title">Set your filters</div>
              <p className="step-desc">Search for your sires, trainers, and race criteria. The moment a match wins, you'll know.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="filters-section" id="filters">
        <div className="section-tag">Filter By Anything</div>
        <h2 className="section-title">Your intelligence.<br />Your rules.</h2>
        <p style={{ fontSize: 17, color: '#6E6E73', lineHeight: 1.65, maxWidth: 520, marginBottom: 8 }}>
          Build alerts around any combination. All filters must match — so you only hear about the races that matter to you.
        </p>
        <div className="filter-tags">
          {[
            { label: 'Sire', active: true },
            { label: 'Dam', active: false },
            { label: 'Trainer', active: true },
            { label: 'Jockey', active: false },
            { label: 'Group 1', active: true },
            { label: 'Group 2', active: false },
            { label: 'Group 3', active: false },
            { label: 'Listed', active: false },
            { label: 'Any Stakes', active: false },
            { label: 'Victoria', active: true },
            { label: 'New South Wales', active: false },
            { label: 'Queensland', active: false },
            { label: 'South Australia', active: false },
            { label: 'Western Australia', active: false },
            { label: '2YO', active: false },
            { label: '3YO', active: false },
            { label: 'Fillies', active: false },
            { label: 'Mares', active: false },
            { label: 'Geldings', active: false },
            { label: 'Good', active: false },
            { label: 'Soft', active: false },
            { label: 'Heavy', active: false },
            { label: 'Maiden', active: false },
            { label: 'BM72', active: false },
            { label: 'Min Distance', active: false },
            { label: 'Max Distance', active: false },
            { label: 'Course', active: false },
          ].map(f => (
            <div key={f.label} className={`ftag ${f.active ? 'highlight' : ''}`}>{f.label}</div>
          ))}
        </div>
      </section>

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
              <div className="who-title">Monitor every horse you represent.</div>
              <p className="who-desc">Track horses you've sold, clients you represent, and bloodlines you follow — all in real time.</p>
            </div>
            <div className="who-card">
              <div className="who-tag">Breeders</div>
              <div className="who-title">Watch your progeny race.</div>
              <p className="who-desc">Get instant notification when a stakes race is won by a horse you bred or a dam you own.</p>
            </div>
            <div className="who-card">
              <div className="who-tag">Racing Media</div>
              <div className="who-title">Never miss a notable winner.</div>
              <p className="who-desc">Set alerts for stakes races and key trainers so you're always first to the story.</p>
            </div>
            <div className="who-card">
              <div className="who-tag">Racing Managers</div>
              <div className="who-title">Keep clients informed instantly.</div>
              <p className="who-desc">Monitor your entire portfolio from a single dashboard. Alert fires before the client calls you.</p>
            </div>
            <div className="who-card">
              <div className="who-tag">Trainers</div>
              <div className="who-title">Track the competition.</div>
              <p className="who-desc">Watch rival stables, monitor bloodlines, and keep an eye on the horses that interest you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section" id="pricing">
        <div className="section-tag" style={{ textAlign: 'center' }}>Pricing</div>
        <h2 className="section-title" style={{ marginBottom: 12 }}>Simple, honest pricing.</h2>
        <p style={{ fontSize: 16, color: '#6E6E73' }}>Start free. Upgrade when you're ready.</p>
        <div className="pricing-grid">

          <div className="pricing-card">
            <div className="plan-name">Starter</div>
            <div className="plan-price">$25</div>
            <div className="plan-period">per month · billed monthly</div>
            <div className="plan-divider" />
            <ul className="plan-features">
              <li><span className="check">✓</span> 3 alert subscriptions</li>
              <li><span className="check">✓</span> All 13 filter types</li>
              <li><span className="check">✓</span> Instant Telegram alerts</li>
              <li><span className="check">✓</span> All 5 Australian states</li>
              <li><span className="check">✓</span> Live search — trainers & sires</li>
              <li><span className="check">✓</span> Test alert button</li>
            </ul>
            <a href="https://stallion-alert-v2.vercel.app/login" className="plan-btn plan-btn-dark">Start Free Trial</a>
          </div>

          <div className="pricing-card featured">
            <div className="popular-badge">Most Popular</div>
            <div className="plan-name">Pro</div>
            <div className="plan-price">$49</div>
            <div className="plan-period">per month · billed monthly</div>
            <div className="plan-divider" />
            <ul className="plan-features">
              <li><span className="check">✓</span> 10 alert subscriptions</li>
              <li><span className="check">✓</span> All 13 filter types</li>
              <li><span className="check">✓</span> Instant Telegram alerts</li>
              <li><span className="check">✓</span> All 5 Australian states</li>
              <li><span className="check">✓</span> Live search — trainers & sires</li>
              <li><span className="check">✓</span> Sales data in alerts</li>
              <li><span className="check">✓</span> Priority support</li>
            </ul>
            <a href="https://stallion-alert-v2.vercel.app/login" className="plan-btn plan-btn-blue">Start Free Trial</a>
          </div>

        </div>
        <p className="pricing-note">7-day free trial on all plans · No credit card required · Cancel anytime</p>
      </section>

      <section className="cta-section">
        <div className="cta-inner">
          <h2 className="cta-title">Start tracking what matters.</h2>
          <p className="cta-sub">Join racing professionals who never miss a winner. Set up in 3 minutes.</p>
          <a href="https://stallion-alert-v2.vercel.app/login" className="btn-primary" style={{ fontSize: 17, padding: '16px 44px' }}>Start Free Trial</a>
          <p style={{ marginTop: 18, fontSize: 13, color: '#AEAEB2' }}>No credit card required · Australian racing only · Cancel anytime</p>
        </div>
      </section>

      <div className="footer">
        <div className="footer-logo">TrackFeed</div>
        <div className="footer-note">Australian Thoroughbred Racing Intelligence · © 2026</div>
      </div>
    </>
  )
}
