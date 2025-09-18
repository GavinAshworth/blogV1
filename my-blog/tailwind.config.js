/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,cjs}",
    ],
    theme: {
        extend: {
            fontFamily: {
                myFont: ["MyFont", "sans-serif"],
            },
            keyframes: {
                wave: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '25%': { transform: 'translateY(-6px)' },
                    '50%': { transform: 'translateY(4px)' },
                    '75%': { transform: 'translateY(-2px)' },
                },
            },
            animation: {
                wave: 'wave 3s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}
