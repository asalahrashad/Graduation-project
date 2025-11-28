/** @type {import('tailwindcss').Config} */
import tokens from './src/styles/design-tokens.json';

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: tokens.colors.primary,
                secondary: tokens.colors.secondary,
                accent: tokens.colors.accent,
                text: tokens.colors.text,
                background: tokens.colors.background,
                status: tokens.colors.status,
            },
            fontFamily: {
                sans: [tokens.typography.fontFamily.primary.split(', ')[0].replace(/'/g, ''), 'sans-serif'],
            },
            borderRadius: {
                card: tokens.borderRadius.card,
                '3xl': tokens.borderRadius['3xl'],
            },
            boxShadow: {
                'glow': tokens.shadows.glow,
                'xl': tokens.shadows.xl,
            }
        },
    },
    plugins: [],
}
