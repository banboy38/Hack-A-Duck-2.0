module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#527dff",
        "primaryAccent" : "#F2F2F2",
        "secondary" : "#272727",
        "secondaryAccent" : "#6600cc"
      },

      screens: {
        'xs' : '425px',
        'custom' : '767px'
      }

    },
  },
  plugins: [],
}
