/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable dark mode based on a class name
  theme: {
    extend: {
      colors: {
        dark: "#333", // Define your dark mode color scheme
      },
    },
  },
  variants: {
    extend: {
      brightness: ["dark"], // Enable dark mode utility for brightness
    },
  },
  plugins: [],
};
