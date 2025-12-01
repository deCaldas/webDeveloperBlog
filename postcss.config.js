module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // NO incluyas ./css/prism.css aquí
  ],
  safelist: [], // si usas safelist, no añadas clases de Prism
}
