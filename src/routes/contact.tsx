import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <main style={{ paddingTop: '68px', minHeight: '100vh' }}>
      <section style={{ padding: '4rem 1.5rem', background: 'var(--dark-mid)', borderBottom: '1px solid var(--dark-border)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--fire), transparent)' }} />
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// Get In Touch</div>
          <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: 'var(--white)', marginBottom: '2rem' }}>Contact</h1>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '480px' }}>
            {[
              { icon: '📧', label: 'Email', value: 'wirefireftc@gmail.com', href: 'mailto:wirefireftc@gmail.com' },
              { icon: '📸', label: 'Instagram', value: '@wirefireftc23260', href: 'https://www.instagram.com/wirefireftc23260/' },
              { icon: '▶️', label: 'YouTube', value: '@Wirefire_FTC', href: 'https://www.youtube.com/@Wirefire_FTC' },
              { icon: '💳', label: 'Donate', value: 'PayPal Giving Fund', href: 'https://www.paypal.com/us/fundraiser/charity/4550355' },
            ].map(c => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                color: 'inherit', textDecoration: 'none',
                paddingBottom: '1.25rem', borderBottom: '1px solid var(--dark-border)',
              }}>
                <span style={{ fontSize: '1.25rem', flexShrink: 0, width: '2rem', textAlign: 'center' }}>{c.icon}</span>
                <div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--fire)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.2rem' }}>{c.label}</div>
                  <div style={{ color: 'var(--text)', fontSize: '0.9rem', fontWeight: 500 }}>{c.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
