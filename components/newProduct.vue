<template>
  <v-card elevation="0">
    <v-row>
      <v-col cols="12" class="pt-0">
        <v-card class="d-flex align-center py-2" elevation="0">
          <v-btn class="mx-2" fab x-small depressed color="green">
            <v-icon>mdi-pin</v-icon>
            <!-- <v-avatar><v-img src="/image/redBlack.gif"  max-width="30" max-height="30"></v-img></v-avatar> -->
          </v-btn>
          <div color="green" class="green--text">New Product</div>
          <v-spacer></v-spacer>
          <div v-ripple class="cursor d-flex justify-center align-center pa-1"  @click="goMore('/moreProducts?page=new-details')">
            <div class="red--text">SEE MORE</div>

              <v-icon color="red">mdi-chevron-right</v-icon>

          </div>
        </v-card>
      </v-col>
      <v-col
        v-for="product in getProduct"
        :key="product.productId"
        cols="6"
        lg="3"
        sm="6"
        md="4"
        class="py-2"
      >
        <v-hover v-slot="{ hover }" close-delay="200">
          <v-card :elevation="hover ? 5 : 0" @click="detail(product.productId)">
            <v-img
              class="justify-center"
              :src="'https://api.olaa.la/Files/' + product.productImageUrl"
              height="300"
              width="auto"
              contain
            ></v-img>
            <v-card-text class="pb-0">
              <div>{{ product.productTitle?.slice(0, 30) + '...' }}</div>
              <div>{{ currency(product.price) }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                v-if="!$vuetify.breakpoint.xs"
                color="red"
                text
                small
                @click="detail(product.productId)"
                >Super Deals</v-btn
              >
              <v-spacer></v-spacer>
              <v-btn color="red" x-small text>IN STOCK</v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>

      <!-- <cardProduct title="IPhone 14 Pro" image-url="/image/1.png" />
      <cardProduct title="IPhone 14 Pro" image-url="/image/5.png" />
      <cardProduct title="IPhone 14 Pro" image-url="/image/2.png" />
      <cardProduct title="IPhone 14 Pro" image-url="/image/4.png" />
      <cardProduct title="IPhone 14 Pro" image-url="/image/3.png" /> -->


    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'EcommerceLandingNewProduct',

  data() {
    return {}
  },

  computed:{
    getProduct(){
      return this.$store.state.product.newProduct
    }

  },

  mounted() {
    this.$store.dispatch('product/selectNewProduct', { limit:8,})
  },

  methods: {
    goMore(to){
      this.$router.push(to)
    },
    detail(productId) {
      this.$router.push('/products/' + productId)
      // this.$store.dispatch('/product/productDetail', productId)
    },
  },
}
</script>

<style lang="scss" scoped>
.cursor {
  cursor: pointer;
}
</style>
