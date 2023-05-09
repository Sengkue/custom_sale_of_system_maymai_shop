export const state = () => ({
    number: null,
  })
  
  export const mutations = {
    changeNumber(state, data) {
      state.number = data
    },
  }
  
  export const actions = {
    // async select({ commit }, params) {
    //   await this.$axios
    //     .get('https://reqres.in/api/users', { params })
    //     .then((res) => {
    //       commit('setUser', res.data)
    //     })
    // },
  }
  