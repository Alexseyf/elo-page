/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': 'var(--primary-blue)',
        'primary-blue-dark': 'var(--primary-blue-dark)',
        'primary-blue-light': 'var(--primary-blue-light)',
        'accent-yellow': 'var(--accent-yellow)',
        'accent-green': 'var(--accent-green)',
        'blue-background': 'var(--blue-app)',
        'blue-text': 'var(--blue-app)',
        'blue-icon': 'var(--blue-icon)',
      }
    },
  },
  plugins: [],
}
