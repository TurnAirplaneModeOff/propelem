/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    fontSize: {
      'p': ['24px', {
        letterSpacing: '2px',
      }],
      'pLg': ['22px', {
        letterSpacing: '1.3px',
      }],
      'pMd': ['20px', {
        letterSpacing: '1.2px',
      }],
      'pSm': ['18px', {
        letterSpacing: '1.2px',
      }],
      'head': ['64px', {
        lineHeight: '64px',
      }],
      'headLg': ['48px', {
        lineHeight: '48px',
      }],
      'headMd': ['44px', {
        lineHeight: '44px',
      }],
      'headSm': ['36px', {
        lineHeight: '36px',
      }],
      'textFooter': '48px',
      'textFooterLg': '44px',
      'textFooterMg': '42px',
      'textFooterSm': '32px',
      'cardTextHead': '24px',
      'cardTextP': '18px'
    },
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'gilda': ['Gilda Display', 'serif'],
        'dancing-script': ['Dancing Script', 'cursive'],
      },
    },

    screens: {
      '2xl': {'max': '1536px'},
      // 'xxl': {'max': '1450px'},
      // 'xl': {'max': '1280px'},
      'lg': {'max': '1024px'},
      'md': {'max': '768px'},
      'sm': {'max': '641px'},
    },
  },
  plugins: [],
}

