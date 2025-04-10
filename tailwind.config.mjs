/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#002C93',
        secondary: '#CBD2EC',
        accent: '#FFC107',
        dark: '#1A1A1A',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'blue-pattern': 'linear-gradient(90deg, #002C93 33.33%, #CBD2EC 33.33%, #CBD2EC 66.66%, #002C93 66.66%)',
        'hero-pattern': 'linear-gradient(to right bottom, rgba(0, 44, 147, 0.8), rgba(203, 210, 236, 0.8))',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [],
}