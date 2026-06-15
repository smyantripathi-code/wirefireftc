import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/fundraising')({
  component: FundraisingPage,
})

const reviews = [
  { name: 'Jenny', area: 'First Addition', text: 'We had a great experience! The Wire Fire team showed up as scheduled and quickly got to work. They left it clean and smelling fresh. We\'d definitely do this again!' },
  { name: 'Carol', area: 'First Addition', text: 'Very good experience with perfect communication. They cleaned our garbage bin, inside and out, and it\'s now shiny like new. Kind and respectful. Looking forward to the next cleaning!' },
  { name: 'Dean', area: 'First Addition', text: 'The WireFireFTC team did an outstanding job. It is so nice to have clean, sweet-smelling cans again. I\'d highly recommend them to anyone!' },
  { name: 'Jane', area: 'First Addition', text: 'I came home to sparkling clean cans — which desperately needed it. I don\'t know how they accomplished this, but my garbage cans seriously looked new again. Kudos to the team!' },
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

  const handleGCSubmit = () => {
    if (!gcForm.email) return
    const mailto = `mailto:wirefireftc@gmail.com?subject=Garbage Can Cleaning Request&body=Name: ${gcForm.name}%0AAddress: ${gcForm.address}%0AEmail: ${gcForm.email}%0AMessage: ${gcForm.message}`
    window.open(mailto)
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
            FTC is not just about engineering. We're learning outreach, accounting, and how to build a self-sustaining organization. Our goal is $15,000 for the 2024–2025 season. Stretch goal: $30,000.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ background: 'rgba(255,69,0,0.08)', border: '1px solid rgba(255,69,0,0.2)', borderRadius: '0.5rem', padding: '1rem 1.5rem', textAlign: 'center' }}>
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
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>// How We Earn</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
            {[
              { icon: '🗑️', title: 'Garbage Can Cleaning', desc: 'We pressure wash and clean your garbage cans on a donation basis. Community loved.' },
              { icon: '🖨️', title: '3D Printing', desc: 'We\'ll occasionally take custom 3D print projects for clients.' },
              { icon: '🏷️', title: 'Virtual Garage Sale', desc: 'We accept donated items throughout the season and sell them on eBay and local social media.' },
              { icon: '🤝', title: 'Corporate Partnerships', desc: 'We seek local and corporate sponsors who want to support STEM and our mission.' },
            ].map(m => (
              <div key={m.title} style={{
                background: 'var(--dark-card)', border: '1px solid var(--dark-border)',
                borderRadius: '0.75rem', padding: '1.5rem',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,69,0,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--dark-border)')}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{m.icon}</div>
                <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.9rem', marginBottom: '0.4rem' }}>{m.title}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.5 }}>{m.desc}</div>
              </div>
            ))}
          </div>

          {/* Donate CTA */}
          <div style={{ background: 'linear-gradient(135deg, rgba(255,69,0,0.08), rgba(255,140,0,0.05))', border: '1px solid rgba(255,69,0,0.2)', borderRadius: '1rem', padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, color: 'var(--white)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>Direct Donations</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                We're a 501(c)(3) through Lake Oswego Robotics. All donations are tax-deductible. Please email us your name and amount so it can be allocated to Team Wire Fire.
              </p>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>EIN: 46-1308704 · Tax-exempt since Sept. 2014</div>
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
                boxShadow: '0 0 20px rgba(255,69,0,0.3)',
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
              Raising funds by doing it ourselves. We pressure wash and scrub your garbage cans — it's unconventional, but our community loves it.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {[
                { type: 'Standard', desc: 'Pressure wash, brush scrub, 30 Second Cleaner + degreaser' },
                { type: 'Eco-Friendly', desc: 'Pressure wash, brush scrub, Odoban Eucalyptus + Super Green' },
                { type: 'No Chemicals', desc: 'Pressure wash and scrub only — will not disinfect, takes more time' },
              ].map(opt => (
                <div key={opt.type} style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '0.5rem', padding: '0.875rem 1rem' }}>
                  <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '0.85rem', marginBottom: '0.2rem' }}>{opt.type}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{opt.desc}</div>
                </div>
              ))}
            </div>
            <div style={{ background: 'rgba(255,69,0,0.06)', border: '1px solid rgba(255,69,0,0.15)', borderRadius: '0.5rem', padding: '1rem' }}>
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
              <button onClick={handleGCSubmit} style={{
                background: 'linear-gradient(135deg, var(--fire), var(--fire-glow))',
                color: 'white', border: 'none', borderRadius: '0.4rem',
                padding: '0.85rem', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer',
                boxShadow: '0 0 16px rgba(255,69,0,0.3)',
              }}>
                Request Service →
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
          <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.25rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem' }}>🏷️ Donate Items — We Sell Them</h2>
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
