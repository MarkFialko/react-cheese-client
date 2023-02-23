/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        screens: {
            'mdms': '480px',
            'mdmm': '560px',
            'mdm': '768px',
            'mdgridsmall': '680px',
            'mdgrid': '900px',
            'mdt': '992px',
            'mdd': '1200px',
            'mdpc': '1350px',
        }
        , colors: {
            main: '#FEFBEE',
            lightGray: '#F3F0E7',
            darkGray: '#808080',
            gray: '#666666',
            orangeForm: '#FDF2D8',
            warning: '#ef2929',
            orange: '#FD9339',
            orangeYellow: '#F5C775',
            dark: '#292929',
            white: "#FFFFFF",
            borderGray: "#E6E6E6",
            orangeLight: "#FFF1DB",
            info: "#3B86C6",
            black: "#000000",
            orangeSelected: "#FBE8BB",
            blackLight: "rgba(0,0,0,0.5)"
        },

    },
    plugins: [],
}
