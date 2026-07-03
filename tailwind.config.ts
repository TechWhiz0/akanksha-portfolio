import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#e8e8e8",
        foreground: "#1a1a1a",
        muted: "#6b6b6b",
        border: "#d0d0d0",
        card: {
          pink: "#f5b5b0",
          green: "#a8d4b8",
          dark: "#2a2a2a",
          yellow: "#f5d76e",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
