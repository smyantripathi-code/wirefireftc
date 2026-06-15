import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/camp')({
  component: CampPage,
})

function CampPage() {
  const [form, setForm] = useState({ parentName: '', lastName: '', email: '', studentInfo: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (!form.email || !form.parentName) return
    const mailto = `mailto:wirefireftc@gmail.com?subject=2025 FTC Camp Registration&body=Parent Name: ${form.parentName} ${form.lastName}%0AEmail: ${form.email}%0AStudent Info: ${form.studentInfo}`
    window.open(mailto)
    setSubmitted(true)
  }

  return (
    <main style={{ paddingTop: '68px' }}>
      {/* Hero */}
      <section style={{
        padding: '4rem 1.5rem 3rem', position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--dark-mid) 0%, #0A0A1F 100%)',
        borderBottom: '1px solid var(--dark-border)',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--electric), transparent)' }} />
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--electric)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// Summer 2025</div>
          <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--white)', marginBottom: '0.5rem' }}>
            2025 FTC Camp
          </h1>
          <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(1rem, 3vw, 1.5rem)', color: 'var(--electric)', marginBottom: '1rem' }}>
            Build. Code. Design. Compete.
          </div>
          <p style={{ color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Join WirefireFTC for a week of hands-on learning, innovation, and fun. Open to students ages 12–16.
          </p>
        </div>
      </section>

      {/* Details strip */}
      <section style={{ background: 'rgba(0,212,255,0.04)', borderBottom: '1px solid rgba(0,212,255,0.1)', padding: '1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            ['📅', 'Dates', 'July 21–25, 2025'],
            ['🕐', 'Time', '1:00 PM – 5:00 PM daily'],
            ['🏫', 'Location', 'Lake Oswego High School'],
            ['👥', 'Ages', '12–16'],
            ['💰', 'Cost', '$350 per student'],
            ['👨‍🏫', 'Ratio', '2:1 student-to-instructor'],
          ].map(([icon, label, val]) => (
            <div key={label as string} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.25rem', marginBottom: '0.2rem' }}>{icon}</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--electric)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>{label}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--white)', fontWeight: 600 }}>{val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What campers learn */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>// Curriculum</div>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--white)', marginBottom: '2rem' }}>What Campers Will Learn</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {[
              {
                icon: '🧰', title: 'Build', color: 'var(--fire)',
                items: ['Chassis fundamentals', 'Wheels, gears, and drivetrains', 'Motors, servos, and wiring', 'Clean wire management'],
              },
              {
                icon: '🧠', title: 'Code', color: 'var(--electric)',
                items: ['Programming movement basics', 'Code logic for robot behavior', 'Hands-on control system integration'],
              },
              {
                icon: '🎨', title: 'Design', color: '#A78BFA',
                items: ['Intro to CAD', 'Design workflows for robot parts', 'Planning for real-world builds'],
              },
              {
                icon: '🏗', title: 'Engineering', color: '#34D399',
                items: ['Engineering design process', 'Planning and iteration', 'Testing and improving designs'],
              },
            ].map(track => (
              <div key={track.title} style={{
                background: 'var(--dark-card)', border: `1px solid ${track.color}25`,
                borderRadius: '0.75rem', padding: '1.5rem',
                borderTop: `3px solid ${track.color}`,
              }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{track.icon}</div>
                <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, color: track.color, fontSize: '0.9rem', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>{track.title}</div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {track.items.map(item => (
                    <li key={item} style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.8, display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                      <span style={{ color: track.color, flexShrink: 0, marginTop: '0.1rem' }}>›</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section style={{ padding: '3rem 1.5rem', background: 'var(--dark-mid)', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.3rem', fontWeight: 700, color: 'var(--white)', marginBottom: '1.5rem' }}>✅ Why Choose WirefireFTC Camp?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
            {['Real FTC robots and tools', 'Experienced, passionate instructors', 'No experience necessary', 'Small group instruction (2:1 ratio)', 'Focus on creativity, teamwork & tech confidence', 'Convenient Lake Oswego location'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', padding: '0.875rem', background: 'var(--dark-card)', borderRadius: '0.5rem', border: '1px solid var(--dark-border)' }}>
                <span style={{ color: 'var(--electric)', flexShrink: 0, fontSize: '0.9rem' }}>✓</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.4 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign up form */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark)', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--electric)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// Registration</div>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem' }}>Sign Up</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '2rem' }}>Reserve a spot below. Space is limited.</p>

          {submitted ? (
            <div style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.25)', borderRadius: '0.75rem', padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>✅</div>
              <div style={{ fontFamily: "'Orbitron', sans-serif", color: 'var(--electric)', fontWeight: 700, marginBottom: '0.5rem' }}>Email Opened!</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Send the pre-filled email to complete your registration. We'll confirm your spot within 48 hours.</div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[['parentName', 'Parent First Name *', 'text'], ['lastName', 'Parent Last Name *', 'text']].map(([key, label, type]) => (
                  <div key={key}>
                    <label style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{label}</label>
                    <input type={type} value={form[key as keyof typeof form]}
                      onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                      style={{ width: '100%', background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '0.4rem', padding: '0.65rem 0.875rem', color: 'var(--white)', fontSize: '0.875rem', outline: 'none' }} />
                  </div>
                ))}
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Email *</label>
                <input type="email" value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  style={{ width: '100%', background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '0.4rem', padding: '0.65rem 0.875rem', color: 'var(--white)', fontSize: '0.875rem', outline: 'none' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Student Information (name, age, grade, experience)</label>
                <textarea value={form.studentInfo}
                  onChange={e => setForm(f => ({ ...f, studentInfo: e.target.value }))}
                  rows={3}
                  style={{ width: '100%', background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '0.4rem', padding: '0.65rem 0.875rem', color: 'var(--white)', fontSize: '0.875rem', outline: 'none', resize: 'vertical' }} />
              </div>
              <button onClick={handleSubmit} style={{
                background: 'linear-gradient(135deg, var(--electric-dim), var(--electric))',
                color: 'var(--dark)', border: 'none', borderRadius: '0.4rem',
                padding: '0.9rem', fontWeight: 800, fontSize: '0.95rem', cursor: 'pointer',
                letterSpacing: '0.04em', fontFamily: "'Orbitron', sans-serif",
                transition: 'opacity 0.2s',
              }}>
                Submit Registration →
              </button>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textAlign: 'center' }}>Clicking will open your email client. Send the email to complete registration.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
