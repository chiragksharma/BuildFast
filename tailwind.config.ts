import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brico: ['var(--font-bricolage)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: 'hsl(var(--primary-color) / <alpha-value>)',
        primaryText: 'hsl(var(--primary-text-color) / <alpha-value>)',
        buttonBorder: 'hsl(var(--button-border-color) / <alpha-value>)',
        buttonText: 'hsl(var(--button-text-color) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
export default config;
