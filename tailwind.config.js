module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'text': 'textGlow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        textGlow: {
          '0%': { 'text-shadow': '0 0 10px #fff, 0 0 20px #0ff' },
          '100%': { 'text-shadow': '0 0 20px #fff, 0 0 30px #0ff' },
        }
      }
    },
  },
  plugins: [],
}