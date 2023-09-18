/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'dark-blue-intro': '#070E23',  // HSL(217, 28%, 15%)
          'dark-blue-main': '#060C1F',   // HSL(218, 28%, 13%)
          'dark-blue-footer': '#0D160F', // HSL(216, 53%, 9%)
          'dark-blue-testimonials': '#14172D', // HSL(219, 30%, 18%)
        },
        accent: {
          'cyan': '#29B7D3',    // HSL(176, 68%, 64%)
          'blue': '#3FA2DB',    // HSL(198, 60%, 50%)
          'light-red': '#FF653F' // HSL(0, 100%, 63%)
        },
        neutral: {
          'white': '#FFFFFF',  // HSL(0, 0%, 100%)  
        },
      },
      fontFamily: {
        'body': ['Open Sans', 'sans'],
        'heading': ['Raleway', 'sans'],
      },
      fontSize: {
        '14': '14px',
      },
      fontWeight: {
        '400': 400,
        '700': 700,
      },
    },
  },
  plugins: [],
}
