export const state = () => ({
  profile:{},
})

export const mutations={
  setProfile(state, data){
    state.profile = data
  }
}

export const actions = {
  login({ commit }, form) {
    this.$axios.post('https://reqres.in/api/login', form).then((data) => {
      this.$cookies.set('token', 'QpwL5tke4Pnpja7X4')
      this.$router.push('/')
    })
  },

  realLogin({ commit }, form) {
    this.$axios.post('/login', form).then((data) => {
      this.$cookies.set('token', data.data.token)
      this.$cookies.set('user', data.data)
      this.$router.push('/')
    })
  },
  register({ commit }, form) {
    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('username', form.username)
    formData.append('password', form.password)
    formData.append('profile', form.profile)

    this.$axios.post('/register', formData).then((data) => {
      this.$router.push('/login')
      this.$toast.success('Delete Success!')
    })
  },

  selectProfile({commit}){
    this.$axios.get('/profile').then((data)=>{
      commit('setProfile', data.data)
    })
  }
}
