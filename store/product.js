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
  ProductBanner: [],
  getByCategory: [],
  hotAndpopular: [],
})

export const mutations = {
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
  setProductImage(state, data) {
    state.ProductBanner = data
  },
  setSelectByCategory(state, data) {
    state.getByCategory = data
  },
  setHotAndPopular(state, data) {
    state.hotAndpopular = data
  },
}

export const actions = {
  // async selectProduct({ commit }, params) {
  //   await this.$axios.get('/products', { params }).then((data) => {
  //     commit('setProduct', data.data)
  //   })
  // },

  async selectProductDetail({ commit }, productId) {
    await this.$axios.get(`/product/${productId}`).then((data) => {
      commit('setProductDetail', data.data.result)
    })
  },

  async search({ commit }, keyword) {
    try {
      const response = await this.$axios.get('/product/search', {
        params: {
          keyword,
          limit: 8,
        },
      })

      commit('setProduct', response.data.result)
    } catch (error) {
      // You can commit an empty array or handle the error state differently based on your requirements.
      commit('setProduct', [])
    }
  },

  async selectHotProduct({ commit }, params) {
    await this.$axios.get('/products', { params }).then((data) => {
      commit('setHotProduct', data.data)
    })
  },
  // _________________________select image product in detail______________________________
  async selectImageByProductId({ commit }, id) {
    await this.$axios.get(`/image/product/${id}`).then((data) => {
      commit('setProductImage', data.data.data)
    })
  },
  async selectNewProduct({ commit }, limit) {
    await this.$axios
      .get('/product/limit', {
        params: { limit },
      })
      .then((data) => {
        commit('setNewProduct', data.data.result)
      })
  },
  // ___________________________select by category________________________
  async selectByCategory({ commit }, id) {
    const limit = 100
    try {
      const response = await this.$axios.get(`/product/category/${id}`,{
        params: { limit }
      })
      commit('setSelectByCategory', response.data.result)
    } catch (error) {
      commit('setSelectByCategory', [])
    }
  },
  // ________________________________select Hot or Popular___________________
  async selectHotAndPopular({ commit }, limit) {
    console.log('show number', limit)
    await this.$axios
      .get(`/saleDetail/hot/product`, {
        params: { limit },
      })
      .then((res) => {
        commit('setHotAndPopular', res.data.result)
      })
  },
}
