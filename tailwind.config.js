// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{ts,js,html}',
    ],
    theme: {
      extend: {
        colors: {
          darkbg: '#2D2D2D',
        },
      },
    },
    plugins: [],
  }
  