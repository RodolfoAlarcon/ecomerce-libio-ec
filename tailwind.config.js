/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
            screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        'custom': '25px'
      },
      colors: {
        'custom-gray': '#ebebeb'
      },
      minHeight: {
        'screen-80': 'calc(100vh - 80px)',
      },
      height: {
        '88vh': '88vh'
      }
    },
  },
  plugins: [],
}

