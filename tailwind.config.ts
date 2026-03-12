import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f4f8",
          100: "#d9e2f0",
          200: "#b3c6e1",
          300: "#8daad2",
          400: "#678ec3",
          500: "#1e3a5f",
          600: "#1a3454",
          700: "#162d48",
          800: "#0f1f2e",
          900: "#0a1420",
        },
        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        serif: ["Fraunces", "serif"],
        display: ["Fraunces", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "scale-in": "scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "pulse-soft": "pulseSoft 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee var(--duration) linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    function ({
      addBase,
      addUtilities,
    }: {
      addBase: (styles: Record<string, unknown>) => void;
      addUtilities: (styles: Record<string, Record<string, string>>) => void;
    }) {
      addBase({
        "::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        "::-webkit-scrollbar-track": {
          background: "#f5f5f5",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#1e3a5f",
          borderRadius: "4px",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "#162d48",
        },
        "::selection": {
          backgroundColor: "#f97316",
          color: "#ffffff",
        },
        "*": {
          "@apply outline-none": {},
        },
        "button:focus-visible, a:focus-visible, input:focus-visible, textarea:focus-visible, select:focus-visible":
          {
            "@apply ring-2 ring-orange-500 ring-offset-2": {},
          },
        "input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus":
          {
            "@apply !bg-white !text-gray-900": {},
            "-webkit-box-shadow": "0 0 0 1000px white inset !important",
            "-webkit-text-fill-color": "#1f2937 !important",
          },
      });

      addUtilities({
        ".scrollbar-navy": {
          scrollbarColor: "#1e3a5f #f5f5f5",
        },
        ".custom-focus": {
          "@apply outline-none ring-2 ring-orange-500 ring-offset-2": {},
        },
      });
    },
  ],
};

export default config;
