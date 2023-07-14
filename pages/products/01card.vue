<template>
    <div>
      <h1>Cart Page</h1>
  
      <div v-if="ListOrder.length === 0">
        <p>Your cart is empty.</p>
      </div>
  
      <div v-else>
        <div v-for="item in ListOrder" :key="item.id">
          <div>
            <img :src="item.profile" alt="Product Image" width="100" height="100">
            <h2>{{ item.name }}</h2>
            <p>Category: {{ item.category }}</p>
            <p>Price: ₭{{ item.sale_price }}</p>
            <div>
              <label>Quantity:</label>
              <input  v-model="item.quantity" type="number" @change="updateQuantity(item)">
            </div>
            <p>Subtotal: ₭{{ calculateSubtotal(item) }}</p>
            <button @click="removeItem(item.id)">Remove</button>
          </div>
        </div>
  
        <div>
          <h3>Total: ₭{{ calculateTotal() }}</h3>
          <button @click="checkout">Checkout</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
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
        return item.sale_price * item.quantity;
      },
      calculateTotal() {
        return this.ListOrder.reduce((total, item) => total + (item.sale_price * item.quantity), 0);
      },
      checkout() {
        // Implement logic to navigate to the checkout page
        this.$router.push('/checkout');
      },
    },
  };
  </script>
  
  <style>
  /* Add custom styles for the cart page */
  </style>
  