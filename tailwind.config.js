/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rthin : ["Roboto-Thin", "sans-serif"],
        rreg : ["Roboto-Regular", "sans-serif"],
        rmed : ["Roboto-Medium", "sans-serif"],
        rlight : ["Roboto-Light", "sans-serif"],
        rbold : ["Roboto-Bold", "sans-serif"],
        rblack : ["Roboto-Black", "sans-serif"],
        playexbold : ["Play-ExBold", "serif"],
        playexboldI : ["Play-ExBoldI", "serif"],
        playbold : ["Play-Bold", "serif"],
        playboldI : ["Play-BoldI", "serif"],
        playsembold : ["Play-SemBold", "serif"],
        playsemboldI : ["Play-SemBoldI", "serif"],
        playmed : ["Play-Med", "serif"],
        playmedI : ["Play-MedI", "serif"],
        playItalic : ["Play-Italic", "serif"],
        playRegular : ["Play-Regular", "serif"],
      }
    },
  },
  plugins: [],
}

