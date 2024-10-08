/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        primarylight: "var(--primary-light)",
        secondary: "var(--secondary)",
        secondarylight: "var(--secondary-light)",
        main: "var(--main)",
        mainlight: "var(--main-light)",
      },
    },
  },
  plugins: [],
};
