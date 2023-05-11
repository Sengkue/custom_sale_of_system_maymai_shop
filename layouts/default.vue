<template>
  <v-app :dark="dark">
    <head>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=0"
      />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="Description"
        content="Bootstrap Responsive Admin Web Dashboard HTML5 Template"
      />
      <meta name="Author" content="Spruko Technologies Private Limited" />
      <meta
        name="Keywords"
        content="admin,admin dashboard,admin dashboard template,admin card template,admin template,admin theme,bootstrap 4 admin template,bootstrap 4 dashboard,bootstrap admin,bootstrap admin dashboard,bootstrap admin card,bootstrap admin template,bootstrap admin theme,bootstrap dashboard,bootstrap form template,bootstrap card,bootstrap ui kit,dashboard bootstrap 4,dashboard design,dashboard html,dashboard template,dashboard ui kit,envato templates,flat ui,html,html and css templates,html dashboard template,html5,jquery html,premium,premium quality,sidebar bootstrap 4,template admin bootstrap 4"
      />

      <!-- Icons css -->
      <link href="/assets/css/icons.css" rel="stylesheet" />

      <!-- Bootstrap css -->
      <link
        href="/assets/plugins/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <!--  Right-sidemenu css -->
      <link href="/assets/plugins/sidebar/sidebar.css" rel="stylesheet" />

      <!--  Custom Scroll bar-->
      <link
        href="/assets/plugins/mscrollbar/jquery.mCustomScrollbar.css"
        rel="stylesheet"
      />

      <!--- Style css-->
      <link href="/assets/css/style.css" rel="stylesheet" />
      <link href="/assets/css/style-dark.css" rel="stylesheet" />
      <link href="/assets/css/boxed.css" rel="stylesheet" />
      <link href="/assets/css/dark-boxed.css" rel="stylesheet" />

      <!-- Internal Nice-select css  -->
      <link
        href="/assets/plugins/jquery-nice-select/css/nice-select.css"
        rel="stylesheet"
      />

      <!---Skinmodes css-->
      <link href="/assets/css/skin-modes.css" rel="stylesheet" />

      <!--- Animations css-->
      <link href="/assets/css/animate.css" rel="stylesheet" />
    </head>

    <!------------------------mobile nar bar------------------------------------ mobile screen -->
    <div v-if="$vuetify.breakpoint.xs">
      <v-app-bar fixed app :color="sun ? 'primary' : ''">
        <v-avatar v-ripple to="/" @click="goHome('/')">
          <v-img src="/image/icon.png" width="20" contain></v-img>
        </v-avatar>
        <v-spacer></v-spacer>

        <v-text-field
          v-model="search"
          class="ml-1"
          placeholder="search"
          :background-color="sun ? '' : 'white'"
          outlined
          dense
          hide-details="auto"
          append-icon="mdi-magnify"
        >
        </v-text-field>

        <v-spacer />
        <div v-ripple class="text-center px-3 cursor-pointer" @click="setTheme">
          <div>
            <v-icon large>{{
              !sun ? 'mdi-weather-night' : 'mdi-white-balance-sunny'
            }}</v-icon>
          </div>
        </div>

        <div v-ripple class="text-center px-3 cursor-pointer">
          <div><v-icon large>mdi-translate</v-icon></div>
        </div>
      </v-app-bar>
    </div>

    <!---------------- desktop nav bar---------------------------------------------------desktop nav bar----------------->
    <v-app-bar v-else fixed app>
      <v-container class="d-flex align-center">
        <v-avatar v-ripple to="/" @click="goHome('/')">
          <v-img src="/image/icon.png" width="20" contain></v-img>
        </v-avatar>
        <v-toolbar-title class="px-1 cursor-pointer">{{
          title
        }}</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-text-field
          v-model="search"
          placeholder="search"
          outlined
          dense
          hide-details="auto"
          @input="$store.commit('product/setSearchValue', $event)"
        >
          <template #append>
            <v-btn text small @click="onSearch">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </template>
        </v-text-field>

        <v-spacer />
        <div v-ripple class="text-center px-3 cursor-pointer" @click="setTheme">
          <div>
            <v-icon color="blue">{{
              !sun ? 'mdi-weather-night' : 'mdi-white-balance-sunny'
            }}</v-icon>
          </div>
          <div>{{ !sun ? 'dark' : 'sun' }}</div>
        </div>
        <div
          v-ripple
          class="text-center px-3 cursor-pointer"
          @click="goTo('/login')"
        >
          <div><v-icon to="/login" color="blue">mdi-account</v-icon></div>
          <div>Profile</div>
        </div>
        <div
          v-ripple
          class="text-center px-3 cursor-pointer"
          @click="goDetail('/products/cart')"
        >
          <v-badge
            v-if="getCardNumber"
            color="red"
            :content="getCardNumber"
            overlap
          >
            <div>
              <v-icon color="blue">mdi-cart-outline</v-icon>
            </div>
            <div>cart</div>
          </v-badge>
          <div v-else>
            <div>
              <v-icon color="blue">mdi-cart-outline</v-icon>
            </div>
            <div>cart</div>
          </div>
        </div>
        <div v-ripple class="text-center px-3 cursor-pointer">
          <div><v-icon color="blue">mdi-translate</v-icon></div>
          <div>English</div>
        </div>
      </v-container>
    </v-app-bar>
    <!-- ------------Main nuxt--------------------------------------------------main nuxt --------------------->
    <!-- Loader -->
    <!-- <div id="global-loader">
      <img src="/assets/img/loader.svg" class="loader-img" alt="Loader" />
    </div> -->
    <!-- /Loader -->
    <v-main :class="sun ? '' : 'bgcolor'">
      <v-container>
        <Nuxt />
      </v-container>
      <div class="text-center">

        <v-menu
  bottom
  right
  absolute
  :offset-y="true"
  style="position: fixed; z-index: 9999;"
>
  <v-btn>love</v-btn>
</v-menu>

  </div>

      <div v-if="floating">
        <v-btn
          fab
          dark
          fixed
          bottom
          right
          color="blue"
          :class="$vuetify.breakpoint.xs? 'mr-n4':''"
          href="https://m.me/JustinSengWebdeveloper"
          target="_blank"
          style="bottom: 190px"
        >
          <v-icon size="24">mdi-facebook-messenger</v-icon>
        </v-btn>

        <v-btn
          fab
          dark
          fixed
          bottom
          right
          :class="$vuetify.breakpoint.xs? 'mr-n4':''"
          style="bottom: 130px"
          color="green"
          href="https://wa.me/8562078781525"
          target="_blank"
        >
          <v-icon size="24">mdi-whatsapp</v-icon>
        </v-btn>
      </div>
      <v-btn
          :small="$vuetify.breakpoint.xs"
          :class="$vuetify.breakpoint.xs? 'mr-n4':''"
          fab
          dark
          fixed
          bottom
          right
          class="teal"
          style="bottom: 65px"
          @click="floating = !floating"
          
        >
          <v-icon>{{floating? 'mdi-close':'mdi-chat'}}</v-icon>
        </v-btn>
    </v-main>
    <!----------------mobile footer------------------------------------------- foooter for mobile screen -->
    <v-footer
      v-if="$vuetify.breakpoint.xs"
      fixed
      app
      :color="sun ? 'primary' : ''"
    >
      <v-container class="d-flex align-center justify-space-between ma-0 pa-2">
        <div
          v-ripple
          class="text-center px-0 cursor-pointer"
          @click="goHome('/')"
        >
          <div><v-icon to="/" large>mdi-home</v-icon></div>
        </div>
        <div
          v-ripple
          class="text-center px-0 cursor-pointer"
          @click="goCategory('/category')"
        >
          <div>
            <v-icon to="/category" large>mdi-shape-outline</v-icon>
          </div>
        </div>
        <div v-ripple class="text-center" to="/" @click="goHome('/')">
          <div elevation="8">
            <v-avatar class="mt-n9 cursor-pointer" elevation="8"
              ><v-img
                src="/image/redBlack.gif"
                max-width="60"
                max-height="60"
              ></v-img
            ></v-avatar>
          </div>
          <div class="mt-n2 cursor-pointer">{{ title }}</div>
        </div>

        <div
          v-ripple
          class="text-center px-0 cursor-pointer"
          @click="goDetail('/products/cart')"
        >
          <div><v-icon large>mdi-cart-outline</v-icon></div>
        </div>

        <div
          v-ripple
          class="text-center px-0 cursor-pointer"
          @click="goTo('/login')"
        >
          <div><v-icon to="/login" large>mdi-account</v-icon></div>
        </div>
      </v-container>
    </v-footer>
    <!--------------------------desktop footer screen---------------------------------------- desktop screen -->
    <v-footer v-else> </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      num: 0,
      sun: false,
      clipped: false,
      drawer: false,
      fixed: false,
      search: '',
      title: 'MayMaiShop',
      dark: false,
      floating:false,
    }

  },
  head() {
    return {
      script: [
        { src: '/assets/plugins/jquery/jquery.min.js', body: true },
        { src: '/assets/plugins/bootstrap/js/popper.min.js', body: true },
        {
          src: '/assets/plugins/bootstrap/js/bootstrap.bundle.min.js',
          body: true,
        },
        { src: '/assets/plugins/ionicons/ionicons.js', body: true },
        { src: '/assets/plugins/moment/moment.js', body: true },
        {
          src: '/assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js',
          body: true,
        },
        { src: '/assets/plugins/perfect-scrollbar/p-scroll.js', body: true },
        { src: '/assets/plugins/rating/jquery.rating-stars.js', body: true },
        { src: '/assets/plugins/rating/jquery.barrating.js', body: true },
        {
          src: '/assets/plugins/mscrollbar/jquery.mCustomScrollbar.concat.min.js',
          body: true,
        },
        {
          src: '/assets/plugins/horizontal-menu/horizontal-menu-2/horizontal-menu.js',
          body: true,
        },
        { src: '/assets/js/sticky.js', body: true },
        {
          src: '/assets/plugins/jquery-nice-select/js/jquery.nice-select.js',
          body: true,
        },
        {
          src: '/assets/plugins/jquery-nice-select/js/nice-select.js',
          body: true,
        },
        { src: '/assets/plugins/sidebar/sidebar.js', body: true },
        { src: '/assets/plugins/sidebar/sidebar-custom.js', body: true },
        { src: '/assets/js/custom.js', body: true },
      ],
    }
  },

  computed: {
    getCardNumber() {
      return this.$store.state.cart.number
    },
  },
  watch: {},

  created() {
    this.dark = this.$cookies.get('mode')
    this.$vuetify.theme.dark = this.dark
    this.sun = this.dark
  },
  mounted() {
    this.$store.dispatch('product/search')
  },

  methods: {
    goTo(to) {
      //
      this.$router.push(to)
    },
    goCategory(to) {
      this.$router.push(to)
    },
    goHome(to) {
      this.$router.push(to)
    },
    goDetail(to) {
      this.$router.push(to)
    },

    setTheme() {
      this.sun = !this.sun
      this.dark = this.sun
      if (this.sun === true) {
        this.$vuetify.theme.dark = true
        this.$cookies.set('mode', true)
        return true
      } else {
        this.$vuetify.theme.dark = false
        this.$cookies.set('mode', false)
        return false
      }
    },
    onSearch() {
      this.$store.dispatch('product/search', { search: this.search, limit: 8 })
      this.$router.push('/search')
    },
  },
}
</script>

<style lang="scss" scoped>
.cursor-pointer {
  cursor: pointer !important;
}

.bg {
  background: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#071b52),
    to(teal)
  );
  background: linear-gradient(270deg, #071b52 0, teal);
}
.bgcolor {
  background-color: #f3f3f3;
}
</style>
