<template>
  <div v-if="$vuetify.breakpoint.xs">
    <v-app-bar fixed app>
      <div v-ripple @click="back('/')">
        <v-icon>mdi-arrow-left-circle</v-icon>
      </div>
      <v-spacer />
      <h3>{{ paths }}</h3>
      <v-spacer />

      <div
        v-ripple
        @click="cart('../products/cart')"
      >
        <v-icon>mdi-cart</v-icon>
      </div>
    </v-app-bar>
  </div>
  <!-- <v-row>
    <v-col cols="12">
      <v-card
        class="teal white--text d-flex justify-space-between align-center rounded-0 py-2"
      >
        <v-btn text small class="mx-0" to="/products/cart"
          ><v-icon color="white">mdi-arrow-left-circle</v-icon></v-btn
        >
        <h3>checkout</h3>

        <v-btn small text><v-icon color="white">mdi-cart</v-icon></v-btn>
      </v-card>
    </v-col>
  </v-row> -->
</template>

<script>
export default {
  name: 'CustomSaleOfSystemMaymaiShopNavbarMobile',

  data() {
    return {
      paths: '',
    }
  },
  watch: {},
  created() {
    const path = this.$route.path
    this.paths = path.substring(path.lastIndexOf('/') + 1)
  },
  methods: {
    back(to) {
      this.$router.push(to)
    },
    cart(to) {
      this.$router.push(to)
    },
  },
}
</script>

<style lang="scss" scoped></style>
