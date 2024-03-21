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
        btnCustom: ["24px", "29.05px"],
        btnEqual: ["28px", "33.89px"],
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
        btnBack: "#404258",
        btnOperator: "#F49D1A",
        btnEqualBg: "#B2B2B2",
        btnEqualText: "#000000",
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
