/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'faded-bg': 'rgba(0,0,0,0.4)',
        'body': '#f4f5fa',
        'custom-primary': '#5570f1'
      },
      textColor: {
        'custom-primary': '#5570f1'
      },
      minWidth: {
        '5xl': '1024px'
      },
      maxWidth: {
        'large-desktop': '1920px'
      },
      borderColor: {
        'body': 'f4f5fa'
      },
      borderWidth: {
        'thin': '1px'
      }
    },
  },
  plugins: [],
}
