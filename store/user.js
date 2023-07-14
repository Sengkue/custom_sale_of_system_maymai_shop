import jwtDecode from 'jwt-decode';
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
    this.$axios.post('customer/login', form).then((res) => {
      this.$cookies.set('token', res.data.token);
      this.$cookies.set('user', res.data.c_fname);
      
      const decodedToken = jwtDecode(res.data.token);
      const id = decodedToken.id;
      const user = decodedToken.c_fname;
      const tell = decodedToken.c_phone;
      this.$cookies.set('user_id', id); // Update to 'user' cookie
      this.$cookies.set('phone', tell); // Update to 'user' cookie
      this.$cookies.set('user', user); // Update to 'user' cookie
      
      this.$toast.success('ເຂົ້າສູ່ລະບົບສຳເລັດ');
      this.$router.push('/');
    });
  },

  register({ commit }, form) {
    this.$axios.post('/customer', form).then((data) => {
      this.$router.push('/login')
      this.$toast.success('ລົງທະບຽນສຳເລັດ')
    })
  },

  selectProfile({commit},id){
    this.$axios.get(`/customer/${id}`).then((data)=>{
      commit('setProfile', data.data.result)
    })
  }
}
