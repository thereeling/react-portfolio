/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
export default {
  content: ["index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class", 
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', ...fontFamily.mono],
        body: ['var(--font-body)', ...fontFamily.mono]
=======
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
>>>>>>> bdec42c (Initial commit from Create Next App)
      },
    },
  },
  plugins: [],
<<<<<<< HEAD
}

=======
};
>>>>>>> bdec42c (Initial commit from Create Next App)
