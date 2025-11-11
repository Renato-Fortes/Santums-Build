/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0F1F",
        midnight: "#0A0F1F",
        surface: "#151B2E",
        primary: "#FF6B00",
        primaryLight: "#FFA733",
        primaryDark: "#E65A00",
        muted: "#9CA3AF",
        text: "#F5F5F5",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #FF6B00 0%, #FFA733 100%)",
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 20px #FF6B00, 0 0 30px #FF6B00, 0 0 40px #FF6B00' },
          '100%': { textShadow: '0 0 30px #FFA733, 0 0 40px #FFA733, 0 0 50px #FFA733' },
        },
      },
    },
  },
  plugins: [],
};
