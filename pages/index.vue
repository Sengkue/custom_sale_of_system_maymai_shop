<template>
  <div>
    <v-container fluid>
      <!-- show slide image-------------------------------------- -->

        <slide-img/>

     
      <v-divider></v-divider>
      <!-- product genderal------------------------------------- -->
      <v-card flat color="transparent">
        <Discounted />
      </v-card>
      <!-- hot product------------------------------------------ -->
      <v-card flat class="mt-6">
        <hot />
      </v-card>
      <!-- new products tage----------------------------- -->
      <v-card flat class="mt-6">
        <newProduct />
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {

  name: 'EcommerceLandingIndex',

  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
