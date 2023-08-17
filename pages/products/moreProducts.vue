<template>
  <v-card>
    <v-row>
      <v-col cols="12" class="pt-5">
        <v-card class="d-flex align-center py-2">
          <v-btn class="mx-2 white--text" fab x-small depressed color="teal">
            <v-icon small>mdi-lightning-bolt</v-icon>
          </v-btn>
          <div class="sizeText">{{ message }}</div>
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
          <v-card :elevation="hover ? 5 : 0.01" @click="detail(product.id)">
            <v-img
              class="justify-center"
              :src="product.profile"
              height="300"
              width="auto"
              contain
            ></v-img>
            <v-card-text class="pb-0">
              <div>{{ product.name?.slice(0, 30) + '...' }}</div>
              <div>{{ currency(product.sale_price) }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                v-if="!$vuetify.breakpoint.xs"
                color="red"
                text
                small
                @click="detail(product.id)"
                >ລາຍລະອຽດ</v-btn
              >
              <v-spacer></v-spacer>
              <div v-if="product.quantity > 0">
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
    <div
      v-ripple
      class="my-10 text-center text-2xl sizeText red--text cursor"
      color="blue"
      @click="seemore"
    >
      SEE MORE
      <v-btn absoluteclass="mx-2" fab small depressed :loading="loading">
        <v-icon color="red">mdi-chevron-down</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'EcommerceLandingDiscountedProducts',

  data() {
    return {
      loading: true,
      plus: 20,
      message: '',
    }
  },

  computed: {
    getProduct() {
      if (this.$route.query.page === 'super-details') {
        return this.$store.state.product.productreal
      }
      if (this.$route.query.page === 'hot-details') {
        return this.$store.state.product.hotAndpopular
      }
      if (this.$route.query.page === 'new-details') {
        return this.$store.state.product.newProduct
      }
      return []
    },
    searchValue() {
      return this.$store.state.product.searchValue
    },
  },
  async mounted() {
    if (this.$route.query.page === 'super-details') {
      this.message = 'Super Deals'
      await this.$store.dispatch('product/selectProduct', {
        limit: 12,
        discount: true,
      })
      this.loading = false
    }
    if (this.$route.query.page === 'hot-details') {
      this.message = 'ສິນຄ້າຍອດນິຍົມ'
      await this.$store.dispatch('product/selectHotAndPopular')
      this.loading = false
    }
    if (this.$route.query.page === 'new-details') {
      this.message = 'ສິນຄ້າຍອດນີຍົມ'
      await this.$store.dispatch('product/selectNewProduct', { limit: 12 })
      this.loading = false
    }
  },

  methods: {
    detail(productId) {
      this.$router.push('/products/' + productId)
      // this.$store.dispatch('/product/productDetail', productId)
    },

    async seemore() {
      if (this.$route.query.page === 'super-details') {
        this.loading = true
        await this.$store.dispatch('product/selectProduct', {
          limit: this.plus,
          discount: true,
        })
        this.plus = this.plus + 8
        this.loading = false
      }
      if (this.$route.query.page === 'hot-details') {
        this.loading = true
        await this.$store.dispatch('product/selectHotProduct', {
          limit: this.plus,
          newProduct: true,
        })
        this.plus = this.plus + 8
        this.loading = false
      }
      if (this.$route.query.page === 'new-details') {
        this.loading = true
        await this.$store.dispatch('product/selectNewProduct', {
          limit: this.plus,
        })
        this.plus = this.plus + 8
        this.loading = false
      }
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
