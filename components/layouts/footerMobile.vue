<template>
  <v-footer
    v-if="$vuetify.breakpoint.xs"
    fixed
    app
    class="teal rounded-lg rounded-b-0"
  >
    <v-container class="d-flex align-center justify-space-between ma-0 pa-2">
      <div
        v-ripple
        class="text-center px-0 cursor-pointer"
        @click="goHome('/')"
      >
        <div><v-icon color="white" to="/" large>mdi-home</v-icon></div>
      </div>
      <div
        v-ripple
        class="text-center px-0 cursor-pointer"
        @click="goCategory('/category')"
      >
        <div>
          <v-icon color="white" to="/category" large>mdi-shape-outline</v-icon>
        </div>
      </div>
      <v-badge v-if="cartItems" color="red" :content="cartItems.length" overlap>
        <div
          v-ripple
          class="text-center px-0 cursor-pointer"
          @click="goDetail('/products/cart')"
        >
          <div><v-icon color="white" large>mdi-cart-outline</v-icon></div>
        </div>
      </v-badge>
      <div
        v-else
        v-ripple
        class="text-center px-0 cursor-pointer"
        @click="goDetail('/products/cart')"
      >
        <div><v-icon color="white" large>mdi-cart-outline</v-icon></div>
      </div>

      <div
        v-ripple
        class="text-center px-0 cursor-pointer"
        @click="goTo('/login')"
      >
        <div><v-icon color="white" to="/login" large>mdi-account</v-icon></div>
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
      cartItems: [],
    }
  },
  watch: {
    cartItems: {
      handler: 'refreshComponent',
      deep: true,
    },
  },
  created() {
    this.getCartItem();
  },
  methods: {
    getCartItem() {
      this.cartItems = this.$cookies.get('listOrder') || [];
    },
    refreshComponent() {
      // Perform any necessary actions to refresh the component
      // Add additional code here if needed
    },
    goTo(to) {
      this.$router.push(to);
    },
    goCategory(to) {
      this.$router.push(to);
    },
    goHome(to) {
      this.$router.push(to);
    },
    goDetail(to) {
      this.$router.push(to);
    },
  },
};
</script>
