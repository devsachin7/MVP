/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#10B981",
        background: "#F9FAFB",
        card: "#FFFFFF",
        text: {
          primary: "#111827",
          secondary: "#6B7280",
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #851A31 0%, #DE1E37 50%, #DE1E37 100%)',
      },
    },
  },
  plugins: [],
} 