import React from 'react'

const specs = {
  computing: {
    title: 'Computing',
    items: [
      { name: 'CPU', value: 'AMD Ryzen 9 9950X' },
      { name: 'GPU', value: 'NVIDIA RTX 5090' },
      { name: 'RAM', value: '256GB DDR6' },
      { name: 'Storage', value: '8TB NVMe Gen5' },
      { name: 'AI Accelerator', value: 'Local LLMs up to 405B' },
    ]
  },
  display: {
    title: 'Display',
    items: [
      { name: 'Main Screen', value: '32" 8K OLED' },
      { name: 'Side Screens', value: '2x 15" Touch OLED' },
      { name: 'Resolution', value: '7680x4320' },
      { name: 'Refresh Rate', value: '240Hz' },
    ]
  },
  massage: {
    title: 'Massage System',
    items: [
      { name: 'Rollers', value: '4D Shiatsu Array' },
      { name: 'Airbags', value: '36 Air Cell System' },
      { name: 'Heat Therapy', value: 'Graphene Heating' },
      { name: 'Programs', value: '50+ Auto Programs' },
    ]
  },
  mobility: {
    title: 'Mobility',
    items: [
      { name: 'Drive System', value: 'Electric Wheel Drive' },
      { name: 'Speed', value: '3 km/h indoor' },
      { name: 'Battery', value: '8h autonomous' },
      { name: 'Positioning', value: '360° Rotation' },
    ]
  },
  comfort: {
    title: 'Comfort',
    items: [
      { name: 'Seating', value: 'Adaptive Memory Foam' },
      { name: 'Sleep Mode', value: 'Full Flat Conversion' },
      { name: 'Climate', value: 'Active Heating/Cooling' },
      { name: 'Audio', value: '8.1 Spatial Sound' },
    ]
  }
}

export default function Specs() {
  return (
    <section id="specs" className="section-padding relative bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-neon-magenta font-orbitron text-sm tracking-widest mb-4 block">SPECIFICATIONS</span>
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            Beast Mode <span className="gradient-text">Unleashed</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Enterprise-grade hardware. Medical-level comfort. All in one unit.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(specs).map((category, index) => (
            <div key={index} className="glass rounded-2xl p-6 border border-white/10 hover:border-neon-cyan/30 transition-all duration-300">
              <h3 className="font-orbitron text-lg font-bold mb-4 text-neon-cyan">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-start gap-4">
                    <span className="text-gray-500 text-sm">{item.name}</span>
                    <span className="text-white text-sm font-medium text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Price Banner */}
        <div className="mt-16 text-center">
          <div className="glass rounded-3xl p-8 md:p-12 border border-neon-purple/30 max-w-4xl mx-auto relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-neon-purple/10 to-neon-magenta/10 animate-pulse-slow"></div>
            
            <div className="relative z-10">
              <span className="text-gray-400 text-sm tracking-widest mb-4 block">STARTING FROM</span>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="font-orbitron text-5xl md:text-7xl font-black gradient-text">$4,999</span>
                <span className="text-gray-500 line-through text-xl">$7,999</span>
              </div>
              <p className="text-gray-400 mb-6">Early Bird Special • Limited Quantities • Free Lifetime AI Updates</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="glass rounded-lg px-4 py-2">
                  <span className="text-neon-cyan font-orbitron text-sm">Ships Q2 2026</span>
                </div>
                <div className="glass rounded-lg px-4 py-2">
                  <span className="text-neon-magenta font-orbitron text-sm">2 Year Warranty</span>
                </div>
                <div className="glass rounded-lg px-4 py-2">
                  <span className="text-neon-purple font-orbitron text-sm">30-Day Trial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
