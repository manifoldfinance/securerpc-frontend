const height = require('./height')

///** @type {import('tailwindcss/tailwind-config').TailwindConfig} */

/** @type {import('tailwindcss').Config} */


import type { Config } from 'tailwindcss'

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,md,mdx}",
    "./components/**/*.{ts,tsx,md,mdx}",
    "./app/**/*.{ts,tsx,md,mdx}",
    "./src/**/*.{ts,tsx,md,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        disco3: "#2AA3B1",
        "disco3-50": "#39DFF2",
        "disco3-100": "#35CDDF",
        "disco3-200": "#30BCCC",
        "disco3-300": "#2CAAB9",
        "disco3-400": "#2799A6",
        "disco3-500": "#238793",
        "disco3-600": "#1E7580",
        "disco3-700": "#1A646C",
        "disco3-800": "#155259",
        "disco3-900": "#114146",
        "disco3-950": "#0C2F33",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
