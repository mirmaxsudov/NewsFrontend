/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      maxWidth: {
        container: "1380px",
        sm: "640px",
        md: "720px",
        lg: "960px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
