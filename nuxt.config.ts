// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false, 
  app: {
    // This tells Nuxt to look inside your repository subfolder for styles and files
    baseURL: '/piccasodeko.github.io/' 
  }
})
