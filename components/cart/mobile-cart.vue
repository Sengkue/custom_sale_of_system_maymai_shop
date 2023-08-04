<template>
  <div>
    <h1>ກະຕ່າ</h1>

    <div v-if="ListOrder.length === 0">
      <v-row class="justify-center">
        <h3>ບໍ່ມີສິນຄ້າໃນກະຕ່າ</h3>
      </v-row>
    </div>

    <div v-else>
      <div v-for="item in ListOrder" :key="item.id">
        <div>
          <v-row>
            <v-col cols="4">
              <img
                :src="item.profile"
                alt="Product Image"
                width="100"
                height="100"
              />
            </v-col>
            <v-col cols="8">
              <h2>{{ item.name }}</h2>
              <div class="card-item-desc-1 d-flex">
                <dt>ສີ: </dt>
                <dd> {{ item.color }}</dd>
              </div>
              <div class="card-item-desc-1 d-flex">
                <dt>ຂະໜາດ: </dt>
                <dd> {{ item.size }}</dd>
              </div>
              <p>ລາຄາ: {{ formatPrice(item.price) }} ກີບ</p>
              <div class="d-flex align-center">
                <label>ຈຳນວນ: </label>
                <v-text-field
                  v-model="item.quantity"
                  dense
                  hide-details
                  outlined
                  type="number"
                  class="mr-10 ml-1"
                  @change="updateQuantity(item)"
                />
              </div>
              <p>ລວມເິງນ: {{ formatPrice(calculateSubtotal(item)) }} ກີບ</p>
              <v-btn small color="error" @click="removeItem(item.id)"
                >ລົບອອກ</v-btn
              >
            </v-col>
            <v-col cols="12" class="ma-0 pa-0"> <v-divider /> </v-col>
          </v-row>
          <div></div>
        </div>
      </div>

      <div class="d-flex justify-space-between align-center mb-10 mr-2">
        <h4>ລວມເງິນທັງໝົດ: {{ formatPrice(calculateTotal()) }} ກີບ</h4>
        <v-btn color="primary" @click="checkout">ຈ່າຍເງິນ</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: [], // Array to store the cart items retrieved from cookies
    }
  },
  computed: {
    ListOrder() {
      return this.cartItems
    },
  },
  mounted() {
    this.retrieveCartItemsFromCookies()
  },
  methods: {
    retrieveCartItemsFromCookies() {
      this.cartItems = this.$cookies.get('listOrder') || []
    },
    updateQuantity(item) {
      // Implement logic to update the quantity in the cart
      // Update the quantity in the cartItems array
      const cartItem = this.cartItems.find((i) => i.id === item.id)

      if (cartItem) {
        if (item.quantity < cartItem.check_quantity) {
          cartItem.quantity = item.quantity
          this.saveCartItemsToCookies()
        } else {
          this.$toast.error(`<h5>ສິນຄ້າສາມາດປ້ອມໄດ້ໃນຈຳນວນ ( ${cartItem.check_quantity} )</h5>`)
          item.quantity = cartItem.check_quantity
        }
        if (item.quantity < 0 ) {
          this.$toast.error(`<h5>ບໍ່ສາມາດປ້ອມໃນຈຳນວນໜ້ອຍກ່ວາ 0</h5>`)
          item.quantity = 0
          this.saveCartItemsToCookies()
        }
      }
    },
    removeItem(itemId) {
      // Implement logic to remove an item from the cart
      this.cartItems = this.cartItems.filter((item) => item.id !== itemId)
      this.saveCartItemsToCookies() 
    },
    saveCartItemsToCookies() {
      this.$cookies.set('listOrder', this.cartItems)
    },
    calculateSubtotal(item) {
      return item.price * item.quantity
    },
    calculateTotal() {
      return this.ListOrder.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )
    },
    checkout() {
      // Implement logic to navigate to the checkout page
      this.$router.push('/checkout')
    },
  },
}
</script>

<style>
/* Add custom styles for the cart page */
</style>
