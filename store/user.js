import jwtDecode from 'jwt-decode'
export const state = () => ({
  profile: {},
})

export const mutations = {
  setProfile(state, data) {
    state.profile = data
  },
}

export const actions = {
  async login({ commit }, form) {
    try {
      const res = await this.$axios.post('customer/login', form);
      this.$cookies.set('token', res.data.token);
      this.$cookies.set('user', res.data.c_fname);
      const decodedToken = jwtDecode(res.data.token);
      const id = decodedToken.id;
      const profile = decodedToken.c_profile;
      const tell = decodedToken.c_phone;
      this.$cookies.set('user_id', id); // Update to 'user' cookie
      this.$cookies.set('phone', tell); // Update to 'user' cookie
      this.$cookies.set('profile', profile); 
  
      this.$toast.success('ເຂົ້າສູ່ລະບົບສຳເລັດ');
      this.$router.push('/');
    } catch (error) {
      this.$toast.error('ເບີ ຫຼື ລະຫັດບໍ່ຖືກຕ້ອງ');
    }
  },
  

  async register({ commit }, form) {
    try {
      await this.$axios.post('/customer', form).then((data) => {
        this.$router.push('/login')
        this.$toast.success('ລົງທະບຽນສຳເລັດ')
      })
    } catch (error) {
      this.$toast.error('ເບີໂທລະສັບຖືກນຳໃຊ້ແລ້ວ',{
        duration:6000
      })
    }
  },

  selectProfile({ commit }, id) {
    this.$axios.get(`/customer/${id}`).then((data) => {
      commit('setProfile', data.data.result)
    })
  },
}
