import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    extend: {
      colors: {
        'background-gray': '#F8F9FA',
        primary: '#3490dc',
        secondary: '#423490',
        'accent-green': '#6FCF97',
        error: '#E74C3C',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        card: '2rem', // Example spacing for cards
      },
    },
  },
  plugins: [],
};
export default config;
