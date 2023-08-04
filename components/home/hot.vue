<template>
  <v-card elevation="0">
    <v-row>
      <v-col cols="12" class="pt-0">
        <v-card
          class="d-flex align-center py-2 teal white--text accent-4 rounded-0"
          elevation="0"
        >
          <v-btn class="mx-2" fab x-small depressed color="error">
            <v-icon
              class="pa-3"
              style="border: 2px solid white; border-radius: 50%"
              >mdi-fire</v-icon
            >
          </v-btn>
          <div>ສີນຄ້າຍອດນິຍົມ</div>
          <v-spacer></v-spacer>
          <div
            v-ripple
            class="cursor d-flex justify-center align-center pa-1"
            @click="goMore('/products/moreProducts?page=hot-details')"
          >
            <div>ເບິ່ງເພີ່ມເຕີມ</div>
            <v-icon color="white">mdi-chevron-right</v-icon>
          </div>
        </v-card>
      </v-col>

      <v-col
        v-for="(product, index) in getProduct"
        :key="index"
        cols="6"
        lg="3"
        sm="6"
        md="4"
        class="py-2"
      >
        <v-hover v-slot="{ hover }" close-delay="200">
          <v-card :elevation="hover ? 5 : 1" @click="detail(product.product_id)">
            <v-img
              class="justify-center"
              :src="product.profile"
              height="300"
              width="auto"
              contain
            ></v-img>
            <v-card-text class="pb-0">
              <!-- <div>{{ product.productDame?.slice(0, 30) + '...' }}</div>
              <div>{{ currency(product.productSale_price) }}</div> -->
              <div>{{ product.productDame.length<10?product.productDame:product.productDame?.slice(0, 30) + '...' }}</div>
              <div>{{ product.productDescription.length <10?product.productDescription:product.productDescription?.slice(0, 15) + '...' }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                v-if="!$vuetify.breakpoint.xs"
                color="red"
                text
                small
                @click="detail(product.product_id)"
                >ລາຍລະອຽດ</v-btn
              >
              <v-spacer></v-spacer>
              <div v-if="product.productQuantity > 0">
                <v-btn color="red" x-small text>ພ້ອມສົ່ງ</v-btn>
              </div>
              <div v-else class="green accent-2">
                <v-btn color="red" x-small text>ສິນຄ້າໝົດສະຕ໊ອກ</v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'EcommerceLandingHot',

  data() {
    return {}
  },

  computed: {
    getProduct() {
      return this.$store.state.product.hotAndpopular
    },
  },
  async mounted() {
    await this.$store.dispatch('product/selectHotAndPopular')
  },

  methods: {
    goMore(to) {
      this.$router.push(to)
    },
    detail(productId) {
      this.$router.push('/products/' + productId)
    },
  },
}
</script>

<style lang="scss" scoped>
.cursor {
  cursor: pointer;
}
</style>
