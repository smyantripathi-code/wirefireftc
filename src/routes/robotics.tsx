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
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.75rem' }}>// What is FTC?</div>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1.25rem' }}>FIRST Tech Challenge</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '1rem' }}>
            FIRST Tech Challenge is a middle and high school robotics competition where student teams design, build, and program robots from scratch each season. Every year, FIRST releases a brand-new game with unique objectives, scoring zones, and rules - forcing teams to engineer creative solutions under real constraints.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '1rem' }}>
            Matches are two minutes long. The first 30 seconds are fully autonomous - the robot operates entirely on pre-programmed code with no driver input. The remaining 90 seconds are driver-controlled, where students pilot the robot in real time. All programming is done in Java.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '0.95rem', marginBottom: '1.75rem' }}>
            FTC is not purely a technical competition. Teams are also evaluated by judges on their engineering design process, documentation (the Engineering Portfolio), outreach work, and a live team interview. Awards like the Inspire Award, Think Award, and Connect Award recognize excellence beyond just robot performance - making FTC as much about people as it is about hardware.
          </p>
          <div style={{ borderLeft: '2px solid rgba(255,0,106,0.35)', paddingLeft: '1.25rem' }}>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontSize: '0.88rem', fontStyle: 'italic' }}>
              Wire Fire competes in the Iron Mountain League in Oregon. The season runs from September through February, with league meets leading to a regional tournament and then the Oregon State Championship.
            </p>
          </div>
        </div>
      </section>

      {/* 2025 Competition Robot */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark-mid)', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// 2025 Season Robot</div>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.75rem', fontWeight: 700, color: 'var(--white)', marginBottom: '2rem' }}>Our Robot</h2>

          <div style={{ maxWidth: '720px' }}>
            <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.35rem' }}>Wire Fire #23260</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--fire)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>2024-25 INTO THE DEEP · Iron Mountain League</div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '0.93rem', marginBottom: '1.1rem' }}>
              Our 2024-25 competition robot was built around a philosophy of simplicity and reliability. Clean wiring, minimal moving parts, and a compact footprint - optimized for consistent performance across every match at Iron Mountain League meets and the Oregon State Championship.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '0.93rem' }}>
              The robot features a vertical linear slide system for scoring, custom 3D-printed components, and a REV Control Hub running Java-based autonomous routines. It scored a season-high of 140 points and earned Wire Fire a spot as Finalist Alliance first pick at the league tournament.
            </p>
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
