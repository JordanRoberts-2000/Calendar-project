const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [
    plugin(({ addBase, theme, addVariant, addUtilities }) => {
      addVariant('starting', '@starting-style');
      addVariant('popover-open', '&:popover-open');
      addVariant('popover-closed', '&:not(:popover-open)');
      addUtilities({
        '.allow-discrete': { transitionBehavior: 'allow-discrete' },
      });
      addBase({
        ':root': {
          '--color-secondary': theme('colors.red.500'),
        },
      });
    }),
      require("tailwindcss-animate")
],
};
