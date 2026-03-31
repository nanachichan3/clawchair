import React, { useState } from 'react'

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section id="order" className="section-padding relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA */}
        <div className="relative mb-16">
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-neon-cyan/20 via-neon-purple/20 to-neon-magenta/20 rounded-full blur-3xl"></div>
          </div>
          
          <h2 className="font-orbitron text-4xl md:text-6xl font-black mb-6">
            Ready to <span className="gradient-text text-glow-cyan">Transform</span> Your Life?
          </h2>
          <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
            Join the waitlist for the most significant human-computer interface since the smartphone. 
            Early adopters get 40% off and lifetime software updates.
          </p>
          
          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-colors"
              required
            />
            <button 
              type="submit"
              className={`btn-primary whitespace-nowrap ${submitted ? 'bg-green-500 hover:bg-green-600' : ''}`}
            >
              {submitted ? '✓ Joined!' : 'Join Waitlist'}
            </button>
          </form>
          
          <p className="text-gray-500 text-sm mt-4">
            No spam. Unsubscribe anytime. We respect your inbox.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {[
            { icon: '🔒', text: 'Secure Checkout' },
            { icon: '🚚', text: 'Free Global Shipping' },
            { icon: '⭐', text: '30-Day Returns' },
            { icon: '💳', text: 'Flexible Payment' },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-400">
              <span className="text-xl">{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Final Pitch */}
        <div className="glass rounded-3xl p-8 md:p-12 border border-white/10">
          <div className="text-6xl mb-6">🪑</div>
          <h3 className="font-orbitron text-2xl font-bold mb-4">
            It's Time to <span className="text-neon-magenta">Evolve</span>
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            The Matrix isn't about escaping reality. It's about <span className="text-white">augmenting</span> your ability 
            to <span className="text-neon-cyan">create, build, and achieve</span>. ClawChair is your throne for the next 
            evolution of human productivity.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="btn-primary text-lg px-10 py-4">
              Pre-Order for $4,999
            </button>
            <button className="btn-secondary text-lg px-10 py-4">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
