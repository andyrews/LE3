/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      black1:'#1e1f22',
      black2:'#2b2d31',
      black3:'#2e3035',
      black4: '#313338',
      black5: '#232428',
      blue1:'#5865f2',
      blue2: '#4752c3',
      bluelink: '#00aafc',
      white1: '#f2f3f5',
      white2: '#b5bac1',
      white3: '#949ba4',
      white4: '#ffffff',
      red1: '#f8767a',
      green1: '#23a55a'
    },fontFamily: {
      sans: [
        'gg Sans',
      ]
    },
  },variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [require('daisyui'),],
}

