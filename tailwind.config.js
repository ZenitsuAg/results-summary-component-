/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-red': 'hsl(0, 100%, 67%)',
        'orangey-yellow': 'hsl(39, 100%, 56%)',
        'green-teal': 'hsl(166, 100%, 37%)',
        'cobalt-blue': 'hsl(234, 85%, 45%)',

        // Hsla
        'alpha-light-red': 'hsla(0, 100%, 67%, 0.07)',
        'alpha-orangey-yellow': 'hsla(39, 100%, 56%, 0.07)',
        'alpha-green-teal': 'hsla(166, 100%, 37%, 0.07)',
        'alpha-cobalt-blue': 'hsla(234, 85%, 45%, 0.07)',

        // Gradients
        'bg-light-slate-blue': 'hsl(252, 100%, 67%)',
        'bg-light-royal-blue': 'hsl(241, 81%, 54%)',

        'circle-violet-blue': 'hsl(246, 86%, 57%)',
        'circle-persian-blue' : 'hsl(255, 71%, 46%)',

        // Neutral
        'white': 'hsl(0, 0%, 100%)',
        'pale-blue': 'hsl(221, 100%, 96%)',
        'light-lavender': 'hsl(241, 100%, 89%)',
        'dark-gray-blue': 'hsl(224, 30%, 27%)',

        // special
        'special-1' : 'hsl(252, 94%, 63%)',
        'special-2' : 'rgba(46, 43, 233, 1)',
      },
      fontFamily: {
        'hanken': ['"Hanken Grotesk", cursive']
      },
    },
  },
  plugins: [],
}

