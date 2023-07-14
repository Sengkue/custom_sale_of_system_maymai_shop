<!-- <template>
    <v-card elevation="0">
      <v-row>
        <v-col cols="12" class="pt-0">
          <v-card class="d-flex align-center py-2 teal white--text accent-4 rounded-0" elevation="0">
            <v-btn class="mx-2" fab x-small depressed color="error">
              <v-icon class="pa-3 " style="border: 2px solid white; border-radius: 50%;">mdi-fire</v-icon>
            </v-btn>
            <div >ສີນຄ້າຍອດນິຍົມ</div>
            <v-spacer></v-spacer>
            <div v-ripple class="cursor d-flex justify-center align-center pa-1"  @click="goMore('/products/moreProducts?page=hot-details')">
              <div >ເບິ່ງເພີ່ມເຕີມ</div>
              <v-icon color="white"  >mdi-chevron-right</v-icon>
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
                <div>{{currency(product.price) }}</div>
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
    name: 'EcommerceLandingHot',
    data() {
      return {}
    },
  
    computed: {
      getProduct() {
        return this.$store.state.product.getByCategory
      },
    },
    async mounted() {
        const id = "5d0a3a76-ab4a-461b-9bc3-186b143cc393"
      await this.$store.dispatch('product/selectByCategory',id)
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
  .cursor {
    cursor: pointer;
  }
  </style>
   -->