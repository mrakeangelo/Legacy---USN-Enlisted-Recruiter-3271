/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e6f2',
          200: '#b3cce5',
          300: '#8db3d8',
          400: '#6699cb',
          500: '#4080be',
          600: '#336699',
          700: '#264d73',
          800: '#1a334d',
          900: '#0a192f',
        },
        gold: {
          50: '#fefcf3',
          100: '#fdf8e1',
          200: '#fbf0c4',
          300: '#f8e9a1',
          400: '#f4d97e',
          500: '#f0c955',
          600: '#d4a73a',
          700: '#b8861f',
          800: '#9c6504',
          900: '#804400',
        },
        steel: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#d3d8de',
          300: '#bdc4cd',
          400: '#a7b0bc',
          500: '#919cab',
          600: '#7b889a',
          700: '#657489',
          800: '#4f6078',
          900: '#2e3440',
        },
        blush: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(248, 233, 161, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(248, 233, 161, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'flag-pattern': "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"stars\" x=\"0\" y=\"0\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"><circle cx=\"10\" cy=\"10\" r=\"1\" fill=\"%23f8e9a1\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23stars)\"/></svg>')",
        'gradient-navy': 'linear-gradient(135deg, #0a192f 0%, #1a334d 100%)',
        'gradient-gold': 'linear-gradient(135deg, #f8e9a1 0%, #f0c955 100%)',
      }
    },
  },
  plugins: [],
}