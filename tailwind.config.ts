import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        alphera: "#2E3192",
        accentPurple: "#7A68F5",
        glass: "rgba(255,255,255,0.25)",
      },
      boxShadow: {
        soft:
          "inset 2px 2px 4px rgba(255,255,255,0.6), inset -3px -3px 8px rgba(0,0,0,0.08), 6px 6px 12px rgba(0,0,0,0.05)",
        innerBubble:
          "inset 2px 2px 6px rgba(255,255,255,0.7), inset -3px -3px 6px rgba(0,0,0,0.1)",
      },
      backdropBlur: { glass: "25px" },
      fontFamily: { inter: ["Inter", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
