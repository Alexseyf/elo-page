/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest': 'var(--primary-forest)',
        'forest-dark': 'var(--primary-forest-dark)',
        'forest-light': 'var(--primary-forest-light)',
        'terracotta': 'var(--accent-terracotta)',
        'ochre': 'var(--accent-ochre)',
        'cream': 'var(--bg-cream)',
        'dark': 'var(--text-dark)',
      }
    },
  },
  plugins: [],
}
