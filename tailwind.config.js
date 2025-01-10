/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nord0: 'var(--nord0)',
        nord1: 'var(--nord1)',
        nord2: 'var(--nord2)',
        nord3: 'var(--nord3)',
        nord4: 'var(--nord4)',
        nord5: 'var(--nord5)',
        nord6: 'var(--nord6)',
        nord7: 'var(--nord7)',
        nord8: 'var(--nord8)',
        nord9: 'var(--nord9)',
        nord10: 'var(--nord10)',
        nord11: 'var(--nord11)',
        nord12: 'var(--nord12)',
        nord13: 'var(--nord13)',
        nord14: 'var(--nord14)',
        nord15: 'var(--nord15)',
      },
      backgroundColor: {
        'nord2-80': 'rgba(67, 76, 94, 0.8)', // nord2 with 0.8 opacity
      }
    },
  },
  plugins: [],
} 