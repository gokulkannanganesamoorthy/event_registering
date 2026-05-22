/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        surface: '#111111',
        'surface-2': '#161616',
        border: '#1F1F1F',
        'border-hover': '#2A2A2A',
        text: {
          primary: '#FAFAFA',
          secondary: '#888888',
          muted: '#555555',
        },
        accent: {
          DEFAULT: '#7C3AED',
          hover: '#8B5CF6',
          subtle: 'rgba(124,58,237,0.1)',
          border: 'rgba(124,58,237,0.25)',
        },
      },
      fontFamily: {
        heading: ['"Instrument Serif"', 'Georgia', 'serif'],
        sub: ['"DM Sans"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marqueeReverse 40s linear infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.4)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.5)',
        'accent': '0 0 20px rgba(124,58,237,0.25)',
      },
    },
  },
  plugins: [],
}
