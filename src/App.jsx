import React, { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import Chair3D from './components/Chair3D'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Specs from './components/Specs'
import AIIntegration from './components/AIIntegration'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  return (
    <div className="min-h-screen bg-[#0a0a0f] bg-grid">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Specs />
        <AIIntegration />
        <CTASection />
      </main>
      
      <Footer />
      
      {/* Floating 3D Chair Preview */}
      <div className="fixed bottom-8 right-8 w-64 h-64 hidden lg:block z-50">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-magenta/20 blur-xl animate-pulse-slow"></div>
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <Suspense fallback={null}>
              <Chair3D autoRotate />
              <Preload all />
            </Suspense>
          </Canvas>
        </div>
        <p className="text-center text-xs text-neon-cyan mt-2 font-orbitron">CLAWCHAIR</p>
      </div>
    </div>
  )
}

export default App
