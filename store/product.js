export const state = () => ({
  product: {
    data: [],
  },
  productreal: {},
  productDetail: {},
  searchValue: {},
  search: null,
  hotProduct: {},
  newProduct: {},
  number: 10,
})

export const mutations = {
  changeNumber(state, data) {
    state.number = data
  },
  changeProduct(state, data) {
    state.number = data
  },
  setProduct(state, data) {
    state.productreal = data
  },
  setProductDetail(state, data) {
    state.productDetail = data
  },
  setSearch(state, data) {
    state.searchValue = data
  },
  setSearchValue(state, data) {
    state.search = data
  },
  setHotProduct(state, data) {
    state.hotProduct = data
  },
  setNewProduct(state, data) {
    state.newProduct = data
  },
}

export const actions = {
  async select({ commit }, params) {
    await this.$axios
      .get('https://reqres.in/api/users', { params })
      .then((res) => {
        commit('setUser', res.data)
      })
  },

  async selectProduct({ commit }, params) {
    await this.$axios.get('/products', { params }).then((data) => {
      commit('setProduct', data.data)
    })
  },

  async selectProductDetail({ commit }, productId) {
    await this.$axios.get(`/products/${productId}`).then((data) => {
      commit('setProductDetail', data.data)
      // this.$router.push('/productDetail')
    })
  },

  async search({ commit, state }, params) {
    const copy = { ...params }

    copy.search = state.search

    await this.$axios.get('/product-search', { params: copy }).then((data) => {
      commit('setProduct', data.data)
    })
  },

  async selectHotProduct({ commit }, params) {
    await this.$axios.get('/products', { params }).then((data) => {
      commit('setHotProduct', data.data)
    })
  },
  async selectNewProduct({ commit }, params) {
    await this.$axios.get('/products', { params }).then((data) => {
      commit('setNewProduct', data.data)
    })
  },
}
