// tailwind.config.js (หรือ .ts)
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <--- ต้องมีบรรทัดนี้
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // ตรวจสอบให้แน่ใจว่า path ของไฟล์ที่คุณใช้ Tailwind ถูกต้อง
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};