// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/color-mode', '@nuxtjs/google-fonts'],
  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [
        { 
          charset: 'utf-8',
          name: 'description',
          content: 'Everything you need to know about Nuxt.js'
       },
      ],
      link : [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    },
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  }
})