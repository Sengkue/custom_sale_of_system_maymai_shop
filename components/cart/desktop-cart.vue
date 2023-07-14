<template>
  <div>
    <div class="container">
      <!-- row opened -->
      <div class="row">
        <div class="col-xl-12 col-md-12">
          <div class="card">
            <div class="card-body">
              <!-- Shopping Cart-->
              <div class="product-details table-responsive text-nowrap">
                <table class="table table-bordered table-hover mb-0 text-nowrap">
                  <thead>
                    <tr>
                      <th class="text-start">Product</th>
                      <th class="w-150">Quantity</th>
                      <th>SUBTOTAL</th>
                      <th>DISCOUNT</th>
                      <th>
                        <a class="btn btn-sm btn-outline-danger" href="#">Clear Cart</a>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="custom-cls-no-br">
                    <tr v-for="(item, index) in cartItems" :key="index">
                      <td>
                        <div class="media">
                          <div class="card-aside-img">
                            <img :src="item.profile" :alt="item.name" class="h-60 w-60" />
                          </div>
                          <div class="media-body">
                            <div class="card-item-desc mt-0">
                              <h6 class="fw-semibold mt-0 text-uppercase">{{ item.name }}</h6>
                              <dl class="card-item-desc-1">
                                <dt>Category:</dt>
                                <dd>{{ item.category }}</dd>
                              </dl>
                              <dl class="card-item-desc-1">
                                <dt>Sale Price:</dt>
                                <dd>{{ item.price }}</dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="form-group">
                          <input
                          v-model="item.quantity"
                            type="number"
                            class="form-control"
                            min="1"
                            step="1"
                            @change="updateQuantity(item)"
                          />
                        </div>
                      </td>
                      <td class="text-center text-lg text-medium">{{ calculateSubtotal(item) }}</td>
                      <td class="text-center text-lg text-medium">DISCOUNT VALUE</td>
                      <td class="text-center">
                        <v-tooltip top color="red">
                          <template #activator="{ on }">
                            <v-btn
                              class="pa-n2 ma-n2"
                              icon
                              text
                              color="red"
                              v-on="on"
                              @click="removeItem(item.id)"
                            >
                              <v-icon>mdi-delete</v-icon>
                            </v-btn>
                          </template>
                          Delete
                        </v-tooltip>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="shopping-cart-footer border-top-0">
                <div class="column">
                  <form class="coupon-form" method="post">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Coupon code"
                      required
                    />
                    <button class="btn btn-outline-primary" type="submit">
                      Apply Coupon
                    </button>
                  </form>
                </div>
                <div class="column text-lg">
                  Subtotal: <span class="tx-20 fw-bold ms-2">{{ calculateTotal() }}</span>
                </div>
              </div>
              <div class="shopping-cart-footer">
                <div class="column">
                  <v-btn
                    class="text-capitalize primary elevation-0"
                    to="/products/detail"
                  >
                    Back to Shopping
                  </v-btn>
                </div>
                <div class="column">
                  <v-btn color="primary" class="text-capitalize elevation-0">Update Cart</v-btn>
                  <v-btn
                    color="green"
                    class="
                    white--text
                    text-capitalize elevation-0"
                    :disabled="cartItem"
                    @click="checkout"
                  >
                    Checkout
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- row closed -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomSaleOfSystemMaymaiShopDesktopCart',
  data() {
    return {
      cartItems: [], // Array to store the cart items retrieved from cookies
    };
  },
  computed: {
    ListOrder() {
      return this.cartItems;
    },
  },
  mounted() {
    this.retrieveCartItemsFromCookies();
  },
  methods: {
    retrieveCartItemsFromCookies() {
      this.cartItems = this.$cookies.get('listOrder') || [];
    },
    updateQuantity(item) {
      // Implement logic to update the quantity in the cart
      // Update the quantity in the cartItems array
      const cartItem = this.cartItems.find((i) => i.id === item.id);
      if (cartItem) {
        cartItem.quantity = item.quantity;
        this.saveCartItemsToCookies(); // Save the updated cart items to cookies
      }
    },
    removeItem(itemId) {
      // Implement logic to remove an item from the cart
      this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
      this.saveCartItemsToCookies(); // Save the updated cart items to cookies
    },
    saveCartItemsToCookies() {
      this.$cookies.set('listOrder', this.cartItems);
    },
    calculateSubtotal(item) {
      return item.price * item.quantity;
    },
    calculateTotal() {
      return this.ListOrder.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    checkout() {
      // Implement logic to navigate to the checkout page
      this.$router.push('/checkout');
    },
  },
};
</script>

<style lang="scss" scoped>
/* Add custom styles for the cart page */
</style>