/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Asegúrate de que esta parte incluya todos tus archivos
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInScale: {
          '0%': { opacity: 0, transform: 'scale(0.8)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        fadeInScale: 'fadeInScale 0.6s ease-out',
      },
    },
  },
  plugins: [], // Agrega tus plugins si es necesario
};
