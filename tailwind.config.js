/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '30': '30px',
        '50': '50px',
        '70pc': '70%'
      },
      height: {
        '30': '30px',
        '50': '50px'
      },
      margin: {
        '30px': '30px',
        '60px': '60px'
      },
      colors: {
        'white-a': '#ffffffb3',
        'bright-orange': 'hsl(31, 77%, 52%)',
        'dark-cyan': 'hsl(184, 100%, 22%)',
        'very-dark-cyan': 'hsl(179, 100%, 13%)'
      },
      backgroundColor: {
        'light-gray': 'hsl(0, 0%, 95%)',
        'bright-orange': 'hsl(31, 77%, 52%)',
        'dark-cyan': 'hsl(184, 100%, 22%)',
        'very-dark-cyan': 'hsl(179, 100%, 13%)',
      },
      borderRadius: {
        'm10': '10px'
      },
      padding: {
        '40px': '40px'
      },
      fontFamily: {
        'shoulders': ['Big Shoulders Display', 'cursive'],
        'deca': ['Lexend Deca', 'sans-serif']
      },
      maxWidth: {
        '1/2': '50%'
      }
    },
    screens: {
      'mobile': {'max' : '375px'},
      // => @media (max-width: 375px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px'
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
}

