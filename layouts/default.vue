<template>
  <v-app :dark="dark">
    <!------------------------mobile nar bar------------------------------------ mobile screen -->
  <LayoutsNavbarMobile/>
    <!---------------- desktop nav bar---------------------------------------------------desktop nav bar----------------->
    <LayoutsNavbarDesktop/>
    <!-- ------------Main nuxt--------------------------------------------------main nuxt --------------------->
    <!-- Loader -->
    <!-- <div id="global-loader">
      <img src="/assets/img/loader.svg" class="loader-img" alt="Loader" />
    </div> -->
    <!-- /Loader -->
    <v-main :class="sun ? '' : 'bgcolor'">
        <Nuxt />
    </v-main>
    <!----------------------------------- chats whatsapp andd massenger -->
    <Chats/>
    <!----------------mobile footer------------------------------------------- foooter for mobile screen -->
       <layoutsFooterMobile/>
    <!--------------------------desktop footer screen---------------------------------------- desktop screen -->
    <v-footer v-if="!$vuetify.breakpoint.xs"> </v-footer>
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
