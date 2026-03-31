import React, { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Chair3D from './Chair3D'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-300 font-medium">The Future of Human-Computer Interaction</span>
          </div>
          
          <h1 className="font-orbitron text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-white">Welcome to</span>
            <br />
            <span className="gradient-text text-glow-cyan">The Matrix</span>
            <br />
            <span className="text-white">Lifestyle</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
            Sit. Sleep. Eat. Work. <span className="text-neon-cyan font-semibold">Live your entire life</span> without leaving your chair. 
            The ultimate life pod combining massage therapy, robotics, and an AI-powered PC.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn-primary text-lg px-8 py-4 animate-pulse-slow">
              <span className="flex items-center gap-2">
                Pre-Order for $4,999
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Watch Demo
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
            <div>
              <div className="font-orbitron text-3xl font-bold text-neon-cyan">24/7</div>
              <div className="text-sm text-gray-500">AI Operation</div>
            </div>
            <div>
              <div className="font-orbitron text-3xl font-bold text-neon-magenta">0m²</div>
              <div className="text-sm text-gray-500">Living Space</div>
            </div>
            <div>
              <div className="font-orbitron text-3xl font-bold text-neon-purple">∞</div>
              <div className="text-sm text-gray-500">Productivity</div>
            </div>
          </div>
        </div>

        {/* 3D Chair */}
        <div className="relative h-[500px] lg:h-[600px]">
          {/* Glow Effects */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-80 h-80 bg-gradient-to-r from-neon-cyan/30 to-neon-magenta/30 rounded-full blur-3xl"></div>
          </div>
          
          {/* 3D Canvas */}
          <div className="absolute inset-0">
            <Canvas shadows dpr={[1, 2]}>
              <PerspectiveCamera makeDefault position={[3, 2, 5]} fov={45} />
              <ambientLight intensity={0.4} />
              <spotLight 
                position={[10, 10, 10]} 
                angle={0.2} 
                penumbra={1} 
                intensity={1.5} 
                castShadow 
              />
              <pointLight position={[-5, 5, -5]} color="#a855f7" intensity={0.8} />
              <pointLight position={[5, -5, 5]} color="#00f0ff" intensity={0.5} />
              
              <Suspense fallback={null}>
                <Chair3D />
              </Suspense>
              
              <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 2}
              />
            </Canvas>
          </div>
          
          {/* Floating UI Elements */}
          <div className="absolute top-10 left-0 glass rounded-lg p-3 animate-float" style={{ animationDelay: '-1s' }}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium">OpenClaw Active</span>
            </div>
          </div>
          
          <div className="absolute bottom-20 right-0 glass rounded-lg p-3 animate-float" style={{ animationDelay: '-2s' }}>
            <div className="text-xs text-gray-400">Agents Working</div>
            <div className="font-orbitron text-lg text-neon-cyan">12</div>
          </div>
          
          <div className="absolute top-1/3 right-0 glass rounded-lg p-3 animate-float">
            <div className="text-xs text-gray-400">Massage Mode</div>
            <div className="font-orbitron text-sm text-neon-magenta">DEEP TISSUE</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-gray-500 tracking-widest">SCROLL</span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
