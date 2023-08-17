export const state = () => ({
  number: null,
  cartItems: [], // Array to store the cart items
})

export const mutations = {

  updateCartItem(state, { index, item }) {
    state.cartItems.splice(index, 1, item); // Replace the existing order item at the given index with the updated item
  },
  addToCart(state, item) {
    state.cartItems.push(item); // Add a new item to the cart
  },
  changeNumber(state, length) {
    state.number = length; 
  },
  UPDATE_CART_ITEM(state, item) {
    const existingItem = state.cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity = item.quantity;
    }
  },
  
}
  
  export const actions = {
    updateCartItem({ commit }, item) {
      commit('UPDATE_CART_ITEM', item);
    },
  }
  