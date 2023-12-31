/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'purple-10': '#EBEAFA',
      'purple-20': '#CBC8F5',
      'purple-30': '#A8A4F2',
      'purple-40': '#847EF1',
      'purple-50': '#5E56F2',
      'purple-60': '#4B45B8',
      'purple-70': '#36327F',
      'purple-80': '#201E48',
      'purple-90': '#080812',
      'blue-10': '#E3E9F6',
      'blue-20': '#B5C7E9',
      'blue-30': '#85A4DF',
      'blue-40': '#5281D8',
      'blue-50': '#1D5CD3',
      'blue-60': '#1948A0',
      'blue-70': '#14336E',
      'blue-80': '#0C1E3E',
      'blue-90': '#040810',
      'white-10': '#F4F7FD',
      'white-20': '#D8DBE0',
      'white-30': '#C0C2C7',
      'white-40': '#A7A9AD',
      'white-50': '#8F9094',
      'black-60': '#747578',
      'black-70': '#595A5C',
      'black-80': '#3D3E40',
      'black-90': '#222324',
      'black-100': '#0C0C0D',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1216px', 
    },

    fontFamily: {
      sans: '"AeonikPro"',
      'body': '"SFProDisplay"',
    },
    extend: {},
  },
  plugins: [],
}

