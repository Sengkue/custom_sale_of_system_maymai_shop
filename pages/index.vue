<template>
  <div>
      <!-- show slide image-------------------------------------- -->
      <HomeSlideImg />
      <!-- category---------------------------------------- -->
      <!-- <v-card flat >
       <v-row>
        <v-col cols="12">
          catergorie
        </v-col>
       </v-row>
      </v-card> -->
      <!-- product genderal------------------------------------- -->
      <!-- <v-card flat color="transparent">
        <HomeDiscounted />
      </v-card> -->
      <!-- hot product------------------------------------------ -->
      <v-card flat class="mt-6">
        <!-- <HomeHot /> -->
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
  }
}
</script>

<style lang="scss" scoped></style>
