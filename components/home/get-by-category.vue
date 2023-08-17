<template>
  <v-card class="mt-0 rounded-0" elevation="0">
    <v-tabs v-model="tab" background-color="error" dark :class="getByCategory.length<0? '':mb-n2">
      <v-tab v-for="(item, index) in items" :key="index">
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" class="mt-2">
      <v-tab-item v-for="(item, index) in items" :key="index">
        <v-card flat>
          <v-card elevation="0">
            <v-row>
              <v-col
                v-for="(product, index) in getByCategory"
                :key="index"
                cols="6"
                lg="3"
                sm="6"
                md="4"
                class="py-2"
              >
                <v-hover v-slot="{ hover }" close-delay="200">
                  <v-card
                    :elevation="hover ? 5 : 0.01"
                    @click="detail(product.id)"
                  >
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
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  name: 'CustomSaleOfSystemMaymaiShopGetByCategory',

  data() {
    return {
      tab: null, // Set the default category ID to null
      items: [],
    }
  },

  computed: {
    getProduct() {
      return this.$store.state.product.hotAndpopular
    },
    getByCategory() {
      return this.$store.state.product.getByCategory
    },
  },

  watch: {
    // Watch for changes in the selected category tab and fetch products accordingly
    tab(newTab, oldTab) {
      if (newTab !== oldTab) {
        this.fetchProductsByCategory(this.items[newTab].id)
      }
    },
  },

  async mounted() {
    // Fetch hot and popular products
    this.$store.dispatch('product/selectHotAndPopular')

    // Fetch categories and update the items array
    await this.fetchCategories()

    // Fetch products based on the initial selected category (which is null at this point)
    this.fetchProductsByCategory(this.tab)
  },

  methods: {
    async fetchCategories() {
      try {
        // Fetch data from the API
        const response = await this.$axios.get('/category')
        const data = response.data

        // Process the API response and format it as per the items array structure
        const formattedData = data.result.rows.map((category) => ({
          tab: category.category,
          id: category.id,
          content: category.category + ' Content',
        }))

        // Update the items array with the fetched data
        this.items = formattedData
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },

    async fetchProductsByCategory(categoryId) {
      try {
        // Fetch products based on the selected category ID
        const response = await this.$store.dispatch('product/selectByCategory', categoryId)
        const data = response.data

        // Update the products in the store (assuming your store handles product state)
        this.$store.commit('product/setByCategory', data.result.rows)
      } catch (error) {
        console.error('Error fetching products by category:', error)
      }
    },

    detail(productId) {
      this.$router.push('/products/' + productId)
    },
  },
}
</script>

<style lang="scss" scoped></style>
