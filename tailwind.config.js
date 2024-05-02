/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],

    theme: {
      extend: {
        colors: {
          // Base colors with names
       
          // Custom usage colors with names
          primary: '#14213d', // Primary Blue - Primary buttons, active links
          secondary: '#6c757d', // Secondary Gray - Secondary text, borders
          success: '#28a745', // Success Green - Success messages, confirm buttons
          info: '#17a2b8', // Info Cyan - Informational alerts
          warning: '#ff8d07', // Warning Orange - Warnings, caution buttons
          danger: '#dc3545', // Danger Red - Error messages, delete buttons
          light: '#f8f9fa', // Light - Backgrounds, light text
          dark: '#14213d', // Dark Blue - Dark themes, contrast text
          'primary-2': '#fca311', // Vibrant Orange - Highlight, call to action
          'primary-3': '#14213d', // Deep Blue - Solid backgrounds, text
        },
        fontFamily: {
          sans: ['"Inter UI"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
          mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
        },
        screens: {
          // Custom breakpoints with names
          xs: '0px', // Extra Small - Custom, not a default Tailwind breakpoint
          sm: '576px', // Small devices (landscape phones, 576px and up)
          md: '768px', // Medium devices (tablets, 768px and up)
          lg: '992px', // Large devices (desktops, 992px and up)
          xl: '1200px', // Extra large devices (large desktops, 1200px and up)
        },
      },
    },
    variants: {},
    plugins: [],
  };
  



