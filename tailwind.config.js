/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        accent: {
          DEFAULT: '#d4a574',
          light: '#e8c4a3',
          dark: '#b8956a',
        }
      },
      animation: {
        'reveal-up': 'revealUp 0.8s cubic-bezier(0.25, 0, 0.25, 1) forwards',
        'reveal-left': 'revealLeft 0.8s cubic-bezier(0.25, 0, 0.25, 1) forwards',
        'reveal-right': 'revealRight 0.8s cubic-bezier(0.25, 0, 0.25, 1) forwards',
        'parallax': 'parallax linear',
        'fade-in-subtle': 'fadeInSubtle 1s cubic-bezier(0.25, 0, 0.25, 1) forwards',
      },
      keyframes: {
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        revealLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        revealRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInSubtle: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'elegant': '0 8px 25px rgba(0, 0, 0, 0.12)',
        'soft': '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
