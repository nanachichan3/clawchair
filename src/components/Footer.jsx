import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center">
                <span className="font-orbitron font-bold text-black text-lg">C</span>
              </div>
              <span className="font-orbitron text-xl font-bold tracking-wider">
                CLAW<span className="text-neon-cyan">CHAIR</span>
              </span>
            </div>
            <p className="text-gray-500 mb-4 max-w-sm">
              The ultimate life pod for the next evolution of human-computer interaction. 
              Built with OpenClaw. Powered by AI.
            </p>
            <div className="flex gap-4">
              {['twitter', 'github', 'discord'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                >
                  <span className="text-sm capitalize">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-orbitron font-bold mb-4 text-sm text-gray-300">Product</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#features" className="hover:text-neon-cyan transition-colors">Features</a></li>
              <li><a href="#specs" className="hover:text-neon-cyan transition-colors">Specifications</a></li>
              <li><a href="#ai" className="hover:text-neon-cyan transition-colors">AI Integration</a></li>
              <li><a href="#order" className="hover:text-neon-cyan transition-colors">Pre-Order</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron font-bold mb-4 text-sm text-gray-300">Company</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#" className="hover:text-neon-cyan transition-colors">About</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 ClawChair Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
