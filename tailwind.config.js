/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#040705',
          900: '#08100B',
          850: '#0D1A12',
          800: '#13251B',
          700: '#1D3B2C',
          600: '#2A533E',
          500: '#3D7557',
          400: '#5BA178',
          300: '#87BE9D',
          200: '#B8DEC7',
          100: '#E1F2E7',
          50: '#F3F9F5',
        },
        earth: {
          950: '#0A0705',
          900: '#140E0A',
          850: '#1E1510',
          800: '#2B1E17',
          700: '#402D23',
          600: '#5E4233',
          500: '#8A614A',
          400: '#B58567',
          300: '#D4AA8F',
          200: '#EBD1C0',
          100: '#F6EAE2',
          50: '#FAF5F1',
        },
        pine: {
          dark: '#0A130D',
          medium: '#15291E',
          light: '#284F39',
          accent: '#478560',
          frost: '#A2D4B4',
        },
        peat: {
          dark: '#110C09',
          medium: '#231812',
          light: '#3D2A1F',
          amber: '#9E6D47',
          gold: '#C99A6B',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Plus Jakarta Sans"',
          'system-ui',
          'sans-serif',
        ],
        mono: [
          '"SF Mono"',
          'ui-monospace',
          'Menlo',
          'Monaco',
          '"Geist Mono"',
          'monospace',
        ],
        serif: [
          '"New York"',
          '"Playfair Display"',
          'Georgia',
          'serif',
        ],
      },
      boxShadow: {
        'liquid-sm': '0 4px 20px -2px rgba(0, 0, 0, 0.4), inset 0 1px 1px 0 rgba(255, 255, 255, 0.15)',
        'liquid': '0 10px 30px -5px rgba(0, 0, 0, 0.5), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.18), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.3)',
        'liquid-lg': '0 25px 60px -15px rgba(0, 0, 0, 0.7), inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.22), inset 0 -1.5px 2px 0 rgba(0, 0, 0, 0.5)',
        'liquid-glow-pine': '0 0 40px -10px rgba(61, 117, 87, 0.35), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.2)',
        'liquid-glow-amber': '0 0 40px -10px rgba(181, 133, 103, 0.35), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.2)',
      },
      backdropBlur: {
        'xs': '2px',
        '2xl': '40px',
        '3xl': '64px',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.02)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.08)' },
        },
        'sheen': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'drift-canopy': {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(15px, -15px) rotate(2deg)' },
          '100%': { transform: 'translate(0, 0) rotate(0deg)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
        'sheen': 'sheen 3s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'drift': 'drift-canopy 14s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
