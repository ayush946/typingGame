
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

