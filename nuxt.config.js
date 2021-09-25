export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',  href: './static/style.css' }, // CSS stylesheet
      { rel: 'stylesheet',  href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css' }, // Bootstrap CSS
      { rel: 'stylesheet',  href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css' }, // Font Awesome
      { rel: 'stylesheet',  href: 'https://fonts.googleapis.com/css?family=Kanit&display=swap' } // Kanit font
      //{ rel: 'stylesheet',  href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-star-rating/4.0.2/css/star-rating.min.css' } //Bootstrap Star Rating

    ], 
    script: [
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"} // Bootstrap Javascript
      // { src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-star-rating/4.0.2/js/star-rating.min.js"} // Star Rating
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './static/style.css'
  ],

  server: {
    port: 8000,
},

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    //https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next'// library for user authentication and storing token in the browser
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  //Update axios config below
  axios: {
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: 'http://localhost:3000/api/auth/login', method: 'post' },
          // logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: 'http://localhost:3000/api/auth/user', method: 'get' }
        }
      }
    }
  }

}
