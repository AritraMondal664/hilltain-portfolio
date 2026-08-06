import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#4D8DFF",
          dark: "#050816",
          secondary: "#0D1324",
          glass: "rgba(255,255,255,0.08)",
          card: "rgba(255,255,255,0.04)",
        },

        text: {
          primary: "#FFFFFF",
          secondary: "#B8C0D9",
        },
      },

      boxShadow: {
        "glow-blue": "0 0 30px rgba(77,141,255,0.35)",
      },

      backdropBlur: {
        xs: "2px",
      },
    },
  },

  plugins: [],
};

export default config;