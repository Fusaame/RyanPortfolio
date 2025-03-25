// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'eczar':['Eczar', 'serif'],
        'monoton':['Monoton', 'serif'],
        'bungee':['Bungee Shade', 'serif'],
      },
    },
  },
  plugins: [],
};
