import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-border-color': '#333',
        'hero-section-bg--color': '#f7f7f7',
        'custom-button-color': '#ed1c24',
        'font-family-custom': 'Poppins, sans-serif',
        'mobile-text-color': '#fffbf7',
        'footer-text-color': '#39434d',
        'footer-background-color': '#0f0f0f',
        'location-text-color': '#ED1C24',
        'get-green-btn':'#28a745',
        'locate-me-btn':'#e21b70',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.48em',
        
      },
      width: {
        '20':'20%',
        '25':'25%',
        '30':'30%',
        '50': '50%',
        '85': '85%',
        '75': '75%',
        '90': '90%',
        '95': '95%',
        '100': '100%',  
      },
      spacing: {
        100: '100px',
        150: '150px',
      },
      fontSize: {
        'custom-size-mobile': '14px',
      }
    },
  },
  plugins: [],
};
export default config;
