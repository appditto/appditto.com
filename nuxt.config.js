module.exports = {
  mode: 'universal',
  /*
   *** Headers of the page
   */
  head: {
    meta: [{
      charset: 'utf-8'
    },
    {
      'http-equiv': 'Accept-CH',
      content: 'DPR, Width'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#515EFF',
    height: '4px',
    failed: '#ff6351',
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    [
      // Tailwind
      '@nuxtjs/tailwindcss',
      // Analytics
      {
        id: 'UA-145357881-3'
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : 'https://appditto.com/api'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
    filenames: {
      app: ({
        isDev
      }) => isDev ? '[name].js' : '[name].[chunkhash].js',
      chunk: ({
        isDev
      }) => isDev ? '[name].js' : '[name].[chunkhash].js',
      css: ({
        isDev
      }) => isDev ? '[name].css' : '[name].[contenthash].css',
      img: ({
        isDev
      }) => isDev ? '[path][name].[ext]' : 'img/[name].[hash:7].[ext]',
      font: ({
        isDev
      }) => isDev ? '[path][name].[ext]' : 'fonts/[name].[hash:7].[ext]',
      video: ({
        isDev
      }) => isDev ? '[path][name].[ext]' : 'videos/[name].[hash:7].[ext]'
    }
  }
}
