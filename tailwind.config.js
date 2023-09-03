/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './src/**/*.css',
  ],
  theme: {
    extend: {
      stroke: ['hover'],
      boxShadow: {
        custom: '1 1 0 1 rgba(0, 0, 0, 0.9)',
      },
      screens: {
        'min375': '375px',
        'min450': '450px',
        'min540': '540px',
        'min620': '620px',
        'min670': '670px',
        'min760': '760px',
        'min800': '800px',
        'min1100px': '1100px',
        'vw1230px': '1230px',
      },
      colors: {
            'custom-blue' : '#048dcd',
      },
      backgroundPosition: {
        'custom-position': '20% 20%',
      },
    },
  },
  variants: {
    extend: {
      margin: ['first'],
    },
  },
  plugins: [],
}

