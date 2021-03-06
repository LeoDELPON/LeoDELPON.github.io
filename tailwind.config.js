module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0a192f',
        'darker-blue': '#060f1c',
        'dark-blue-bright': '#112240',
        'emeraud-blue': '#00B5BD',
        'emeraud-blue-bright': '#00E0BC',
        'emeraud-blue-light': '#64FFDA33',
        'white-grayish': '#ccd6f6',
      },
      width: {
        '1840px': '1840px',
        'timeline': '450px',
      },
      height: {
        'header': '95vh',
      },
      borderWidth: {
        DEFAULT: '1px',
      },
      fontSize: {
        'nav-sm':['13px', {lineHeight: '0px'}],
        'big-header': ['52px', {lineHeight: '55px'}],
      }
    },
  },
  variants: {
  },
  plugins: [
  ],
}
