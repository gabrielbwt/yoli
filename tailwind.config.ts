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
        'primary-lighter': "#FFF4b0",
        'primary-light': "#FFDF5E",
        'primary-main': "#EFB30C",
        'primary-dark': "#A36D00",
        'primary-darker': "#573400",
      },
    },
  },
  plugins: [],
};

export default config;
