module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: { mobile: '375px', desktop: '1440px' },
    fontFamily: {
      manrope: ['Manrope']
    },
    extend: {
      colors: {
        bgWeb: 'hsl(218, 23%, 16%)',
        bgAdvice: 'hsl(217, 19%, 24%)',
        lightgreen: 'hsl(150, 100%, 66%)',
        quote: 'hsl(193, 38%, 86%)'
      }
    }
  },
  plugins: []
}
