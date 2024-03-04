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
        base: '1.125rem',
        h1: '3.5rem',
        h2: '3rem',
        h3: '2.5rem',
        h4: '2rem',
        h5: '1.5rem',
        h6: '1.25rem',
        'display-0': 'clamp(3rem,-.057rem + 10.0714vw,10.25rem)',
      },
      letterSpacing: {
        heading: '-.0275em',
        tighter: '92.5%',
      },
      fontFamily: {
        'overused-grotesk': ['var(--font-overused-grotesk)'],
      },
      colors: {
        transparent: 'transparent',
        'secondary-400': '#080807',
        'secondary-300': '#393632',
        'secondary-100': '#6b645c',
        'accent-500': '#BFBFB1',
        'accent-300': '#DDDDD5',
        'accent-200': '#E8E8E3',
      },
    },
  },
  plugins: [],
}
export default config
