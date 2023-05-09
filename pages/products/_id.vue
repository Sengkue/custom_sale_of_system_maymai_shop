<template>
  <div>
    <v-card class="mx-auto ma-5" max-width="1000">
      <v-row>
        <!-------------------------------------------------------- big image -->
        <v-col cols="12" md="4">
          <v-img
            :src="'https://api.olaa.la/Files/' + image"
            width="400"
            height="400"
            contain
          ></v-img>
        </v-col>
        <!-------------------mobile phone--------------------------------- slide image for mobile phone -->
        <v-col v-if="$vuetify.breakpoint.xs" cols="12" class="mb-8">
          <v-slide-group v-model="model" class="px-5">
            <v-slide-item
              v-for="item in getProductDetail.productImages"
              :key="item.id"
              v-slot="{ active, toggle }"
              flat
            >
              <v-card
                :color="active ? 'primary' : 'grey lighten-1'"
                class="ma-1"
                width="60"
                height="50"
                elevation="0"
                contain
                @click="toggle"
              >
                <v-img
                  :src="'https://api.olaa.la/Files/' + item.url"
                  contain
                  @click="image = item.url"
                ></v-img>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>
        <!-------------------------------------------------------- detail descripte -->
        <v-col cols="12" md="8">
          <v-card flat>
        
              <v-card-title>{{ getProductDetail.productTitle }}</v-card-title>

            <v-card-text class="pt-0">
              {{ getProductDetail.productDescription }}
            </v-card-text>

            <v-card-text class="font-weight-bold pt-0">
              ₭{{ getProductDetail.price }}
            </v-card-text>
            <v-card-text>
              <div class="d-flex justify-left align-center">
                <v-btn icon x-small @click="Minus"
                  ><v-icon small color="error">mdi-minus</v-icon></v-btn
                >
                <div class="size">
                  <v-text-field
                    v-model="Value"
                    outlined
                    dense
                    placeholder="0"
                    hide-details="auto"
                  >
                  </v-text-field>
                </div>
                <v-btn icon x-small @click="Plus"
                  ><v-icon small color="primary">mdi-plus</v-icon></v-btn
                >
              </div>
            </v-card-text>

            <v-card-actions class="justify-space-between pt-5">
              <v-btn text color="primary" @click="addOrder">
                <v-icon color="blue">mdi-cart-plus</v-icon>
                <span class="ms-2 blue--text">Add to cart</span>
              </v-btn>

              <v-btn text color="secondary" icon>
                <v-icon>mdi-share-variant-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <!--------------------desk top------------------------------- slide images for desktop  -->
        <v-col v-if="!$vuetify.breakpoint.xs" cols="12" class="mb-8">
          <v-slide-group v-model="model" show-arrows>
            <v-slide-item
              v-for="item in getProductDetail.productImages"
              :key="item.id"
              v-slot="{ toggle }"
              flat
            >
              <v-card
                color="transparent"
                class="ma-1"
                width="140"
                elevation="0"
                @click="toggle"
              >
                <v-img
                  :src="'https://api.olaa.la/Files/' + item.url"
                  width="140"
                  height="140"
                  @click="image = item.url"
                >
                </v-img>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    model: null,
    image: null,
    Value: 0,
    No: 0,
  }),

  computed: {
    getProductDetail() {
      return this.$store.state.product.productDetail
    },
    getCartNumber() {
      return this.$store.state.cart.number;
    },
  },
  async mounted() {
    await this.$store.dispatch(
      'product/selectProductDetail',
      this.$route.params.id
    )
    this.image = this.getProductDetail.productImages[0].url
  },
  methods: {
    Minus() {
      this.Value = this.Value - 1
    },
    Plus() {
      this.Value = this.Value + 1
    },

    addOrder() {
      if(this.Value >=0){
        this.cartNo = this.getCartNumber + this.Value;
      }
      this.$store.commit('cart/changeNumber', this.cartNo)
    },
  },
}
</script>
<style scoped>
.size {
  width: 70px;
}
</style>
