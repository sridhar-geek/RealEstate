/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#f9f9f9",
        primary: "#0078ff",
        primarylight: "#0078cc",
        content: '#f5f5f5',
        contact: '#f5f6f9',
        footer: "#dfedfe",
        // icon-hover: 
      },
      fontFamily:{
        Montserrat : 'Montserrat'
      }
    },
  },
  plugins: [],
};

