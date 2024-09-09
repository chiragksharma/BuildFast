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
        'primary-color': 'hsl(var(--primary-color))',
        'background-primary': 'hsl(var(--background-primary))',
        'background-secondary': 'hsl(var(--background-secondary))',
        'elements-secondary': 'hsl(var(--elements-secondary))',
        'cards-bg': 'hsl(var(--cards-bg))',
        'cards-bg-secondary': 'hsl(var(--cards-bg-secondary))',
        'text-color-headlines': 'hsl(var(--text-color-headlines))',
        'text-color-secondary': 'hsl(var(--text-color-secondary))',
        'icons-primary': 'hsl(var(--icons-primary))',
        'btn-color-primary': 'hsl(var(--btn-color-primary))',
        'btn-color-secondary': 'hsl(var(--btn-color-secondary))',
        'btn-color-disabled': 'hsl(var(--btn-color-disabled))',
        'pop-colors-primary': 'hsl(var(--pop-colors-primary))',
        'navbar-bg': 'hsla(var(--navbar-bg))',
        'logo-text-color': 'hsl(var(--logo-text-color))',
        'logo-icon-color': 'hsl(var(--logo-icon-color))',
        'nav-links-color': 'hsl(var(--nav-links-color))',
        'nav-cta-btn-bg': 'hsl(var(--nav-cta-btn-bg))',
        'nav-cta-btn-text': 'hsl(var(--nav-cta-btn-text))',
        'nav-cta-btn-border': 'hsla(var(--nav-cta-btn-border))',
        'nav-normal-btn-text': 'hsl(var(--nav-normal-btn-text))',
        'nav-normal-btn-border': 'hsl(var(--nav-normal-btn-border))',
        'hero-headline-text-color': 'hsl(var(--hero-headline-text-color))',
        'foreground-hsl': 'hsl(var(--foreground-hsl))',
        'foreground-opposite': 'hsl(var(--foreground-opposite))',
        'cta-color': 'hsl(var(--cta-color))',
        'primary-text-color': 'hsl(var(--primary-text-color))',
        'button-border-color': 'hsl(var(--button-border-color))',
        'button-text-color': 'hsl(var(--button-text-color))',
      
      },
    },
  },
  plugins: [],
};
export default config;
