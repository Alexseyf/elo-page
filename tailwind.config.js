/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slate': 'var(--primary-slate)',
        'slate-light': 'var(--primary-slate-light)',
        'amber': 'var(--accent-amber)',
        'rose': 'var(--accent-rose)',
        'warm': 'var(--bg-warm)',
        'dark': 'var(--text-dark)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
