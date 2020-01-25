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
    'nuxt-ssr-cache',
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
  },
  cache: {
    useHostPrefix: false,
    pages: [
      '/',
    ],

    key(route, context) {
      // custom function to return cache key, when used previous
      // properties (useHostPrefix, pages) are ignored. return 
      // falsy value to bypass the cache
    },
    store: {
      type: 'memory',
      // maximum number of pages to store in memory
      // if limit is reached, least recently used page
      // is removed.
      max: 100,

      // number of seconds to store this page in cache
      ttl: 3600,
    },
  },
}