```tsx
import { Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Team', to: '/team' },
  { label: 'History', to: '/history' },
  { label: 'Community', to: '/community' },
  { label: 'Robotics', to: '/robotics' },
  { label: 'Fundraising', to: '/fundraising' },
  { label: 'Sponsorship', to: '/sponsorship' },
  { label: 'Join', to: '/join' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)

      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }

    handleResize()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(14,10,14,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255,0,106,0.2)'
          : 'none',
        transition: 'all 0.3s ease',
        padding: '0 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '68px',
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
          }}
        >
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=94,fit=crop,q=95/AoP6qzaakqczVKbE/wire-fire-8-A85ZekpvJyIowDOR.png"
            alt="Wirefire"
            style={{ height: '36px', width: 'auto' }}
          />
          <div>
            <div
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--white)',
                letterSpacing: '0.05em',
                lineHeight: 1,
              }}
            >
              WIRE
              <span style={{ color: 'var(--fire)' }}>
                FIRE
              </span>
            </div>
            <div
              style={{
                fontSize: '0.55rem',
                letterSpacing: '0.2em',
                color: 'var(--text-muted)',
                fontWeight: 500,
                textTransform: 'uppercase',
              }}
            >
              FTC Team #23260
            </div>
          </div>
        </Link>

        {!isMobile ? (
          <nav
            style={{
              display: 'flex',
              gap: '0.1rem',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {navItems.map(item => (
              <Link
                key={item.to}
                to={item.to}
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-muted)',
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  padding: '0.4rem 0.65rem',
                  borderRadius: '0.35rem',
                  transition: 'all 0.15s',
                  letterSpacing: '0.03em',
                }}
                activeProps={{
                  style: {
                    color: 'var(--fire)',
                    background:
                      'rgba(255,0,106,0.08)',
                  },
                }}
              >
                {item.label}
              </Link>
            ))}

            <a
              href="https://www.paypal.com/us/fundraiser/charity/4550355"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: '0.5rem',
                background:
                  'linear-gradient(135deg, var(--fire), var(--fire-glow))',
                color: 'white',
                textDecoration: 'none',
                padding: '0.45rem 1.1rem',
                borderRadius: '0.4rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
              }}
            >
              Donate
            </a>
          </nav>
        ) : (
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '1.8rem',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              ☰
            </button>

            {menuOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '55px',
                  right: 0,
                  width: '240px',
                  background: 'rgba(14,10,14,0.98)',
                  border:
                    '1px solid rgba(255,0,106,0.2)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(16px)',
                  overflow: 'hidden',
                  boxShadow:
                    '0 12px 40px rgba(0,0,0,0.4)',
                }}
              >
                {navItems.map(item => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: 'block',
                      padding: '0.9rem 1rem',
                      textDecoration: 'none',
                      color: 'white',
                      borderBottom:
                        '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    {item.label}
                  </Link>
                ))}

                <a
                  href="https://www.paypal.com/us/fundraiser/charity/4550355"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    margin: '0.75rem',
                    textAlign: 'center',
                    background:
                      'linear-gradient(135deg, var(--fire), var(--fire-glow))',
                    color: 'white',
                    textDecoration: 'none',
                    padding: '0.8rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                  }}
                >
                  Donate
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
```
