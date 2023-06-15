/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'timer-active': '#26D356',
        'primary-button-gradient':
          'linear-gradient(white, white) padding-box, linear-gradient(to right, darkblue, darkorchid) border-box',
        'secondary-button-gradient':
          'linear-gradient(180deg, rgba(223, 225, 231, 0) 0%, rgba(223, 225, 231, 0.15) 100%), #FFFFFF',
      },
      boxShadow: {
        card: '6px 6px 0px #010101',
        button:
          '0px 1px 2px rgba(0, 0, 0, 0.12), 0px 0px 0px rgba(0, 0, 0, 0.08)',
        'trending-card': '0px 20px 30px rgba(0, 0, 0, 0.04);',
      },
      fontFamily: {
        sans: ['var(--font-coinbase-sans)'],
        text: ['var(--font-coinbase-text)'],
        mono: ['var(--font-coinbase-mono)'],
      },
      backgroundImage: {
        'trending-linear-gradient':
          'linear-gradient(89.61deg, #42A4FF 0.34%, #A462F7 25.17%, #FF58A6 50.01%, #FF833D 74.84%, #FFDD2C 99.68%)',
        'trending-linear-gradient-image':
          'url(/trending/trending-gradient.png)',
      },
    },
  },
  plugins: [],
}
