import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        primary: '#0EA5E9',
        'nav-bg': '#F8FAFC', // Light mode background
        'nav-bg-dark': '#1E293B', // Dark mode background
      },
      screens: {
        xs: '375px', // Small mobile devices
        sm: '640px', // Mobile devices
        md: '768px', // Tablets
        lg: '1024px', // Small laptops
        xl: '1280px', // Laptops
        '2xl': '1536px', // Large laptops/desktops
        '3xl': '1920px', // Large desktops
        '4xl': '2560px', // 4K displays
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      animation: {
        gradient: 'gradient 8s ease infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
