import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'helvetica-neue': ['Helvetica Neue LT Pro', 'HelveticaNeue LT 27 UltLtCn', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
        'helvetica-narrow': ['Helvetica LT Narrow', 'Helvetica Neue Condensed', 'Helvetica Condensed', 'Arial Narrow', 'sans-serif'],
        'helvetica': ['Helvetica Neue LT', 'Helvetica Neue', 'Helvetica', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Italian Luxury Palette
        'italian-navy': "hsl(var(--italian-navy))",
        'ocean-blue': "hsl(var(--ocean-blue))",
        'deep-blue': "hsl(var(--deep-blue))",
        'marine-blue': "hsl(var(--marine-blue))",
        'luxury-gold': "hsl(var(--luxury-gold))",
        'golden-sunset': "hsl(var(--golden-sunset))",
        'warm-bronze': "hsl(var(--warm-bronze))",
        'italian-red': "hsl(var(--italian-red))",
        'deep-red': "hsl(var(--deep-red))",
        'platinum': "hsl(var(--platinum))",
        'silver-mist': "hsl(var(--silver-mist))",
        'charcoal': "hsl(var(--charcoal))",
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "wave": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-luxury": {
          "0%, 100%": { 
            transform: "scale(1)",
            boxShadow: "0 25px 50px -12px hsl(215 50% 12% / 0.35)"
          },
          "50%": { 
            transform: "scale(1.08)",
            boxShadow: "0 15px 35px -8px hsl(43 98% 58% / 0.45)"
          },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "glow": {
          "0%, 100%": {
            textShadow: "0 0 5px hsl(43 98% 58% / 0.5), 0 0 10px hsl(43 98% 58% / 0.3)"
          },
          "50%": {
            textShadow: "0 0 10px hsl(43 98% 58% / 0.8), 0 0 20px hsl(43 98% 58% / 0.5), 0 0 30px hsl(43 98% 58% / 0.3)"
          },
        },
        "breathe": {
          "0%, 100%": {
            transform: "scale(1) rotate(0deg)",
            opacity: "0.7"
          },
          "50%": {
            transform: "scale(1.1) rotate(180deg)",
            opacity: "1"
          },
        },
        "ripple": {
          "0%": {
            transform: "scale(0)",
            opacity: "1"
          },
          "100%": {
            transform: "scale(4)",
            opacity: "0"
          },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "slide-in-right": "slide-in-right 0.7s ease-out",
        "float": "float 4s ease-in-out infinite",
        "wave": "wave 8s ease-in-out infinite",
        "pulse-luxury": "pulse-luxury 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "glow": "glow 3s ease-in-out infinite",
        "breathe": "breathe 4s ease-in-out infinite",
        "ripple": "ripple 2s linear infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
