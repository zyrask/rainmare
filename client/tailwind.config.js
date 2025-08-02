
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rain-glow': '#00BFFF',
        'rain-dark': '#001122',
      },
      animation: {
        'aurora': 'aurora 20s ease-in-out infinite',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(-50%) rotate(0deg)' },
          '25%': { transform: 'translateX(-50%) translateY(-60%) rotate(90deg)' },
          '50%': { transform: 'translateX(-40%) translateY(-50%) rotate(180deg)' },
          '75%': { transform: 'translateX(-60%) translateY(-40%) rotate(270deg)' },
        }
      }
    },
  },
  plugins: [],
}
