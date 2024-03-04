import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        h1: '3.5rem',
        h2: '3rem',
        h3: '2.5rem',
        h4: '2rem',
      },
      letterSpacing: {
        heading: '-.0275em',
      },
      fontFamily: {
        'overused-grotesk': ['var(--font-overused-grotesk)'],
      },
      colors: {
        transparent: 'transparent',
        'secondary-400': '#080807',
        'accent-500': '#BFBFB1',
        'accent-300': '#DDDDD5',
        'accent-200': '#E8E8E3',
      },
    },
  },
  plugins: [],
}
export default config
