import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			'custom-border-color': '#333',
  			'hero-section-bg--color': '#f7f7f7',
  			'custom-button-color': '#ed1c24',
  			'font-family-custom': 'Poppins, sans-serif',
  			'mobile-text-color': '#fffbf7',
  			'footer-text-color': '#39434d',
  			'footer-background-color': '#0f0f0f',
  			'location-text-color': '#ED1C24',
  			'get-green-btn': '#28a745',
  			'locate-me-btn': '#e21b70',
			'image-background-color': '#f5f5f5',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		letterSpacing: {
  			tightest: '-.075em',
  			tighter: '-.05em',
  			tight: '-.025em',
  			normal: '0',
  			wide: '.025em',
  			wider: '.05em',
  			widest: '.48em'
  		},
  		width: {
  			'20': '20%',
  			'25': '25%',
  			'30': '30%',
  			'50': '50%',
  			'75': '75%',
  			'85': '85%',
  			'90': '90%',
  			'95': '95%',
  			'100': '100%'
  		},
  		spacing: {
  			'100': '100px',
  			'150': '150px'
  		},
  		fontSize: {
  			'custom-size-mobile': '14px'
  		},
  		maxWidth: {
  			'40rem': '40rem',
  			'50rem': '50rem',
			'56rem': '56rem',
  			'60rem': '60rem',
  			'80rem': '80rem'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
