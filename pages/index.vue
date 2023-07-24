<template>
  <div>
      <!-- show slide image-------------------------------------- -->
      <HomeSlideImg />
      <!-- category---------------------------------------- -->
      <home-get-by-category v-if="!$vuetify.breakpoint.xs"/>
      <!-- hot product------------------------------------------ -->
      <v-card flat class="mt-6">
        <HomeHot />
      </v-card>
      <!-- new products tage----------------------------- -->
      <v-card flat class="mt-6">
        <HomeNewProduct />
      </v-card>

  </div>
</template>

<script>
export default {
  name: 'EcommerceLandingIndex',

  data() {
    return {}
  },
  mounted(){
    this.$store.dispatch('product/selectNewProduct')
    this.$store.dispatch('product/selectHotAndPopular')

  }
}
</script>

<style lang="scss" scoped></style>
