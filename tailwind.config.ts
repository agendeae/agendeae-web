import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--color-primary)",
          primaryHover: "var(--color-primary-hover)",
          primaryActive: "var(--color-primary-active)",
          secondary: "var(--color-secondary)",
          secondaryHover: "var(--color-secondary-hover)",
          secondaryActive: "var(--color-secondary-active)",
        },
        feedback: {
          error: "var(--color-error)",
          success: "var(--color-success)",
          alert: "var(--color-alert)",
        },
        outline: "var(--color-outline)",
        outlineHover: "var(--color-outline-hover)",
        neutral: {
          primary: "var(--color-neutral)",
          secondary: "var(--color-neutral-secondary)",
        },
      },
    },

    plugins: [],
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

("");
