module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    purge: ['./src/**/*.html',
        './src/**/*.js'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
