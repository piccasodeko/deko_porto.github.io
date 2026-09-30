// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false, // Set to false for a static Single Page Application on GitHub Pages
  app: {
    baseURL: '/' // Root directory configuration for dekoporto.github.io
  }
})
