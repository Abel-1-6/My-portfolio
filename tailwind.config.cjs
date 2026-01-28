/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'Inter', 'sans-serif']
      },
      colors: {
        primary: {
          500: '#38bdf8',
          600: '#0ea5e9'
        },
        accent: {
          500: '#a855f7'
        }
      },
      boxShadow: {
        glow: '0 0 40px rgba(56,189,248,0.4)'
      }
    }
  },
  plugins: []
};


