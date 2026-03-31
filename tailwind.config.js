/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00f0ff',
          magenta: '#ff00ff',
          purple: '#a855f7',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px #00f0ff, 0 0 40px #00f0ff' },
          '100%': { boxShadow: '0 0 40px #ff00ff, 0 0 80px #ff00ff' },
        }
      }
    },
  },
  plugins: [],
}
