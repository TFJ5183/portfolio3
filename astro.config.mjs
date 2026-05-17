// @ts-check
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  site: "https://thekoi.dev",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Permanent Marker",
        cssVariable: "--marker-font",
      },
    ],
  },
})
