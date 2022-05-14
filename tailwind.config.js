const defaultTheme = require('tailwindcss/defaultTheme')

function withOpacity (variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue || 1})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './page_contents/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: '350px',
      ...defaultTheme.screens
    },
    extend: {
      height: {
        0.7: '0.1875rem'
      },
      animation: {
        'spin-slow': 'spin 9s linear infinite'
      },
      colors: {
        theme: {
          'main-bg': withOpacity('--main-bg'),
          // eslint-disable-next-line quote-props
          'accent': withOpacity('--accent'),
          'text-main': withOpacity('--text-main'),
          'text-accent': withOpacity('--text-accent'),
          'text-alt': withOpacity('--text-alt')

          // white: withOpacity('--white'),
          // prime: withOpacity('--prime'),

          // bg: withOpacity('--bg'),
          // grey: withOpacity('--grey'),
          // 'dark-grey': withOpacity('--dark-grey'),
          // 'light-grey': withOpacity('--light-grey'),
          // 'very-light-grey': withOpacity('--very-light-grey'),
          // midnight: withOpacity('--midnight'),
          // dark: withOpacity('--dark'),
          // black: withOpacity('--black'),

          // red: withOpacity('--red'),
          // 'red-dark': withOpacity('--red-dark'),
          // green: withOpacity('--green'),
          // orange: withOpacity('--orange'),
          // blue: withOpacity('--blue'),

          // 'prime-light': withOpacity('--prime-light'),
          // 'prime-dark': withOpacity('--prime-dark')
          // 'prime-dark': withOpacity('--prime-dark'),
        }
      }
    }
  },
  plugins: []
}
