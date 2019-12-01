export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    meta: [{
        charset: 'utf-8'
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
    color: '#fff'
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
      '@nuxtjs/google-analytics',
      {
        id: 'UA-145357881-3'
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Lazy load
    'nuxt-lazy-load'

  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
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
