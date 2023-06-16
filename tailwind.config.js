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
      },
      boxShadow: {
        card: '6px 6px 0px #010101',
        button:
          '0px 1px 2px rgba(0, 0, 0, 0.12), 0px 0px 0px rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        sans: ['var(--font-coinbase-sans)'],
        text: ['var(--font-coinbase-text)'],
        mono: ['var(--font-coinbase-mono)'],
      },
      backgroundImage: {
        'blue-gradient':
          'linear-gradient(90deg, #309FA7 0%, #9060FF 50%, #0052FF 100%)',
        'yellow-gradient':
          'linear-gradient(336.54deg, #FF912C -67.93%, #FFEA2D 99.39%)',
        'footer-gradient': 'url(/footer-gradient.png)',
      },
    },
  },
  plugins: [],
}
