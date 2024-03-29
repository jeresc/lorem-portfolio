import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        '2xl': '1440px',
        '3xl': '1920px',
        '4xl': '2260px',
      },
      fontSize: {
        xs: '.875rem',
        base: '1.125rem',
        h1: '3.5rem',
        h2: '3rem',
        h3: '2.5rem',
        h4: '2rem',
        h5: '1.5rem',
        h6: '1.25rem',
        'display-0': 'clamp(3rem,-.057rem + 10.0714vw,10.25rem)',
        number: 'clamp(8rem, -.057rem + 20.0714vw, 20rem)',
      },
      lineHeight: {
        base: '130%',
        tighter: '92.5%',
      },
      letterSpacing: {
        heading: '-.0275em',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(.16,1,.3,1)',
      },
      fontFamily: {
        'overused-grotesk': ['var(--font-overused-grotesk)'],
      },
      colors: {
        transparent: 'transparent',
        'secondary-400': '#080807',
        'secondary-300': '#393632',
        'secondary-100': '#6B645C',
        'secondary-75': '#7E766C',
        'secondary-50': '#A29E9A',
        'accent-500': '#BFBFB1',
        'accent-400': '#D1D1C7',
        'accent-300': '#DDDDD5',
        'accent-200': '#E8E8E3',
      },
    },
  },
  plugins: [],
}
export default config
