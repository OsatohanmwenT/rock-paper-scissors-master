/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "header-outline": "hsl(217, 16%, 45%)",
        "Dark-text": "hsl(229, 25%, 31%)",
        "Score-text": "hsl(229, 64%, 46%)",
        "cyan-1": "hsl(189, 59%, 53%)",
        "cyan-2": "hsl(189, 58%, 57%)",
        "lizard-1": "hsl(261, 73%, 60%)",
        "lizard-2": "hsl(261, 72%, 63%)",
        "rock-1": "hsl(349, 71%, 52%)",
        "rock-2": "hsl(349, 70%, 56%)",
        "paper-1": "hsl(230, 89%, 62%)",
        "paper-2": "hsl(230, 89%, 65%)",
        "scissors-1": "hsl(39, 89%, 49%)",
        "scissors-2": "hsl(40, 84%, 53%)",
      },
      backgroundImage: {
        "pentagon": "url('./src/assets/images/bg-pentagon.svg')",
        "triangle": "url('./src/assets/images/bg-triangle.svg')"
      }
    },
  },
  plugins: [],
}