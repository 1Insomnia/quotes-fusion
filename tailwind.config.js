const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px"
      }
    },
    colors: {
      primary: {
        light: "#60bbfc",
        dark: "#158bc9"
      },
      foreground: {
        DEFAULT: "#101112",
        light: "#3f434a",
        lighter: "#6e7683"
      },
      background: {
        neutral: {
          DEFAULT: "#fff",
          hover: "#f2f3f5",
          active: "#e6e8ec"
        },
        contrast: {
          DEFAULT: "#101112",
          hover: "#272a2e",
          active: "#565d67"
        }
      },
      border: {
        subtle: "#e6e8ec",
        moderate: "#ced2d9"
      }
    },
    fontFamily: {
      sans: ["'Inter'", ...defaultTheme.fontFamily.sans],
      serif: ["'PT Sans'", ...defaultTheme.fontFamily.serif]
    }
  },
  plugins: []
}
