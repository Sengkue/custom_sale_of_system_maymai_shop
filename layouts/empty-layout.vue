<template>
    <v-app :dark="dark">
      <!----------------mobile nar bar----------- -->
    <!-- <LayoutsNavbarMobile/> -->
    <CheckoutNavbarMobile/>
      <!--------------- desktop nav bar-------------------------->
      <LayoutsNavbarDesktop/>
      <!-- ------------Main nuxt----------------------------->
      <v-main :class="sun ? '' : 'bgcolor'">
          <Nuxt />
      </v-main>
      <!-------------- chats whatsapp andd massenger -->
      <Chats/>

      <!---------------desktop footer screen-------------- -->
      <v-footer v-if="!$vuetify.breakpoint.xs"> </v-footer>
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'empty-layout',
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
  