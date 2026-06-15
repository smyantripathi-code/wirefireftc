import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/team')({
  component: TeamPage,
})

const members = [
  { name: 'Lucas', roles: ['3D Print', 'Code', 'Inventory', 'Website', 'Driver'], bio: 'I play tennis, bike, race in video games, and sleep.' },
  { name: 'Neil', roles: ['Build', 'Human Player', 'Social Media'], bio: 'I play soccer, track, and play video games.' },
  { name: 'Chase', roles: ['3D Print', 'Fundraising', 'Social Media', 'Drive Coach', 'Video Edit'], bio: 'I run Cross Country, Wrestling, Choir, play video games, and make YouTube videos.' },
  { name: 'Felix', roles: ['Build', 'CAD', 'Inventory', 'Secretary', 'Engineering Book'], bio: 'I run Cross Country & Track, build things, and play percussion in band.' },
  { name: 'Gavin', roles: ['Build', 'Code', 'Driver', '3D Print'], bio: 'I play tennis and play lots of racing video games.' },
  { name: 'Tyler', roles: ['Code', 'Engineering Book', 'Drive Coach'], bio: 'I like video games, math, and I enjoy science.' },
  { name: 'Olin', roles: ['Outreach Coordinator', 'Accounting', 'Fundraising', 'Social Media', 'Website'], bio: 'I run Cross Country & Track, Wrestling, play video games, and swim.' },
  { name: 'Sierra', roles: ['3D Print', 'Website', 'Social Media'], bio: 'I play Soccer and have ran track.' },
  { name: 'Monica', roles: ['Build', '3D Print', 'Social Media'], bio: 'I play softball, soccer, and volleyball, and I like to swim. I love to travel!' },
  { name: 'Jay', roles: ['CAD', '3D Print', 'Code'], bio: 'I play tennis and the violin. I started a small business.' },
  { name: 'Tomas', roles: ['Finance', 'Fundraising', 'Code'], bio: 'I play tennis and enjoy travel.' },
  { name: 'David', roles: ['Build', 'Business'], bio: 'I play tennis.' },
]

const coaches = [
  { name: 'Yu', role: 'Coach', expertise: 'Electrical Engineering' },
  { name: 'Anjum', role: 'Coach', expertise: 'Astronomy, Accounting & Education' },
  { name: 'David', role: 'Mentor', expertise: 'Business, Finance & Coaching' },
]

const roleColors: Record<string, string> = {
  'Code': 'var(--electric)',
  'Build': 'var(--fire)',
  'Driver': '#FFD700',
  'CAD': '#A78BFA',
  'Website': '#34D399',
  '3D Print': '#F472B6',
  'Social Media': '#FB923C',
}

function RoleBadge({ role }: { role: string }) {
  const color = Object.keys(roleColors).find(k => role.includes(k))
  const c = color ? roleColors[color] : 'var(--text-muted)'
  return (
    <span style={{
      background: `${c}15`, color: c, border: `1px solid ${c}30`,
      borderRadius: '0.25rem', padding: '0.15rem 0.5rem',
      fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.04em', whiteSpace: 'nowrap',
    }}>{role}</span>
  )
}

function TeamPage() {
  return (
    <main style={{ paddingTop: '68px' }}>
      {/* Hero */}
      <section style={{
        padding: '4rem 1.5rem 3rem',
        background: 'linear-gradient(180deg, var(--dark-mid) 0%, var(--dark) 100%)',
        borderBottom: '1px solid var(--dark-border)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--fire), transparent)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// Team Roster</div>
          <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--white)', marginBottom: '0.75rem' }}>
            Wire Fire <span style={{ color: 'var(--fire)' }}>#23260</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.7, fontSize: '0.95rem' }}>
            A dynamic team of middle and high school students from Lake Oswego, Oregon, dedicated to excelling in FTC through engineering, programming, and innovation.
          </p>
        </div>
      </section>

      {/* Members */}
      <section style={{ padding: '3rem 1.5rem', background: 'var(--dark)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>
            // {members.length} Team Members
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {members.map((m, i) => (
              <div key={m.name} style={{
                background: 'var(--dark-card)', border: '1px solid var(--dark-border)',
                borderRadius: '0.75rem', padding: '1.25rem',
                transition: 'border-color 0.2s, transform 0.15s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,69,0,0.3)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--dark-border)'; e.currentTarget.style.transform = 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%', flexShrink: 0,
                    background: `linear-gradient(135deg, var(--fire) ${i % 2 === 0 ? '0%' : '30%'}, var(--dark-mid) 100%)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: '1rem', color: 'white',
                  }}>
                    {m.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.95rem' }}>{m.name}</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.1em' }}>TEAM MEMBER</div>
                  </div>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', lineHeight: 1.5, marginBottom: '0.75rem', fontStyle: 'italic' }}>"{m.bio}"</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                  {m.roles.map(r => <RoleBadge key={r} role={r} />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section style={{ padding: '3rem 1.5rem', background: 'var(--dark-mid)', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>// Coaches & Mentors</div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {coaches.map(c => (
              <div key={c.name} style={{
                background: 'var(--dark-card)', border: '1px solid rgba(255,69,0,0.15)',
                borderRadius: '0.75rem', padding: '1.25rem 1.5rem', minWidth: '200px',
              }}>
                <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, color: 'var(--white)', marginBottom: '0.25rem' }}>{c.name}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{c.role}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{c.expertise}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
