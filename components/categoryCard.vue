<template>
  <v-col cols="4" lg="3" xs="3" sm="6" md="4" class="py-2 ma-0 pa-1" >
    <v-hover v-slot="{ hover}" close-delay="200">
      <v-card

      :elevation="hover? 5 : 0  "
>
        <v-img
          class="justify-center"
          :src="imageUrl"
          height="110"
          width="auto"
        ></v-img>
        <v-card-text class="pb-0">
          <div class="text-2 sizeText">{{ title }}</div>
          <div class="sizeText">${{ price }}</div>
        </v-card-text>
        <v-card-actions >
          <v-btn   v-if="!$vuetify.breakpoint.xs" color="red"   text small>Super Deals</v-btn>
          <v-spacer ></v-spacer>
          <v-btn color="red "  x-small text>IN STOCK</v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>
export default {
  name: 'EcommerceLandingCategoryCard',

  props: {
    imageUrl: {
      type: String,
      default: '/image/icon.png',
    },
    title: {
      type: String,
      default: 'charrger..',
    },
    price: {
      type: Number,
      default: 100,
    },
    subtitle: {
      type: String,
      default: null,
    },
  },
}
</script>
<style lang="scss" scoped>
.sizeText {
    font-size: 0.8em;
}

</style>
