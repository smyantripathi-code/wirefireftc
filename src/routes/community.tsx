import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/community')({
  component: CommunityPage,
})

const outreachEvents = [
  { title: 'Season Kickoff Event', desc: 'Co-hosted the 2024 FTC Season Kickoff at Lake Oswego High School with 150+ attendees and 10+ teams. Featured educational presentations on CAD, Odometry, Engineering Portfolios, and more.', icon: '🏅', year: '2024' },
  { title: '2025 FTC Summer Camp', desc: 'Running a multi-day FTC robotics camp to introduce younger students to FIRST Tech Challenge - covering robot building, programming, and competition strategy.', icon: '🏆', year: '2025' },
  { title: 'Community Demos', desc: 'We bring our robot to local schools, libraries, and community events to demonstrate what FTC robotics looks like and inspire the next generation of builders and coders.', icon: '📍', year: 'Ongoing' },
  { title: 'Iron Mountain League Outreach', desc: 'Earned 2nd Place Reach Award at the 2025 Oregon State Championship for our ongoing commitment to recruiting new members and growing participation in FTC across the region.', icon: '🏆', year: '2025' },
]

const partners: { name: string; type: string; year: string; logo: string }[] = []

export default function CommunityPage() {
  const scrollToForm = () => {
    document.getElementById('collaborate-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main style={{ paddingTop: '68px' }}>

      {/* Hero */}
      <section style={{ padding: '4rem 1.5rem 3rem', background: 'var(--dark-mid)', borderBottom: '1px solid var(--dark-border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--fire), transparent)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// Community & Outreach</div>
          <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--white)', marginBottom: '0.75rem' }}>Community</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.75rem' }}>
            Wire Fire is more than a competition team. We run events, mentor other teams, and bring robotics into our community - because inspiring the next generation is part of our mission.
          </p>
          <button onClick={scrollToForm} style={{
            background: 'linear-gradient(135deg, var(--fire), var(--fire-glow))',
            color: 'white', border: 'none', borderRadius: '0.5rem',
            padding: '0.85rem 1.75rem', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer',
            letterSpacing: '0.04em',
          }}>
            Collaborate With Us
          </button>
        </div>
      </section>

      {/* Outreach */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>// Outreach Activities</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {outreachEvents.map((o, i) => (
              <div key={i} style={{
                background: 'var(--dark-card)', border: '1px solid var(--dark-border)',
                borderRadius: '0.75rem', padding: '1.5rem',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,0,106,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--dark-border)')}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.75rem' }}>{o.icon}</span>
                  <span style={{ background: 'rgba(255,0,106,0.1)', border: '1px solid rgba(255,0,106,0.2)', color: 'var(--fire)', fontSize: '0.65rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '0.25rem' }}>{o.year}</span>
                </div>
                <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{o.title}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.6 }}>{o.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Logos */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark-mid)', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>// Partners & Sponsors</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
            {partners.map((p, i) => (
              <div key={i} style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '0.75rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', textAlign: 'center' }}>
                <img src={p.logo} alt={p.name} style={{ height: '52px', width: 'auto', objectFit: 'contain', filter: 'brightness(10) grayscale(1)', opacity: 0.55 }} />
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--white)', fontSize: '0.82rem', marginBottom: '0.2rem' }}>{p.name}</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--fire)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{p.type} · {p.year}</div>
                </div>
              </div>
            ))}
            {/* Become a partner CTA card */}
            <div style={{ background: 'transparent', border: '2px dashed rgba(255,0,106,0.25)', borderRadius: '0.75rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textAlign: 'center', cursor: 'pointer' }}
              onClick={scrollToForm}>
              <div style={{ fontSize: '1.75rem' }}>+</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>Your logo here?</div>
              <div style={{ color: 'var(--fire)', fontSize: '0.78rem', fontWeight: 700 }}>Become a partner</div>
            </div>
          </div>

          {/* Collaborate CTA */}
          <div style={{ background: 'rgba(255,0,106,0.06)', border: '1px solid rgba(255,0,106,0.2)', borderRadius: '0.75rem', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, color: 'var(--white)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>Want to collaborate?</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Whether you're a school, team, business, or community group - we'd love to connect.</div>
            </div>
            <button onClick={scrollToForm} style={{ background: 'linear-gradient(135deg, var(--fire), var(--fire-glow))', color: 'white', border: 'none', borderRadius: '0.4rem', padding: '0.75rem 1.5rem', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              Collaborate With Us
            </button>
          </div>
        </div>
      </section>

      {/* Collaboration Google Form */}
      <section id="collaborate-form" style={{ padding: '3.5rem 1.5rem', background: 'var(--dark)', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// Collaborate</div>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.75rem' }}>Work With Wire Fire</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.8, marginBottom: '1.75rem', maxWidth: '540px' }}>
            Interested in a demo, scrimmage, mentorship, or other partnership? Fill out the form below and we'll get back to you within 48 hours.
          </p>
          <iframe
            src="https://forms.gle/d8MW1heTJ6eZ9wTo6"
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Wire Fire Collaboration Form"
            style={{
              borderRadius: '0.75rem',
              border: '1px solid var(--dark-border)',
              background: 'white',
              display: 'block',
            }}
          >
            Loading form...
          </iframe>
        </div>
      </section>
    </main>
  )
}
