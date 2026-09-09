/* eslint-disable import/no-extraneous-dependencies */
import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: "#BFFF00",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "slide-right": " slide-right 0.3s ease-in .3s both",
        "slide-left": " slide-left 0.3s ease-in 0.3s both;",
        "slide-top": " slide-top 4s ease-in 1s both;",
        "reveal-up": "reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "laser-sweep": "laser-sweep 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
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
        "slide-top": {
          "0%": { transform: "translateY(100px)" },
          "100%": { transform: "translateY(-10px)" },
        },
        "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "laser-sweep": {
          "0%": { transform: "translateX(-120%) rotate(45deg)" },
          "100%": { transform: "translateX(120%) rotate(45deg)" },
        },
      },
      transitionTimingFunction: {
        elite: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      boxShadow: {
        neon: "0 0 20px rgba(191, 255, 0, 0.3)",
        "neon-lg": "0 0 40px rgba(191, 255, 0, 0.35)",
      },
      fontFamily: {
        heading: ["var(--font-jakarta)", ...defaultTheme.fontFamily.sans],
        techmono: ["var(--font-mono-tech)", ...defaultTheme.fontFamily.mono],
        sans: [...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
export default config;
