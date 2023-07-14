import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - ecommerce_landing',
    title: 'SEL',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+Lao+Looped:wght@100;200;300;400;500&display=swap',
        rel: 'stylesheet',
      },
    ],
  },
  publicRuntimeConfig: {
    api: 'http://127.0.0.1:8080',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/node_modules/vuetify/dist/vuetify.min.css', '~assets/css/style.css','./assets/global.css'],
  script: [
    // '~assets/plugins/jquery/jquery.min.js',
    //   '~assets/plugins/bootstrap/js/popper.min.js',
    //   '~assets/plugins/bootstrap/js/bootstrap.bundle.min.js',
    //   '~assets/plugins/ionicons/ionicons.js',
    //   '~assets/plugins/moment/moment.js',
    //   '~assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js',
    //   '~assets/plugins/perfect-scrollbar/p-scroll.js',
    //   '~assets/plugins/rating/jquery.rating-stars.js',
    //   '~assets/plugins/rating/jquery.barrating.js',
    //   '~assets/plugins/mscrollbar/jquery.mCustomScrollbar.concat.min.js',
    //   '~assets/plugins/horizontal-menu/horizontal-menu-2/horizontal-menu.js',
    //   '~assets/js/sticky.js',
    //   '~assets/plugins/jquery-nice-select/js/jquery.nice-select.js',
    //   '~assets/plugins/jquery-nice-select/js/nice-select.js',
    //   '~assets/plugins/sidebar/sidebar.js',
    //   '~assets/plugins/sidebar/sidebar-custom.js',
    //   '~assets/js/custom.js',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugin/axios.js',
    },
    '~/plugin/global.js',
    '~/plugin/currency.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
  ],

  ssr: true,
  target: 'server',

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['cookie-universal-nuxt', '@nuxtjs/axios', '@nuxtjs/toast'],

  toast: {
    position: 'top-center',
    duration: 5000,
    theme: 'bubble',
    register: [
      // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
        },
      },
    ],
  },

  // PWA
  pwa: {
    meta: {
      title: 'E_Admin',
      author: 'Me',
    },
    manifest: {
      name: 'SKV_E_Landing',
      short_name: 'landing_project',
      description: 'fantastic pwa for weather done locally',
      lang: 'en',
      theme_color: '#222',
      backgroud_color: '#222',
      start_url: '/',
      prefer_related_applications: true,
    },
    icon: {
      fileName: 'icon.png',
      size: [64, 120, 144, 152, 192, 384, 512],
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  target: 'static',
  server: {
    host: '0.0.0.0',
  },
}
