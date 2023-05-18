<template>
        <div v-if="$vuetify.breakpoint.xs">
      <v-app-bar fixed app :color="sun ? 'primary' : ''" class="teal">
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
            <v-icon color="white" large>{{
              !sun ? 'mdi-weather-night' : 'mdi-white-balance-sunny'
            }}</v-icon>
          </div>
        </div>

        <div v-ripple class="text-center px-3 cursor-pointer">
          <div><v-icon color="white" large>mdi-translate</v-icon></div>
        </div>
      </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'CustomSaleOfSystemMaymaiShopNavbarMobile',

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
};
</script>

<style lang="scss" scoped>

</style>