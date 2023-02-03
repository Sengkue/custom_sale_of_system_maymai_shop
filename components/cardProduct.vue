<template>
  <v-col cols="6" lg="3" sm="6" md="4" class="py-2" >
    <v-hover v-slot="{ hover}" close-delay="200">
      <v-card

      :elevation="hover? 5 : 0  "
>
        <v-img
          class="justify-center"
          :src="imageUrl"
          height="300"
          width="auto"
          contain
        >

      </v-img>
        <v-card-text class="pb-0">
          <div>{{ title }}</div>
          <div>${{ price }}</div>
        </v-card-text>
        <v-card-actions >
          <v-btn   v-if="!$vuetify.breakpoint.xs" color="red"   text small>Super Deals</v-btn>
          <v-spacer ></v-spacer>
          <v-btn color="red"  x-small text>IN STOCK</v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>
export default {
  name: 'EcommerceLandingCardProduct',

  props: {
    
    imageUrl: {
      type: String,
      default: '/image/icon.png',
    },
    title: {
      type: String,
      default: 'charrger Battery',
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
  data() {
    return {

    };
  },
  computed:{
    getProduct(){
     return this.$store.state.product.productreal
    }
  },
  mounted() {
    // this.$store.dispatch('product/selectProduct')
  },
}
</script>
<style lang="scss" scoped>
.sizeText {
    font-size: 0.5em;
}

</style>


