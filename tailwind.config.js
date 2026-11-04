/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // M1LLION / Visual identity — five neutrals, nothing else.
        obsidian: '#181818',
        charcoal: '#333330',
        stone: '#77746E',
        taupe: '#B6ADA0',
        bone: '#F0ECE4',
      },
      fontFamily: {
        // Pinned by the brand bible's Canva font system.
        display: ['Anton', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
