import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{css,html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "icon-reaction": "url(./assets/images/icon-reaction.svg)",
        "icon-memory": "url(./assets/images/icon-memory.svg)",
        "icon-verbal": "url(./assets/images/icon-verbal.svg)",
        "icon-visual": "url(./assets/images/icon-visual.svg)",
      },
      colors: {
        "cobalt-blue": "hsl(var(--color-cobalt-blue))",
        "dark-gray-blue": "hsl(var(--color-dark-gray-blue))",
        "green-teal": "hsl(var(--color-green-teal))",
        "light-lavender": "hsl(var(--color-light-lavender))",
        "light-red": "hsl(var(--color-light-red))",
        "light-royal-blue": "hsl(var(--color-light-royal-blue))",
        "light-slate-blue": "hsl(var(--color-light-slate-blue))",
        "orangey-yellow": "hsl(var(--color-orangey-yellow))",
        "pale-blue": "hsl(var(--color-pale-blue))",
        "persian-blue": "hsl(var(--color-persian-blue) / 0)",
        "violet-blue": "hsl(var(--color-violet-blue) / 1)",
        white: "hsl(var(--color-white))",
      },
      fontFamily: {
        sans: ["Hanken Grotesk", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        sm: "0.89rem",
        base: "1rem",
        md: "1.34rem",
        lg: "1.78rem",
        xl: "3.12rem",
        "2xl": "4rem",
      },
    },
  },
  plugins: [],
};
