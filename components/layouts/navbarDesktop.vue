<template>
  <!---------------- desktop nav bar---------------------------------------------------desktop nav bar----------------->
  <v-app-bar v-if="!$vuetify.breakpoint.xs" fixed app>
    <v-container class="d-flex align-center">
      <div v-ripple class="text-center px-3 cursor-pointer"  @click="goHome('/')">
        <div>
          <v-icon large>mdi-home</v-icon>
        </div>
        <!-- <div>ໜ້າຫຼັກ</div> -->
      </div>
      <v-avatar v-ripple @click="goHome('/')">
        <v-img src="/image/icon.png" width="20" contain></v-img>
      </v-avatar>
      <v-toolbar-title
        v-ripple
        class="px-1 cursor-pointer"
        @click="goHome('/')"
        >{{ title }}</v-toolbar-title
      >
      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        placeholder="ຄົ້ນຫາ"
        outlined
        dense
        hide-details="auto"
        @keyup.enter="onSearch"
        @input="$store.commit('product/setSearchValue', $event)"
      >
        <template #append>
          <v-btn
            text
            small
            style="background-color: transparent"
            @click="onSearch"
          >
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
        @click="goDetail('/products/cart')"
      >
        <v-badge
          v-if="cartItems.length > 0"
          color="red"
          :content="cartItems.length"
          overlap
        >
          <div>
            <v-icon color="blue">mdi-cart-outline</v-icon>
          </div>
          <div class="mt-1">ກະຕ່າ</div>
        </v-badge>
        <div v-else>
          <div>
            <v-icon color="blue">mdi-cart-outline</v-icon>
          </div>
          <div>ກະຕ່າ</div>
        </div>
      </div>
      <!-- <div v-ripple class="text-center px-3 cursor-pointer">
        <div><v-icon color="blue">mdi-translate</v-icon></div>
        <div>ປ່ຽນພາສາ</div>
      </div> -->
      <div
        v-ripple
        class="text-center px-3 cursor-pointer"
        @click="goTo('/login')"
      >
        <v-avatar v-if="$cookies.get('profile')" size="30" style="border: 2px solid blue;"
          ><v-img :src="$cookies.get('profile')"></v-img
        ></v-avatar>
        <div v-else><v-icon to="/login" color="blue">mdi-account</v-icon></div>
        <div v-if="$cookies.get('token')">ໂປຣໄຟລ໌</div>
        <div v-else>login</div>
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
      search: null,
      title: 'ຮ້ານແມ່ໄໝແຟຊັນ',
      dark: false,
      floating: false,
      cartItems: [],
    }
  },

  computed: {},
  watch: {},

  created() {
    this.dark = this.$cookies.get('mode')
    this.$vuetify.theme.dark = this.dark
    this.sun = this.dark
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
    async onSearch() {
      await this.$store.dispatch('product/search', this.search)
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
