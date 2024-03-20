/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter"],
      },
      fontSize: {
        customSize: ["32px", "38.73px"],
      },
      width: { 400: "400px", 350: "350px" },
      height: {
        367: "367px",
        100: "100px",
        70: "70px",
      },
      colors: {
        customBack: "#242530",
        screen: "#3A3F77",
        screenText: "#FFFFFF",
      },
      borderRadius: {
        20: "20px",
      },
      spacing: {
        25: "25px",
      },
    },
  },
  plugins: [],
};
