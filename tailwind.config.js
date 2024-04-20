/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./day15/**/*.html"],
  theme: {
    extend: {
      colors:{
        b:{
          100:'#212121',
          200:'#1e1e1e',
          300:'#000000'
        },
        g:{
          100:'#b3b3b3',
          200:'#535353',
          300:'#292929'
        }
      },
      fontFamily:{
        Nunito: ['Nunito'],
        Montserrat: ['Montserrat']
      }
    },
  },
  plugins: [],
}

