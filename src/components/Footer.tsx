import { Link } from '@tanstack/react-router'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark-mid)', borderTop: '1px solid var(--dark-border)', padding: '3rem 1.5rem 2rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
          <div>
            <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              WIRE<span style={{ color: 'var(--fire)' }}>FIRE</span> FTC
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Team #23260 · Lake Oswego, Oregon<br />
              Middle & High School FIRST Tech Challenge
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a href="https://www.instagram.com/wirefireftc23260/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.75rem', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fire)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>Instagram</a>
              <span style={{ color: 'var(--text-dim)' }}>·</span>
              <a href="https://www.youtube.com/@Wirefire_FTC" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.75rem', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fire)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>YouTube</a>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--fire)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem' }}>Navigate</div>
            {[['/', 'Home'], ['/team', 'Team'], ['/robotics', 'Robotics'], ['/fundraising', 'Fundraising'], ['/sponsorship', 'Sponsorship'], ['/camp', '2025 FTC Camp']].map(([to, label]) => (
              <Link key={to} to={to} style={{ display: 'block', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.8rem', lineHeight: 2, transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--white)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                {label}
              </Link>
            ))}
          </div>
          <div>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--fire)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem' }}>Contact</div>
            <a href="mailto:wirefireftc@gmail.com" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.8rem', display: 'block', lineHeight: 2 }}>wirefireftc@gmail.com</a>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 2 }}>Lake Oswego High School</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 2 }}>Lake Oswego, Oregon</div>
            <div style={{ marginTop: '0.75rem' }}>
              <a href="https://www.paypal.com/us/fundraiser/charity/4550355" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-block', background: 'linear-gradient(135deg, var(--fire), var(--fire-glow))',
                color: 'white', textDecoration: 'none', padding: '0.45rem 1rem',
                borderRadius: '0.35rem', fontSize: '0.75rem', fontWeight: 700,
              }}>
                Donate via PayPal →
              </a>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--fire)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem' }}>Nonprofit Info</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 2 }}>
              <div>501(c)(3) Tax-Exempt</div>
              <div>EIN: 46-1308704</div>
              <div>Lake Oswego Robotics</div>
              <div style={{ marginTop: '0.25rem', fontSize: '0.7rem', color: 'var(--text-dim)' }}>Donations are tax-deductible</div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--dark-border)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>© 2025 Wire Fire FTC #23260. All rights reserved.</span>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>Built by the team 🔥</span>
        </div>
      </div>
    </footer>
  )
}
