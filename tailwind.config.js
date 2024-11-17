/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Enables dark mode by toggling the 'dark' class
  content: [
    './pages/**/*.{ts,tsx}', // Includes all pages for Tailwind processing
    './components/**/*.{ts,tsx}', // Includes all components
    './app/**/*.{ts,tsx}', // Includes Next.js app directory
    './styles/**/*.css'    // Include the styles directory
  ],
  theme: {
    container: {
      center: true, // Centers container elements
      padding: "2rem", // Adds padding for responsiveness
      screens: {
        "2xl": "1400px", // Maximum width for larger screens
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))", // Dynamic border color
        input: "hsl(var(--input))", // Dynamic input background
        ring: "hsl(var(--ring))", // Dynamic ring color for focus
        background: "hsl(var(--background))", // Background color
        foreground: "hsl(var(--foreground))", // Text foreground color
        primary: {
          DEFAULT: "hsl(var(--primary))", // Main theme color
          foreground: "hsl(var(--primary-foreground))", // Primary text
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Secondary theme
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))", // Destructive actions
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))", // Muted colors for subtle text
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // Accent colors for emphasis
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))", // Popover background
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))", // Card background
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)", // Customizable large radius
        md: "calc(var(--radius) - 2px)", // Medium radius
        sm: "calc(var(--radius) - 4px)", // Small radius
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 }, // Accordion open animation
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" }, // Accordion close animation
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out", // Smooth open
        "accordion-up": "accordion-up 0.2s ease-out", // Smooth close
      },
      spacing: {
        'header': 'var(--header-height)', // Dynamic header spacing
        'sidebar': 'var(--sidebar-width)', // Dynamic sidebar width
      },
      maxWidth: {
        'sidebar': 'var(--sidebar-width)', // Sidebar max width
      },
      minHeight: {
        'content': 'calc(100vh - var(--header-height))', // Content height based on header
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Adds animation utilities
    require('@tailwindcss/forms'), // Improves form styles
    require('@tailwindcss/typography'), // Enhances text readability
    require('@tailwindcss/forms'), 
  ],
};
