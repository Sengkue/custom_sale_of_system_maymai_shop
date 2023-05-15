<template>
  <v-card elevation="0" >
    <v-row>
      <v-col cols="12" class="pt-0" >
        <v-card class="d-flex align-center py-2 teal accent-4 white--text rounded-0" elevation="0">
          <v-btn class="mx-2" fab x-small depressed color="primary">
            <v-icon color="white" class="pa-3" style="border: 2px solid white; border-radius: 50%;">mdi-lightning-bolt</v-icon>
          </v-btn>
          <div >ສິນຄ້າຫຼຸດລາຄາ</div>
          <v-spacer></v-spacer>
          <div
            v-ripple
            class="cursor d-flex justify-center align-center"
            @click="goMore('/products/moreProducts?page=super-details')"
          >
            <div >ເບິ່ງເພີ່ມເຕີມ</div>
            <v-icon color="white">mdi-chevron-right</v-icon>
          </div>
        </v-card>
        <div v-if="loading" class="text-center mt-5">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </div>
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
              <div class="text-decoration-line-through">{{ currency(product.rrp) }}</div>
              <div>{{ currency(product.price)}}</div>
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
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'EcommerceLandingDiscountedProducts',

  data() {
    return {
      loading: true,
    }
  },

  computed: {
    getProduct() {
      return this.$store.state.product.productreal
    },
  },
  async mounted() {
    await this.$store.dispatch('product/selectProduct', {
      limit: 4,
      discount: true,
    })
    this.loading = false
  },

  methods: {
    goMore(to) {
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
.sizeText {
  font-size: 0.8em;
}
.cursor {
  cursor: pointer;
}
</style>
