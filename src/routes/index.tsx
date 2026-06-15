import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

const stats = [
  { val: '#23260', label: 'Team Number' },
  { val: '2nd Year', label: 'Competing' },
  { val: '12', label: 'Team Members' },
  { val: '140', label: 'High Score' },
]

const highlights = [
  { icon: '🤖', title: 'Build', desc: 'We design and manufacture physical robots from scratch — chassis, drivetrains, arms, and mechanisms.' },
  { icon: '💻', title: 'Code', desc: 'Our programmers write Java to control autonomous movement, sensors, and real-time driver control.' },
  { icon: '🖨️', title: '3D Print & CAD', desc: 'Custom parts designed in CAD and printed in-house. We iterate fast and build smart.' },
  { icon: '📣', title: 'Outreach', desc: 'From garbage can fundraisers to robotics camps — we earn our way and give back to our community.' },
]

function Home() {
  return (
    <main>
      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '0 1.5rem' }}>
        {/* Background */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'url(https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/AoP6qzaakqczVKbE/20240421_161748_2-YrDa6Rbn9aib6K4b.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'brightness(0.25) saturate(0.6)',
        }} />
        {/* Grid overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          backgroundImage: 'linear-gradient(rgba(255,69,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,69,0,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        {/* Fire glow */}
        <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,69,0,0.12) 0%, transparent 70%)', zIndex: 1, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)', zIndex: 1, pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1280px', margin: '0 auto', width: '100%', paddingTop: '7rem' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: 'var(--fire)', letterSpacing: '0.15em', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--fire)', animation: 'pulse-fire 2s ease-in-out infinite' }} />
            FIRST TECH CHALLENGE · LAKE OSWEGO, OREGON
          </div>

          <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 900, lineHeight: 0.9, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            <span style={{ color: 'var(--white)', display: 'block' }}>WIRE</span>
            <span style={{ color: 'var(--fire)', display: 'block', textShadow: '0 0 60px rgba(255,69,0,0.5)' }}>FIRE</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.35em', letterSpacing: '0.15em', display: 'block', marginTop: '0.5rem' }}>#23260</span>
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '520px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            A dynamic FTC robotics team of middle and high school students from Lake Oswego — building robots, writing code, and competing at the highest level.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <Link to="/robotics" style={{
              background: 'linear-gradient(135deg, var(--fire), var(--fire-glow))',
              color: 'white', textDecoration: 'none', padding: '0.85rem 2rem',
              borderRadius: '0.4rem', fontWeight: 700, fontSize: '0.9rem',
              letterSpacing: '0.04em', boxShadow: '0 0 24px rgba(255,69,0,0.4)',
              transition: 'box-shadow 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 40px rgba(255,69,0,0.7)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 24px rgba(255,69,0,0.4)')}>
              Our Robots →
            </Link>
            <Link to="/team" style={{
              background: 'transparent', color: 'var(--text)', textDecoration: 'none',
              padding: '0.85rem 2rem', borderRadius: '0.4rem', fontWeight: 600, fontSize: '0.9rem',
              border: '1px solid rgba(255,255,255,0.15)', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--fire)'; e.currentTarget.style.color = 'var(--fire)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'var(--text)' }}>
              Meet the Team
            </Link>
            <Link to="/camp" style={{
              background: 'rgba(0,212,255,0.08)', color: 'var(--electric)', textDecoration: 'none',
              padding: '0.85rem 2rem', borderRadius: '0.4rem', fontWeight: 600, fontSize: '0.9rem',
              border: '1px solid rgba(0,212,255,0.2)', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,212,255,0.15)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,212,255,0.08)' }}>
              🏕 2025 Camp
            </Link>
          </div>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {stats.map(s => (
              <div key={s.label} style={{ borderLeft: '2px solid var(--fire)', paddingLeft: '1rem' }}>
                <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.4rem', fontWeight: 700, color: 'var(--white)' }}>{s.val}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.2rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ padding: '5rem 1.5rem', background: 'var(--dark-mid)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>// Mission</div>
            <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--white)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
              More Than Just<br />Building Robots
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>
              Wire Fire #23260 is a second-year FTC team based in Lake Oswego, Oregon. We're middle and high school students learning to excel through STEM — but also through outreach, accounting, and building a real organization.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              Our goal is financial independence: earning our own funding, reducing reliance on parents, and proving that students can run a serious, self-sustaining team.
            </p>
            <div style={{ marginTop: '1.75rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {['STEM-Focused', 'Self-Funded', 'Community-Driven', '501(c)(3)'].map(tag => (
                <span key={tag} style={{
                  background: 'rgba(255,69,0,0.08)', color: 'var(--fire)',
                  border: '1px solid rgba(255,69,0,0.2)', borderRadius: '0.3rem',
                  padding: '0.3rem 0.75rem', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.05em',
                }}>{tag}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {highlights.map(h => (
              <div key={h.title} style={{
                background: 'var(--dark-card)', border: '1px solid var(--dark-border)',
                borderRadius: '0.75rem', padding: '1.25rem',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,69,0,0.3)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--dark-border)'; e.currentTarget.style.transform = 'none' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.6rem' }}>{h.icon}</div>
                <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.875rem', marginBottom: '0.4rem' }}>{h.title}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', lineHeight: 1.5 }}>{h.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMP CTA */}
      <section style={{ padding: '4rem 1.5rem', background: 'linear-gradient(135deg, rgba(0,212,255,0.05) 0%, rgba(255,69,0,0.05) 100%)', borderTop: '1px solid var(--dark-border)', borderBottom: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--electric)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// Upcoming Event</div>
            <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.6rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.75rem' }}>2025 FTC Camp</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              July 21–25 at Lake Oswego High School. Ages 12–16. Build, code, design, and compete. Limited spots — 2:1 student-to-instructor ratio.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              {[['📅', 'July 21–25, 2025'], ['🏫', 'Lake Oswego HS'], ['👥', 'Ages 12–16'], ['💰', '$350/student']].map(([icon, val]) => (
                <div key={val} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <span>{icon}</span><span>{val}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/camp" style={{
              display: 'inline-block', background: 'linear-gradient(135deg, var(--electric-dim), var(--electric))',
              color: 'var(--dark)', textDecoration: 'none', padding: '1rem 2.5rem',
              borderRadius: '0.4rem', fontWeight: 800, fontSize: '0.95rem',
              letterSpacing: '0.05em', boxShadow: '0 0 24px rgba(0,212,255,0.3)',
            }}>
              Register for Camp →
            </Link>
            <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--text-dim)' }}>Spots are limited</div>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section style={{ padding: '4rem 1.5rem', background: 'var(--dark)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// Our Supporters</div>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>Sponsors & Partners</h2>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem', flexWrap: 'wrap', marginBottom: '2rem', opacity: 0.6 }}>
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=132,fit=crop/AoP6qzaakqczVKbE/getlargeheaderlogo-removebg-preview-YNqNo3kJoVcwNgM9.png" alt="Sponsor" style={{ height: '50px', width: 'auto', filter: 'brightness(10) grayscale(1)' }} />
          </div>
          <Link to="/sponsorship" style={{ color: 'var(--fire)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, borderBottom: '1px solid rgba(255,69,0,0.3)', paddingBottom: '2px' }}>
            Become a sponsor →
          </Link>
        </div>
      </section>
    </main>
  )
}
