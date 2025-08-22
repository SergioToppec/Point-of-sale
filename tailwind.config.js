/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        azulOscuro: '#395886',
        azulFuerte: '#638ECB',
        azulClaro: '#D5DEEF',
        rojoFuerte: '#B21613',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'], 
      },
      screens:{
        xt: "1500px",
        xy: "1400px",
        xr: "1250px",
        xl: "950px",
        xs: "600px",
        st: "550px",
        bc: "480px",
      },

    },
  },
  plugins: [],
};
