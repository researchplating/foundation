const plugin = require('tailwindcss/plugin')


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, addBase, e, config, theme, apply }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { "@apply text-rose-400": {} },
        'h3': { fontSize: theme('fontSize.lg') },
      })
      // Add your custom styles here
    }),
  ],
}

