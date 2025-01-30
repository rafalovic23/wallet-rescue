import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}" // Prépare l'évolution vers App Router
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2', // Ta couleur Privy
        dark: '#0F172A'    // Un noir plus profond
      }
    },
  },
  plugins: [],
}

export default config