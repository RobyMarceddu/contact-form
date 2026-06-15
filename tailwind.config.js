/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          200: 'hsl(148, 38%, 91%)',
          600: 'hsl(169, 82%, 27%)',
        },
        red: 'hsl(0, 66%, 54%)',
        grey: {
          500: 'hsl(186, 15%, 59%)',
          900: 'hsl(187, 24%, 22%)',
        },
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
