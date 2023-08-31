/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#444',
            fontSize: '1rem',
            fontFamily: 'var(--font-coinbase-sans)',
            fontWeight: '400',
            lineHeight: '140%',
          },
        },
      },
      colors: {
        'timer-active': '#26D356',
        'button-dark-bg': '#151515',
        'button-dark-text': '#FFFFFF',
        'button-dark-hover-bg': '#444444',
        'button-light-bg': '#FFFFFF',
        'button-light-text': '#151515',
        'button-light-hover-bg': '#BFBFBF',
        'button-text-text': '#858585',
        'ocs-light-gray': '#EFEFEF',
        'ocs-mid-gray': '#BFBFBF',
        'ocs-dark-gray': '#444444',
        'ocs-black': '#151515',
        'ocs-pink': '#FF7DCB',
        'ocs-black': '#151515',
        'ocs-red': '#FF2D2D',
        'ocs-blue': '#0052FF',
        'ocs-turquoise': '#54DCE7',
        'ocs-yellow': '#FCD22D',
        'light-palette-line': 'rgba(91, 97, 110, 0.20)',
        'light-palette-line-heavy': 'rgba(91, 97, 110, 0.66)',
        'foreground-muted': '#5B616E',
      },
      boxShadow: {
        card: '6px 6px 0px #010101',
        crossMintEmail:
          '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(0, 0, 0, 0.02)',
        crossMintEmailFocus:
          '0 0 0 3px hsla(210, 96%, 45%, 25%), 0 1px 1px 0 rgba(0, 0, 0, 0.08)',
        large:
          '0px 2px 30px 0px rgba(0, 0, 0, 0.15), 0px 0px 4px 0px rgba(0, 0, 0, 0.15)',
      },
      fontFamily: {
        sans: ['var(--font-coinbase-sans)'],
        text: ['var(--font-coinbase-text)'],
        mono: ['var(--font-coinbase-mono)'],
        display: ['var(--font-coinbase-display)'],
        inter: ['var(--font-inter)'],
      },
      backgroundImage: {
        'trending-linear-gradient':
          'linear-gradient(89.61deg, #42A4FF 0.34%, #A462F7 25.17%, #FF58A6 50.01%, #FF833D 74.84%, #FFDD2C 99.68%)',
        'blue-gradient':
          'linear-gradient(90deg, #309FA7 0%, #9060FF 50%, #0052FF 100%)',
        'yellow-gradient':
          'linear-gradient(336.54deg, #FF912C -67.93%, #FFEA2D 99.39%)',
        'footer-gradient':
          'linear-gradient(to bottom, #0052FF 0%, #0052FF 20%, #54DCE7 20%, #54DCE7 40%, #FF7DCB 40%, #FF7DCB 60%, #735DFF 60%, #735DFF 80%, #FCD22D 80%, #FCD22D 100%)',
        'footer-background-gradient':
          'linear-gradient(to bottom, #FCD22D 0%, #FCD22D 5%, #FF7DCB 5%, #FF7DCB 7.5%, #0052FF 7.5%, #0052FF 10%, #FCD22D 10%, #FCD22D 12.5%, #735DFF 12.5%, #735DFF 15%, #FF7DCB 15%, #FF7DCB 17.5%, #735DFF 17.5%, #735DFF 20%, #54DCE7 20%, #54DCE7 22.5%, #FCD22D 22.5%, #FCD22D 32.5%, #735DFF 32.5%, #735DFF 50%,  #0052FF 50%, #0052FF 100%)',
        'subnav-background-gradient':
          'linear-gradient(to bottom, #FCD22D 0%, #FCD22D 11%, #735DFF 11%, #735DFF 26%, #54DCE7 26%, #54DCE7 45%, #FF7DCB 45%, #FF7DCB 68%, #0052FF 68%, #0052FF 100%)',
        'teaser-gradient':
          'linear-gradient(to bottom, white 0%, white 65.77%, #FF7DCB 65.77%, #FF7DCB 67.88%, #0052FF 67.88%, #0052FF 69.76%, #54DCE7 69.76%,  #54DCE7 72.53%, #FCD22D 72.53%, #FCD22D 80.08%, #735DFF 80.08%, #735DFF 84.41%, #0052FF 84.41%, #0052FF 100%)',
        'teaser-gradient-ios':
          'linear-gradient(to bottom, white 0%, white 50%, #FF7DCB 50%, #FF7DCB 53.11%, #0052FF 53.11%, #0052FF 55.88%, #54DCE7 55.88%,  #54DCE7 59.99%, #FCD22D 59.99%, #FCD22D 71.10%, #735DFF 71.10%, #735DFF 77.54%, #0052FF 77.54%, #0052FF 100%)',
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
        loading: {
          '0%': { transform: 'rotate(0deg)' },
          '8%': { transform: 'rotate(30deg)' },
          '16%': { transform: 'rotate(60deg)' },
          '25%': { transform: 'rotate(90deg)' },
          '33%': { transform: 'rotate(120deg)' },
          '41%': { transform: 'rotate(150deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '58%': { transform: 'rotate(210deg)' },
          '66%': { transform: 'rotate(240deg)' },
          '75%': { transform: 'rotate(270deg)' },
          '83%': { transform: 'rotate(300deg)' },
          '91%': { transform: 'rotate(330deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        loading: 'loading 1s step-end infinite',
      },
      fontSize: {
        base: [
          '1rem',
          {
            lineHeight: '140%',
            fontWeight: '400',
          },
        ],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',
          width: '0px',
        },
        '.hide-scrollbar': {
          scrollbarWidth: 'none',
          '-ms-overflow-style': 'none',
        },
      }
      addUtilities(newUtilities)
    },
    require('@tailwindcss/typography'),
    require('tailwindcss-radix'),
  ],
}
