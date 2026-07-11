import { defineConfig } from '@types/tailwindcss/tailwind-config';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#0066cc',
        'accent-dark': '#0052a3',
        'accent-light': '#3385dd',
        error: '#dc2626',
        success: '#16a34a',
        warning: '#ea580c'
      }
    }
  },
  plugins: []
};
