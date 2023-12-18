import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1182c5",
        secondary: "#2aa6df"
      },

      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
}
export default config
