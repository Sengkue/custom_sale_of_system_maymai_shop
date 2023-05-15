<template>
  <v-footer
    v-if="$vuetify.breakpoint.xs"
    fixed
    app
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
</template>

<script>
export default {
  name: 'CustomSaleOfSystemMaymaiShopFooterMobile',
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
    }

  },

  computed: {
    getCardNumber() {
      return this.$store.state.cart.number
    },
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
  },
}
</script>
