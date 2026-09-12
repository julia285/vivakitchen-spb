import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
    },
    extend: {
      colors: {
        cream: '#F7F5F1',
        milk: '#EFEBE4',
        graphite: '#2B2A28',
        charcoal: '#1C1B1A',
        greige: '#B9B2A6',
        stone: '#6E6A63',
        line: '#E1DCD3',
        accent: {
          DEFAULT: '#3E5C43',
          light: '#4F7256',
          dark: '#2E4633',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1320px',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '6px',
        lg: '10px',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [],
};

export default config;
