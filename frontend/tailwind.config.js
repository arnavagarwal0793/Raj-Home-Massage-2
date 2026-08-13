/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ["Anybody", "sans-serif"],
        body: ['"DM Sans"', "sans-serif"],
      },
      colors: {
        vapor: {
          background: "#f8f9ff",
          onbackground: "#0d1c2d",
          surface: "#f8f9ff",
          surfacedim: "#ccdbf2",
          surfacebright: "#f8f9ff",
          containerlowest: "#ffffff",
          containerlow: "#eef4ff",
          container: "#e5efff",
          containerhigh: "#dbe9ff",
          containerhighest: "#d4e4fa",
          variant: "#d4e4fa",
          onsurface: "#0d1c2d",
          onsurfacevariant: "#45464c",
          outline: "#76777d",
          outlinevariant: "#c6c6cd",
          primary: "#575e72",
          onprimary: "#ffffff",
          primarycontainer: "#e0e7ff",
          onprimarycontainer: "#60677b",
          secondary: "#6f5092",
          onsecondary: "#ffffff",
          secondarycontainer: "#d9b5ff",
          onsecondarycontainer: "#614283",
          tertiary: "#576065",
          ontertiary: "#ffffff",
          tertiarycontainer: "#e0e9ef",
          ontertiarycontainer: "#60696e",
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
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
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};