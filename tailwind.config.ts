import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-ibmplexsans)', 'sans-serif']
    },
    extend: {
      colors: {
        carbon: {
          50: '#FCFDFF',
          100: '#F7F8FB',
          200: '#F2F3F6',
          400: '#CFD0D3',
          500: '#ACADAD',
          600: '#737476',
          900: '#303133',
        },
        deep: {
          400: '#ADB3C3',
          600: '#213A77',
          900: '#011139',
        },
        peach: {
          300: '#FA824C',
          400: '#FDD0BC',
          700: '#DF4A06',
        },
      },
      fontFamily: {
        abcgintonord: ['var(--font-abcgintonord)', 'sans-serif']
      },
    },
  },
  plugins: [],
}
export default config
