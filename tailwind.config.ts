import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "slide-right": " slide-right 0.3s ease-in .3s both",
        "slide-left": " slide-left 0.3s ease-in 0.3s both;",
      },
      keyframes: {
        "slide-right": {
          "0%": { transform: "translateX(-110%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "slide-left": {
          "0%": { transform: "translateX(300px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
