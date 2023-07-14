<template>
  <v-card elevation="0">
    <v-row>
      <v-col cols="12" class="pt-0">
        <v-card
          class="d-flex align-center py-2 teal accent-4 white--text rounded-0"
          elevation="0"
        >
          <v-btn class="mx-2" fab x-small depressed color="green">
            <v-icon
              class="pa-3 white--text"
              style="border: 2px solid white; border-radius: 50%"
              >mdi-pin</v-icon
            >
            <!-- <v-avatar><v-img src="/image/redBlack.gif"  max-width="30" max-height="30"></v-img></v-avatar> -->
          </v-btn>
          <div>ສິນຄ້າໃໝ່</div>
          <v-spacer></v-spacer>
          <div
            v-ripple
            class="cursor d-flex justify-center align-center pa-1"
            @click="goMore('/products/moreProducts?page=new-details')"
          >
            <div>ເບິ່ງເພີ່ມເຕີມ</div>

            <v-icon color="white">mdi-chevron-right</v-icon>
          </div>
        </v-card>
      </v-col>
      <!-- <v-col cols="12">{{ getProduct }}</v-col> -->
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
  </v-card>
</template>

<script>
export default {
  name: 'EcommerceLandingNewProduct',

  data() {
    return {}
  },

  computed: {
    getProduct() {
      return this.$store.state.product.newProduct
    },
  },

  mounted() {
    // this.$store.dispatch('product/selectNewProduct', { limit:8,})
    this.$store.dispatch('product/selectNewProduct')
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
