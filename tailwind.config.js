/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#F7FBFA', // Blanco roto
                surface: {
                    primary: '#FFFFFF',
                    secondary: '#CFF5EE', // Menta clara
                    dark: '#0E3A3A',
                },
                brand: {
                    petrol: '#0E3A3A', // Verde petróleo oscuro (Base)
                    teal: '#0F6F6A',   // Teal profundo (Corporativo)
                    action: '#14A39A', // Teal medio (Acciones)
                    lime: '#9EDC3B',   // Verde lima (Acento)
                },
                text: {
                    primary: '#1F2D2B',   // Gris texto principal
                    secondary: '#5E6E6B', // Gris secundario
                    tertiary: '#9CA3AF',
                    light: '#FFFFFF',     // Texto sobre fondos oscuros
                },
                border: {
                    subtle: '#E2ECE9', // Gris línea
                    highlight: '#14A39A',
                }
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                spotlight: "spotlight 2s ease .75s 1 forwards",
                "shimmer-slide": "shimmer-slide 3s ease-in-out infinite alternate",
                "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
                "luma-loader": "luma-loader 2.5s infinite",
            },
            keyframes: {
                spotlight: {
                    "0%": { opacity: 0, transform: "translate(-72%, -62%) scale(0.5)" },
                    "100%": { opacity: 1, transform: "translate(-50%,-40%) scale(1)" },
                },
                "spin-around": {
                    "0%": { transform: "translateZ(0) rotate(0)" },
                    "15%, 35%": { transform: "translateZ(0) rotate(90deg)" },
                    "65%, 85%": { transform: "translateZ(0) rotate(270deg)" },
                    "100%": { transform: "translateZ(0) rotate(360deg)" },
                },
                "shimmer-slide": {
                    to: { transform: "translate(calc(100cqw - 100%), 0)" },
                },
                "luma-loader": {
                    "0%": { inset: "0 35px 35px 0" },
                    "12.5%": { inset: "0 35px 0 0" },
                    "25%": { inset: "35px 35px 0 0" },
                    "37.5%": { inset: "35px 0 0 0" },
                    "50%": { inset: "35px 0 0 35px" },
                    "62.5%": { inset: "0 0 0 35px" },
                    "75%": { inset: "0 0 35px 35px" },
                    "87.5%": { inset: "0 0 35px 0" },
                    "100%": { inset: "0 35px 35px 0" }
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            }
        }
    },
    plugins: [],
}
