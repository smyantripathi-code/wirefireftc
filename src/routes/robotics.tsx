import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/robotics')({
  component: RoboticsPage,
})

function RoboticsPage() {
  return (
    <main style={{ paddingTop: '68px' }}>
      {/* Hero */}
      <section style={{ padding: '4rem 1.5rem 3rem', background: 'var(--dark-mid)', borderBottom: '1px solid var(--dark-border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--fire), transparent)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// About FTC</div>
          <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--white)', marginBottom: '0.75rem' }}>Robotics</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', lineHeight: 1.7, fontSize: '0.95rem' }}>
            FIRST Tech Challenge (FTC) is a robotics competition for middle and high school students. Each season, teams design, build, code, and compete with robots built entirely from scratch.
          </p>
        </div>
      </section>

      {/* What is FTC */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.75rem' }}>// What is FTC?</div>
            <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1rem' }}>FIRST Tech Challenge</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.92rem', marginBottom: '1rem' }}>
              Each season, FTC releases a new game with specific objectives. Teams design, build, and program robots to compete — blending mechanical engineering, software, and strategy.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.92rem', marginBottom: '1rem' }}>
              Robots are programmed in Java, performing a 30-second autonomous period followed by a 90-second driver-controlled period in each 2-minute match.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.92rem' }}>
              Teams are also judged on their engineering process, design documentation, outreach, and team presentation — making FTC as much about people as it is about robots.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { num: '01', title: 'Design & Build', desc: 'Teams design robots from scratch with motors, sensors, and custom fabricated parts. Wire Fire emphasizes simple, reliable mechanisms.' },
              { num: '02', title: 'Programming', desc: 'Students code autonomous routines and driver-controlled behavior in Java, using sensors and computer vision.' },
              { num: '03', title: 'Competition', desc: '2-minute matches: 30s autonomous + 90s driver-controlled. Alliances of two teams compete head-to-head.' },
              { num: '04', title: 'Judging', desc: 'Teams are judged on engineering process, design notebook, outreach impact, and a live team interview.' },
            ].map(item => (
              <div key={item.num} style={{
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
                background: 'var(--dark-card)', border: '1px solid var(--dark-border)',
                borderRadius: '0.5rem', padding: '0.875rem 1rem',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(232,0,106,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--dark-border)')}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--fire)', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0, marginTop: '0.1rem' }}>{item.num}</span>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.875rem', marginBottom: '0.2rem' }}>{item.title}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2025 Competition Robot */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark-mid)', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// 2025 Season Robot</div>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.75rem', fontWeight: 700, color: 'var(--white)', marginBottom: '2rem' }}>Our Robot</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            {/* Robot photo */}
            <div style={{ borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(232,0,106,0.2)', boxShadow: '0 0 40px rgba(232,0,106,0.1)' }}>
              <img
                src="/ChampRobot-2.jpg"
                alt="Wire Fire #23260 — 2025 Competition Robot"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>

            {/* Robot details */}
            <div>
              <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem' }}>Wire Fire #23260</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--fire)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>2025 INTO THE DEEP — Competition Robot</div>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.92rem', marginBottom: '1.25rem' }}>
                Our 2025 competition robot was built around a philosophy of simplicity and reliability. Clean wiring, minimal moving parts, and a compact footprint — optimized for consistent performance across every match at league meets and the Oregon State Championship.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                The robot features a vertical linear slide system for scoring, custom 3D-printed components, and a REV Control Hub running Java-based autonomous routines. High score: 140 points.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {[
                  { label: 'High Score', val: '140' },
                  { label: 'Season', val: '2024–25' },
                  { label: 'League', val: 'Rose City' },
                ].map(s => (
                  <div key={s.label} style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '0.5rem', padding: '0.75rem 1.1rem', textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.25rem', fontWeight: 900, color: 'var(--fire)' }}>{s.val}</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.2rem' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Match Footage */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark)', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>// Match Footage</div>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1.5rem' }}>Watch Us Compete</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {[
              { id: 'kkhg-ntrcYs', title: "Team Wire Fire's First Match, Rose City League 2023" },
              { id: '-exSmCcoY1E', title: 'What is FIRST Tech Challenge (FTC)?' },
            ].map(v => (
              <div key={v.id}>
                <div style={{ borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid var(--dark-border)', marginBottom: '0.75rem' }}>
                  <iframe
                    width="100%" height="220"
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ display: 'block', border: 'none' }}
                  />
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{v.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
