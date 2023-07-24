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
  hotAndpopular:[]
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
  setHotAndPopular(state, data){
    state.hotAndpopular = data
  }
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
  // _________________________select image product in detail______________________________
  async selectImageByProductId({ commit }, id) {
    await this.$axios.get(`/image/product/${id}`).then((data) => {
      commit('setProductImage', data.data.data)
    })
  },
  async selectNewProduct({ commit }) {
    await this.$axios.get('/product').then((data) => {
      commit('setNewProduct', data.data.result)
    })
  },
  // ___________________________select by category________________________
  async selectByCategory({ commit }, id) {
    try {
      const response = await this.$axios.get(`/product/category/${id}`);
      commit('setSelectByCategory', response.data.result);
    } catch (error) {
      console.error('Error fetching products by category:', error);
      commit('setSelectByCategory', []);
    }
  },
  // ________________________________select Hot or Popular___________________
  async selectHotAndPopular({commit}){
       await this.$axios.get('/saleDetail/hot/product').then((res)=>{
        commit('setHotAndPopular', res.data.result)
        console.log('setHotAndPopular', res.data.result)
       })
  }
}
