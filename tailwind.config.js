/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class", 
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', ...fontFamily.mono],
        body: ['var(--font-body)', ...fontFamily.mono]
      },
    },
  },
  plugins: [],
}

