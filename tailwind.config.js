module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        hubot: ['Hubot Sans', 'sans-serif'],
        hubot2: ['Hubot Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        growingFadeIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        grow: {
          from: { transform: 'scale(0.95)' },
          to: { transform: 'scale(1)' },
        },
        slide: {
          from: { transform: 'translateX(-8em)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s',
        growingFadeIn: 'growingFadeIn 1.5s',
        grow: 'grow 1.5s',
        slide: 'slide 1.5s',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
