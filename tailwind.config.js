/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    blue: "#1E3A8A",      // Royal Metallic Blue
                    dark: "#0F172A",      // Deep Slate / Base
                    silver: "#CBD5E1",    // Brushed Chrome Accent
                    light: "#F8FAFC",     // Machined Light Surface
                    gold: "#D97706",      // Industrial Gold CTA
                    orange: "#EA580C",    // Safety Orange
                }
            },
            fontFamily: {
                heading: ["Cinzel", "serif"],
                body: ["Inter", "sans-serif"],
            }
        },
    },
    plugins: [],
}