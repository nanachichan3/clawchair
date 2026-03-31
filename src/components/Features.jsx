import React from 'react'

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Triple Display System',
    description: 'Three high-resolution screens provide immersive multitasking. Monitor your AI agents, code, entertainment, and communications simultaneously.',
    color: 'cyan'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI-Native Platform',
    description: 'OpenClaw pre-installed. Run local LLMs, orchestrate agents, and automate your entire digital life. Your personal AI army, always online.',
    color: 'purple'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Medical-Grade Massage',
    description: 'Professional shiatsu, deep tissue, and AI-adaptive massage. The chair knows your stress levels and adjusts automatically.',
    color: 'magenta'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Self-Powered Mobility',
    description: 'Quiet electric drive system. Move between rooms or positions without leaving. Climate control keeps you comfortable.',
    color: 'cyan'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    title: 'Sleep Optimization',
    description: 'Flat-bed conversion with temperature control, aromatherapy, and white noise. Wake refreshed, ready to conquer.',
    color: 'purple'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Fort Knox Security',
    description: 'Hardware-level encryption, biometric lock, and air-gapped AI processing. Your digital life stays yours.',
    color: 'magenta'
  }
]

const colorMap = {
  cyan: {
    border: 'border-neon-cyan/30',
    icon: 'text-neon-cyan',
    bg: 'bg-neon-cyan/10',
    hover: 'group-hover:border-neon-cyan/60',
    glow: 'group-hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]'
  },
  magenta: {
    border: 'border-neon-magenta/30',
    icon: 'text-neon-magenta',
    bg: 'bg-neon-magenta/10',
    hover: 'group-hover:border-neon-magenta/60',
    glow: 'group-hover:shadow-[0_0_30px_rgba(255,0,255,0.3)]'
  },
  purple: {
    border: 'border-neon-purple/30',
    icon: 'text-neon-purple',
    bg: 'bg-neon-purple/10',
    hover: 'group-hover:border-neon-purple/60',
    glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]'
  }
}

export default function Features() {
  return (
    <section id="features" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-neon-cyan font-orbitron text-sm tracking-widest mb-4 block">FEATURES</span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">ClawChair</span>?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            It's not just a chair. It's a complete life transformation. Everything you need, exactly where you need it.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colors = colorMap[feature.color]
            return (
              <div
                key={index}
                className={`group relative glass rounded-2xl p-8 border ${colors.border} ${colors.hover} ${colors.glow} transition-all duration-500 card-hover`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 ${colors.bg} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`${colors.icon} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-orbitron text-xl font-bold mb-3 text-white group-hover:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
                
                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${colors.bg} rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
