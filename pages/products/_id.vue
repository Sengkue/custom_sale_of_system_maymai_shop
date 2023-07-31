<template>
  <div>
    <v-card class="mx-auto" max-width="1200">
      <v-btn dark class="red" left small to="/"
        ><v-icon left>mdi-chevron-left</v-icon>ກັບ</v-btn
      >
      <v-row>
        <!-------------------------------------------------------- big image -->
        <v-col cols="12" md="4">
          <v-img
            v-if="image !== null"
            :src="image"
            width="400"
            height="400"
            contain
          ></v-img>
          <v-img
            v-else
            :src="getProductDetail.profile"
            width="400"
            height="400"
            contain
          ></v-img>
        </v-col>
        <!-------------------mobile phone--------------------------------- slide image for mobile phone -->
        <v-col v-if="$vuetify.breakpoint.xs" cols="12" class="mb-8">
          <v-slide-group v-if="getBanner" v-model="model" cladss="px-5">
            <v-slide-item
              v-for="item in getBanner"
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
                  v-if="item.url"
                  :src="item.url"
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
            <v-card-title>{{ getProductDetail.name }}</v-card-title>

            <v-card-text class="pt-0">
              {{ getProductDetail.description }}
            </v-card-text>

            <!-- <v-card-text class="font-weight-bold pt-0">
              {{ formatPrice(getProductDetail.sale_price) }} ກີບ
            </v-card-text> -->

            <!-- <div v-if="getProductDetail.size_id" class="sizes d-flex">
              sizes:
              <span
                class="size d-flex"
                data-bs-toggle="tooltip"
                title="small"
                >{{ getProductDetail.size_id }}</span
              >
            </div> -->
            <v-card-text>
              <!-- {{ getProductDetail.color }} -->
              <v-autocomplete
                v-model="color_size_data.id"
                auto-select-first
                chips
                clearable
                outlined
                :items="color_size_data"
                item-value="id"
                item-text="id"
                dense
                deletable-chips
                prepend-inner-icon="mdi-ballot-outline"
                label="ເລືອກສີ ແລະ ຂະໜາດທີ່ຕ້ອງການ"
                single-line
                hide-details
                @change="Selected"
              >
                <template #item="{ item }">
                  <div class="select-item d-flex align-center justify-center">
                    <span>ສີ- {{ item.color }}</span>
                    <span> || </span>
                    <span >ຂະໜາດ- ( {{ item.size }} )</span>
                    <span> || </span>
                    <span >ຈຳນວນ- ( {{ item.quantity }} )</span>
                  </div>
                </template>
              </v-autocomplete>
            </v-card-text>
            <v-card-text v-if="color_size_data.id?color_size_data.id:false">
              <div v-if="selected_color_size.color?selected_color_size.color:false" class="d-flex "><h6 class="mr-2">ສີ:</h6> {{ selected_color_size.color }}</div>
              <div v-if="selected_color_size.size?selected_color_size.size:false" class="d-flex "><h6 class="mr-2">ຂະໜາດ:</h6> {{ selected_color_size.size }}</div>
              <div v-if="selected_color_size.quantity?selected_color_size.quantity:false " class="d-flex"><h6 class="mr-2">ຈຳນວນທີສາມາດສັ່ງຊື້:</h6> {{ selected_color_size.quantity }}</div>
              <div v-if="selected_color_size.sale_price?selected_color_size.sale_price:false " class="d-flex"><h6 class="mr-2">ລາຄາຂາຍ:</h6> {{ formatPrice(selected_color_size.sale_price) }} ກີບ</div>
            </v-card-text>
            <v-card-text>
              <div class="d-flex justify-left align-center">
                <v-btn :disabled="!color_size_data.id" x-small @click="Minus"
                  ><v-icon large color="error">mdi-minus</v-icon></v-btn
                >
                <div class="size ml-1 mr-1">
                  <v-text-field
                    v-model="InputQuantity"
                    outlined
                    dense
                    placeholder="0"
                    hide-details="auto"
                    :disabled="!color_size_data.id"
                  >
                  </v-text-field>
                </div>
                <v-btn
                  :disabled="!color_size_data.id"
                  x-small
                  @click="Plus"
                  ><v-icon large color="primary">mdi-plus</v-icon></v-btn
                >
              </div>
            </v-card-text>

            <v-card-actions class="justify-space-between pt-5">
              <v-btn
                text
                color="primary"
                @click="addOrder(getProductDetail.id)"
              >
                <v-icon color="blue">mdi-cart-plus</v-icon>
                <span class="ms-2 blue--text">ຕື່ມໃສ່ກະຕ່າ</span>
              </v-btn>

              <v-btn text color="secondary" icon>
                <v-icon>mdi-share-variant-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <!--------------------desk top------------------------------- slide images for desktop  -->
        <v-col v-if="!$vuetify.breakpoint.xs" cols="12" class="mb-8">
          <v-slide-group v-if="getBanner" v-model="model" show-arrows>
            <v-slide-item
              v-for="item in getBanner"
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
                  v-if="item.url"
                  :src="item.url"
                  width="140"
                  height="140"
                  @click="image = item.url"
                >
                </v-img>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>
        <v-col cols="12">
          <v-card elevation="1">
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
                      >mdi-arrow-down</v-icon
                    >
                    <!-- <v-avatar><v-img src="/image/redBlack.gif"  max-width="30" max-height="30"></v-img></v-avatar> -->
                  </v-btn>
                  <div>ສິນຄ້າທີກ່ຽວຂ້ອງ</div>
                </v-card>
              </v-col>
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
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    color_size_data: [],
    selected_color_size: {},
    model: null,
    image: null,
    InputQuantity: 1,
    No: 0,
    cookis: [],
  }),

  computed: {
    getProductDetail() {
      return this.$store.state.product.productDetail
    },
    getBanner() {
      return this.$store.state.product.ProductBanner
    },
    getCartNumber() {
      return this.$store.state.cart.number
    },
    ListOrder() {
      return this.$store.state.cart.cartItems
    },
    getByCategory() {
      return this.$store.state.product.getByCategory
    },
    ...mapState({
      ListOrder: (state) => state.cart.cartItems,
    }),
  },
  watch: {
    getProductDetail: {
      immediate: true,
      handler(newVal) {
        if (newVal.category_id) {
          this.$store.dispatch('product/selectByCategory', newVal.category_id)
        }
      },
    },
  },
  async mounted() {
    await this.$store.dispatch(
      'product/selectProductDetail',
      this.$route.params.id
    )
    await this.$store.dispatch(
      'product/selectImageByProductId',
      this.$route.params.id
    )
  },

  created() {
    this.cookis = this.$cookies.get('listOrder')
    this.$axios
      .get(`/color_size/byProductId/${this.$route.params.id}`)
      .then((res) => {
        this.color_size_data = res.data.result
      })
  },
  methods: {
    Selected() {
      this.selected_color_size = this.color_size_data.find(
        (i) => i.id === this.color_size_data.id
      )
    },
    detail(productId) {
      this.$router.push('/products/' + productId)
    },
    Minus() {
      if (this.InputQuantity > 0) {
        this.InputQuantity = this.InputQuantity - 1
      }
    },

    Plus() {
      const item = this.selected_color_size
      if (this.InputQuantity < item.quantity) {
        this.InputQuantity += 1
      } else {
        this.$toast.error('<h4 class="py-2 px-2">ສີນຄ້າໝົດສະຕ໊ອກເຈົ້າ ສາມາດສັ່ງຊື້ໄດ້ເທົ່ານີ້</h4>',{
          duraction:5000
        })
      }
    },
    addOrder(id) {
      // const item = this.getProductDetail
      const item = this.selected_color_size
      console.log('showooooooooooo', this.color_size_data.id)
      console.log('showooooooooooo222222222', this.ListOrder)
      const existingOrderIndex = this.ListOrder.findIndex((i) => i.id === this.color_size_data.id)
      if (existingOrderIndex !== -1) {
        const existingOrder = this.ListOrder[existingOrderIndex]
        if (this.InputQuantity === 0) {
          this.$toast.error('<h4>ປ້ອມຈຳນວນກ່ອນ!</h4>')
        } else {
          const addPlus = existingOrder.quantity + parseInt(this.InputQuantity)
          if (addPlus <= item.quantity) {
            const updatedQuantity = parseInt(existingOrder.quantity) + parseInt(this.InputQuantity)
            const updatedOrder = { ...existingOrder, quantity: updatedQuantity }
            this.$store.commit('cart/updateCartItem', {
              index: existingOrderIndex,
              item: updatedOrder,
            })
            this.InputQuantity = 0
            this.$toast.success('ເພີ່ມເຂົ້າກະຕ່າສຳເລັດ11111')
          } else {
            this.$toast.error('<h5>ສີນຄ້າໝົດສະຕ໊ອກ ທ່ານໄດ້ສັ່ງຊື້ເຕັມຈຳນວນທີ່ມີແລ້ວ</h5>')
            this.InputQuantity = 0
          }
        }
      } else if (item.quantity > 0 && this.InputQuantity <= item.quantity) {
        const newOrder = {
          id: item.id,
          product_id:item.product_id,
          profile: this.getProductDetail.profile,
          name: this.getProductDetail.name,
          price: item.sale_price,
          category: this.getProductDetail.category,
          color: item.color,
          size: item.size,
          quantity: this.InputQuantity,
          check_quantity: item.quantity,
        }
        this.$store.commit('cart/addToCart', newOrder)
        this.InputQuantity = 0
        this.$toast.success('ເພີ່ມເຂົ້າກະຕ່າສຳເລັດ2222')
      } else {
        this.$toast.error(`ສິນຄ້າໝົດສະຕ໊ອກ ສາມາດສັ່ງຊື້ໄດ້ໃນຈຳນວນ44444 (${item.quantity})`,{
          duraction:5000
        })
        this.InputQuantity = item.quantity
      }
      this.$store.commit('cart/changeNumber', this.ListOrder.length)

      // Set the ListOrder array to cookies
      this.$cookies.set('listOrder', this.ListOrder)
    },
  },
}
</script>
<style scoped>
.size {
  width: 70px;
}
</style>
