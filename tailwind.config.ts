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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        shadows: ["var(--font-shadows)"],
        geist: ["var(--font-geist-sans)"],
        rubik: ["var(--font-rubik)"]
      },
    },
  },
  plugins: [],
};
export default config;
