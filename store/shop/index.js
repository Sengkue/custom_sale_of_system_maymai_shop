export const state = () => ({
    banner: [],
  })
  
  export const mutations = {
    setImageSlide(state, data) {
      state.banner = data
    }
  }
  
  export const actions = {
    async selectImageSlide({ commit }) {
      await this.$axios.get('/banner',).then((data) => {
        commit('setImageSlide', data.data.result)
      })
    },
  }
  