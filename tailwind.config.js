/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        // Ini adalah warna primary yang Anda minta
        primary: '#5222e3', 
      },
      // Kita juga bisa tambahkan font yang elegan jika mau
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // Inter adalah font modern yang bersih
        'display': ['Poppins', 'sans-serif'], // Poppins bagus untuk heading
      }
    },
  },
  plugins: [],
}