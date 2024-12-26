import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vietnam: ["Be Vietnam Pro", "serif"],
      },
      colors: {
        "primary-50": "#ff9500",
        "primary-70": "#ffbf66",
        "primary-75": "#ffd499",
        "primary-80": "#ffeacc",
        "primary-90": "#fff4e5",
        "primary-95": "#fff4e5",
        "primary-97": "#fff9f0",
        "primary-99": "#fffdfa",
        "light-90": "#e4e4e7",
        "light-95": "#f1f1f3",
        "light-97": "#f7f7f8",
        "light-99": "#fcfcfd",
        "dark-10": "#191919",
        "dark-15": "#262626",
        "dark-20": "#333333",
        "dark-30": "#4c4c4d",
        "dark-35": "#59595a",
        "dark-40": "#656567",
        "dark-60": "#98989a",
        "dark-70": "#b3b3b3",
      },
      screens: {
        xs: "390px",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
        },
      },
    },
  },
} satisfies Config;
