/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.antlers.php",
        "./content/**/*.md",
    ],

    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#9BDDFE",
                    50: "#FFFFFF",
                    100: "#FFFFFF",
                    200: "#FFFFFF",
                    300: "#ECF8FF",
                    400: "#C3EBFE",
                    500: "#9BDDFE",
                    600: "#63CAFD",
                    700: "#2CB7FD",
                    800: "#02A0EE",
                    900: "#027AB7",
                    950: "#02689B",
                },
                secondary: {
                    DEFAULT: "#FE2301",
                    50: "#FFC1B8",
                    100: "#FFB0A4",
                    200: "#FE8D7B",
                    300: "#FE6952",
                    400: "#FE462A",
                    500: "#FE2301",
                    600: "#C61B01",
                    700: "#8E1401",
                    800: "#560C00",
                    900: "#1E0400",
                    950: "#030000",
                },
                "bg-primary": "#02A0EE",
            },
        },
    },

    plugins: [require("@tailwindcss/typography")],
};
