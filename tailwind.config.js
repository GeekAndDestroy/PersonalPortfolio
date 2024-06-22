/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      extend: {},
  },
  daisyui: {
      themes: [
        "cyberpunk",
        "light",
        "dracula",
        "acid",
        "halloween",
          {
              dark: {
                  primary: "#00ff00",
                  secondary: "#E200E6",
                  accent: "#ffff00",
                  neutral: "#E200E6",
                  "base-100": "#21325E",
                  info: "#0000ff",
                  success: "#00ff00",
                  warning: "#00ff00",
                  error: "#ff0000",
                  "--glass-opacity": "5%",
                  "--glass-reflex-opacity": "3%",
                  "--glass-blur": "25px",
              },
              // light: {
              //   "primary": "#00ff00",
              //   "secondary": "#E200E6",
              //   "accent": "#ffff00",
              //   "neutral": "#E20026",
              //   "base-100": "#ffffff",
              //   "info": "#0000ff",
              //   "success": "#00ff00",
              //   "warning": "#00ff00",
              //   "error": "#ff0000",
              //   "--glass-opacity": "5%",
              //   "--glass-reflex-opacity": "3%",
              //   "--glass-blur": "25px",
              //   "#file-upload-button": {
              //     "background-color": "#E200E6",
              //   },
                        //  },
          },
      ],
  },
  plugins: [require("daisyui")],
};
