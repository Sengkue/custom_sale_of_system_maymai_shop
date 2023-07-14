<template>
      <!---------------- desktop nav bar---------------------------------------------------desktop nav bar----------------->
      <v-app-bar v-if="!$vuetify.breakpoint.xs" fixed app>
        <v-container class="d-flex align-center">
          <v-avatar v-ripple to="/" @click="goHome('/')">
            <v-img src="/image/icon.png" width="20" contain></v-img>
          </v-avatar>
          <v-toolbar-title class="px-1 cursor-pointer">{{
            title
          }}</v-toolbar-title>
          <v-spacer></v-spacer>
  
          <v-text-field
            v-model="search"
            placeholder="search"
            outlined
            dense
            hide-details="auto"
            @input="$store.commit('product/setSearchValue', $event)"
          >
            <template #append>
              <v-btn text small @click="onSearch">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </template>
          </v-text-field>
  
          <v-spacer />
          <div v-ripple class="text-center px-3 cursor-pointer" @click="setTheme">
            <div>
              <v-icon color="blue">{{
                !sun ? 'mdi-weather-night' : 'mdi-white-balance-sunny'
              }}</v-icon>
            </div>
            <div>{{ !sun ? 'dark' : 'sun' }}</div>
          </div>
          <div
            v-ripple
            class="text-center px-3 cursor-pointer"
            @click="goTo('/login')"
          >
            <div><v-icon to="/login" color="blue">mdi-account</v-icon></div>
            <div>Profile</div>
          </div>
          <div
            v-ripple
            class="text-center px-3 cursor-pointer"
            @click="goDetail('/products/cart')"
          >
            <v-badge
              v-if="cartItems"
              color="red"
              :content="cartItems.length"
              overlap
            >
              <div>
                <v-icon color="blue">mdi-cart-outline</v-icon>
              </div>
              <div>cart</div>
            </v-badge>
            <div v-else>
              <div>
                <v-icon color="blue">mdi-cart-outline</v-icon>
              </div>
              <div>cart</div>
            </div>
          </div>
          <div v-ripple class="text-center px-3 cursor-pointer">
            <div><v-icon color="blue">mdi-translate</v-icon></div>
            <div>English</div>
          </div>
        </v-container>
      </v-app-bar>
  </template>
  
  <script>
  export default {
    name: 'DefaultLayout',
    data() {
      return {
        num: 0,
        sun: false,
        clipped: false,
        drawer: false,
        fixed: false,
        search: '',
        title: 'MayMaiShop',
        dark: false,
        floating:false,
        cartItems:[]
      }
  
    },
  
    computed: {
 
    },
    watch: {},
  
    created() {
      this.dark = this.$cookies.get('mode')
      this.$vuetify.theme.dark = this.dark
      this.sun = this.dark
    },
    mounted() {
      this.$store.dispatch('product/search')
      this.getCartItem()
    },
  
    methods: {
      getCartItem() {
      this.cartItems = this.$cookies.get('listOrder') || []
    },
      goTo(to) {
        //
        this.$router.push(to)
      },
      goCategory(to) {
        this.$router.push(to)
      },
      goHome(to) {
        this.$router.push(to)
      },
      goDetail(to) {
        this.$router.push(to)
      },
  
      setTheme() {
        this.sun = !this.sun
        this.dark = this.sun
        if (this.sun === true) {
          this.$vuetify.theme.dark = true
          this.$cookies.set('mode', true)
          return true
        } else {
          this.$vuetify.theme.dark = false
          this.$cookies.set('mode', false)
          return false
        }
      },
      onSearch() {
        this.$store.dispatch('product/search', { search: this.search, limit: 8 })
        this.$router.push('/search')
      },
    },
  }
  </script>
  
  <style lang="scss" scoped>
  .cursor-pointer {
    cursor: pointer !important;
  }
  
  .bg {
    background: -webkit-gradient(
      linear,
      right top,
      left top,
      from(#071b52),
      to(teal)
    );
    background: linear-gradient(270deg, #071b52 0, teal);
  }
  .bgcolor {
    background-color: #f3f3f3;
  }
  </style>
  