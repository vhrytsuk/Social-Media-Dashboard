/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}"],
  theme: {
    extend: {
      backgroundColor: {
        "default-page": "#28282B",
      },
      borderColor: {
        "gray-1": "#7e7f87",
      },
    },
  },
  plugins: [],
};
