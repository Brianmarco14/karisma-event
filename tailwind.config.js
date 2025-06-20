/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
        extend: {
            colors: {
                biru: {
                    DEFAULT: '#1E3A89',
                    dark: '#172655',
                },
                hijau: {
                    DEFAULT: '#16A24B',
                    dark: '#047957',
                },
                merah: {
                    DEFAULT: '#B91C1C',
                    dark: '#7F1D1D',
                },
                kuning: {
                    DEFAULT: '#facc15',
                    dark: '#EAB308',
                },
                abu: {
                    DEFAULT: '#F2F2F2',
                    dark: '#D2D2D2',
                },
            }

        },
    }
    ,
    plugins: [],
}

