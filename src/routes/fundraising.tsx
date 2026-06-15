import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/fundraising')({
  component: FundraisingPage,
})

const reviews = [
  { name: 'Jenny', area: 'First Addition', text: 'We had a great experience! The Wire Fire team showed up as scheduled and quickly got to work. They left it clean and smelling fresh. We\'d definitely do this again!' },
  { name: 'Carol', area: 'First Addition', text: 'Very good experience with perfect communication. They cleaned our garbage bin, inside and out, and it\'s now shiny like new. Kind and respectful. Looking forward to the next cleaning!' },
  { name: 'Dean', area: 'First Addition', text: 'The WireFireFTC team did an outstanding job. It is so nice to have clean, sweet-smelling cans again. I\'d highly recommend them to anyone!' },
  { name: 'Jane', area: 'First Addition', text: 'I came home to sparkling clean cans - which desperately needed it. I don\'t know how they accomplished this, but my garbage cans seriously looked new again. Kudos to the team!' },
]

const donationItems = [
  { amount: '$600', item: 'Registration Fees' },
  { amount: '$308', item: 'Control Hub' },
  { amount: '$227', item: 'Mecanum Wheels' },
  { amount: '$105', item: 'Robot Motor' },
  { amount: '$42', item: 'Web Cam' },
]

const garageSaleItems = ['Pet Collars', 'Camping Equipment', 'Shoes', 'Auto Parts', 'Baby Supplies', 'CDs & DVDs', 'Board Games', 'RC Toys', 'Musical Instruments', 'Kitchenware', 'Cameras', 'Clothing', 'Video Games', 'Sporting Goods', 'Mobile Phone & Accessories', 'Jewelry & Watches', 'Books', 'Home & Garden', 'Makeup', 'Small Fitness Equipment', 'Collectibles', 'Small Furniture']

function FundraisingPage() {
  const [gcForm, setGcForm] = useState({ name: '', address: '', email: '', message: '' })

  const [gcStatus, setGcStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleGCSubmit = async () => {
    if (!gcForm.email || !gcForm.address) return
    setGcStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'WIREFIRE_PLACEHOLDER',
          subject: 'Garbage Can Cleaning Request',
          to: 'wirefireftc@gmail.com',
          from_name: gcForm.name || 'Website Visitor',
          reply_to: gcForm.email,
          name: gcForm.name,
          address: gcForm.address,
          email: gcForm.email,
          message: gcForm.message,
          botcheck: '',
        }),
      })
      const data = await res.json()
      if (data.success) { setGcStatus('sent'); return }
    } catch { /* fall through */ }
    // Fallback to mailto
    const body = `Name: ${gcForm.name}\nAddress: ${gcForm.address}\nEmail: ${gcForm.email}\n\nNotes:\n${gcForm.message}`
    window.open(`mailto:wirefireftc@gmail.com?subject=Garbage Can Cleaning Request&body=${encodeURIComponent(body)}`)
    setGcStatus('sent')
  }

  return (
    <main style={{ paddingTop: '68px' }}>
      {/* Hero */}
      <section style={{ padding: '4rem 1.5rem 3rem', background: 'var(--dark-mid)', borderBottom: '1px solid var(--dark-border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, var(--fire), transparent)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>// Finance</div>
          <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--white)', marginBottom: '0.75rem' }}>Fundraising</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.7, fontSize: '0.95rem' }}>
            FTC is not just about engineering. We're learning outreach, accounting, and how to build a self-sustaining organization. Our goal is $15,000 for the 2026-2027 season. Stretch goal: $30,000.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ background: 'rgba(255,0,106,0.08)', border: '1px solid rgba(255,0,106,0.2)', borderRadius: '0.5rem', padding: '1rem 1.5rem', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.4rem', fontWeight: 900, color: 'var(--fire)' }}>$15K</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Season Goal</div>
            </div>
            <div style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.15)', borderRadius: '0.5rem', padding: '1rem 1.5rem', textAlign: 'center' }}>
              <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.4rem', fontWeight: 900, color: 'var(--electric)' }}>$30K</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Stretch Goal</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fundraising methods */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>// How We Earn</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.95rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>🗑️</span> Garbage Can Cleaning
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '0' }}>
                Our most active fundraiser. We pressure wash and scrub your garbage cans using professional cleaning products on a donation basis. The community response has been overwhelmingly positive, with repeat customers every season.
              </p>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.95rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>🏷️</span> Virtual Garage Sale
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.75 }}>
                We accept donated items from community members throughout the season and resell them on eBay and local social media. Drop off or contact us to arrange a pickup.
              </p>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.95rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>🤝</span> Corporate Partnerships
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.75 }}>
                We partner with local businesses and corporations who want to support STEM education. Sponsors receive recognition on our uniforms, website, and social channels.
              </p>
            </div>
          </div>

          {/* Donate CTA */}
          <div style={{ borderTop: '1px solid var(--dark-border)', paddingTop: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', alignItems: 'start' }}>
            <div>
              <h3 style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, color: 'var(--white)', fontSize: '1rem', marginBottom: '0.75rem' }}>Direct Donations</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.8, marginBottom: '0.75rem' }}>
                Wire Fire operates under Lake Oswego Robotics, a 501(c)(3) nonprofit. All donations are fully tax-deductible. After donating, please email us your name and the amount so it can be properly allocated to Team Wire Fire.
              </p>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>EIN: 46-1308704 · Tax-exempt since September 2014</div>
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 700 }}>What Your Donation Covers</div>
              {donationItems.map(d => (
                <div key={d.item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4rem 0', borderBottom: '1px solid var(--dark-border)' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{d.item}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--fire)', fontSize: '0.85rem', fontWeight: 700 }}>{d.amount}</span>
                </div>
              ))}
              <a href="https://www.paypal.com/us/fundraiser/charity/4550355" target="_blank" rel="noopener noreferrer" style={{
                display: 'block', marginTop: '1rem', textAlign: 'center',
                background: 'linear-gradient(135deg, var(--fire), var(--fire-glow))',
                color: 'white', textDecoration: 'none', padding: '0.75rem',
                borderRadius: '0.4rem', fontWeight: 700, fontSize: '0.875rem',
              }}>
                Donate via PayPal →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Garbage can cleaning */}
      <section style={{ padding: '3.5rem 1.5rem', background: 'var(--dark-mid)', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '1rem' }}>// Service</div>
            <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.75rem' }}>🗑️ Garbage Can Cleaning</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Raising funds by doing it ourselves. We pressure wash and scrub your garbage cans - it's unconventional, but our community loves it.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {[
                { type: 'Standard', desc: 'Pressure wash, brush scrub, 30 Second Cleaner + degreaser' },
                { type: 'Eco-Friendly', desc: 'Pressure wash, brush scrub, Odoban Eucalyptus + Super Green' },
                { type: 'No Chemicals', desc: 'Pressure wash and scrub only - will not disinfect, takes more time' },
              ].map(opt => (
                <div key={opt.type} style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '0.5rem', padding: '0.875rem 1rem' }}>
                  <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.85rem', marginBottom: '0.2rem' }}>{opt.type}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{opt.desc}</div>
                </div>
              ))}
            </div>
            <div style={{ background: 'rgba(255,0,106,0.06)', border: '1px solid rgba(255,0,106,0.15)', borderRadius: '0.5rem', padding: '1rem' }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--fire)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.5rem' }}>Recommended Donation</div>
              {[['$40', '1 Can'], ['$60', '2 Cans'], ['$70', '3 Cans']].map(([price, label]) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{label}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--fire)', fontWeight: 700 }}>{price}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Request form */}
          <div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', fontFamily: "'JetBrains Mono', monospace", marginBottom: '1rem' }}>// Request Service</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[['name', 'Name', 'text'], ['address', 'Address *', 'text'], ['email', 'Email *', 'email']].map(([key, label, type]) => (
                <div key={key}>
                  <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{label}</label>
                  <input type={type} value={gcForm[key as keyof typeof gcForm]}
                    onChange={e => setGcForm(f => ({ ...f, [key]: e.target.value }))}
                    style={{ width: '100%', background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '0.4rem', padding: '0.65rem 0.875rem', color: 'var(--white)', fontSize: '0.875rem', outline: 'none' }} />
                </div>
              ))}
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Message / Notes</label>
                <textarea value={gcForm.message} onChange={e => setGcForm(f => ({ ...f, message: e.target.value }))} rows={3}
                  style={{ width: '100%', background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '0.4rem', padding: '0.65rem 0.875rem', color: 'var(--white)', fontSize: '0.875rem', outline: 'none', resize: 'vertical' }} />
              </div>
              <button onClick={handleGCSubmit} disabled={gcStatus !== 'idle'} style={{
                background: gcStatus === 'sent' ? 'rgba(255,0,106,0.2)' : 'linear-gradient(135deg, var(--fire), var(--fire-glow))',
                color: gcStatus === 'sent' ? 'var(--fire)' : 'white', border: gcStatus === 'sent' ? '1px solid rgba(255,0,106,0.4)' : 'none',
                borderRadius: '0.4rem', padding: '0.85rem', fontWeight: 700, fontSize: '0.875rem',
                cursor: gcStatus === 'idle' ? 'pointer' : 'default',
              }}>
                {gcStatus === 'idle' ? 'Request Service →' : gcStatus === 'sending' ? 'Sending' : 'Request Sent!'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ padding: '3rem 1.5rem', background: 'var(--dark)', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>// Customer Reviews</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {reviews.map(r => (
              <div key={r.name} style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '0.75rem', padding: '1.25rem' }}>
                <div style={{ color: 'var(--fire)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>★★★★★</div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '0.75rem', fontStyle: 'italic' }}>"{r.text}"</p>
                <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.8rem' }}>{r.name}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>{r.area}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garage sale */}
      <section style={{ padding: '3rem 1.5rem', background: 'var(--dark-mid)', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '1rem' }}>// Virtual Garage Sale</div>
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.25rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem' }}>🏷️ Donate Items - We Sell Them</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.25rem' }}>Drop off or message us for pickup. We accept donations throughout the season and sell on eBay and local social media.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {garageSaleItems.map(item => (
              <span key={item} style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)', color: 'var(--text-muted)', borderRadius: '0.3rem', padding: '0.3rem 0.75rem', fontSize: '0.75rem' }}>{item}</span>
            ))}
          </div>
          <div style={{ marginTop: '1.25rem' }}>
            <a href="mailto:wirefireftc@gmail.com?subject=Garage Sale Donation" style={{ color: 'var(--fire)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}>
              Email us to arrange a drop off →
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
