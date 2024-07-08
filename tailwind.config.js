/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
        },
        colors: {
            'main-blue': '#082AC8',
            'bright-yellow': '#FDD75C',
            'orange': '#FF844F',
            'pinky-red': '#F14B3D',
            'green': '#60D294',
            'light-grey': '#F8F9FA',
            'really-grey': '#595F64',
            'types': {
                'bug': '#069668',
                'dragon': '#2DC4B6',
                'grass': '#18C172',
                'steal': '#72E1A6',
                'dark': '#444649',
                'flying': '#8B9BAC',
                'normal': '#C18CBA',
                'ghost': '#9A54A1',
                'rock': '#63320B',
                'ground': '#885628',
                'fighting': '#C75000',
                'fire': '#EF271B',
                'electric': '#FEBF00',
                'poison': '#6E44FF',
                'psychic': '#DB00B6',
                'fairy': '#EE4168',
                'water': '#4261EE',
                'ice': '#90E0EF',
            }
        },
        extend: {},
    },
    plugins: [],
}
