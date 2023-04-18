<template>
  <v-app :dark="dark">
    <!------------------------mobile nar bar------------------------------------ mobile screen -->
    <div v-if="$vuetify.breakpoint.xs">
      <v-app-bar fixed app :color="sun ? 'primary' : ''">
        <v-avatar v-ripple to="/" @click="goHome('/')">
          <v-img src="/image/icon.png" width="20" contain></v-img>
        </v-avatar>
        <v-spacer></v-spacer>

        <v-text-field
          v-model="search"
          class="ml-1"
          placeholder="search"
          :background-color="sun ? '' : 'white'"
          outlined
          dense
          hide-details="auto"
          append-icon="mdi-magnify"
        >
        </v-text-field>

        <v-spacer />
        <div v-ripple class="text-center px-3 cursor-pointer" @click="setTheme">
          <div>
            <v-icon large>{{
              !sun ? 'mdi-weather-night' : 'mdi-white-balance-sunny'
            }}</v-icon>
          </div>
        </div>

        <div v-ripple class="text-center px-3 cursor-pointer">
          <div><v-icon large>mdi-translate</v-icon></div>
        </div>
      </v-app-bar>
    </div>

    <!---------------- desktop nav bar---------------------------------------------------desktop nav bar----------------->
    <v-app-bar v-else fixed app>
      <v-container class="d-flex align-center">
        <v-avatar v-ripple to="/" @click="goHome('/')">
          <v-img src="/image/icon.png" width="20" contain></v-img>
        </v-avatar>
        <v-toolbar-title class="px-1 cursor-pointer" >{{ title }}</v-toolbar-title>
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
          <div>{{ !sun ? 'Profile' : 'Login' }}</div>
        </div>
        <div
          v-ripple
          class="text-center px-3 cursor-pointer"
          @click="goDetail('/productDetail')"
        >
          <v-badge :color="num ? 'red' : ''" :content="getNo" overlap>
            <div>
              <v-icon color="blue" to="/productDetail">mdi-cart-outline</v-icon>
            </div>
            <div>shop</div>
          </v-badge>
        </div>
        <div v-ripple class="text-center px-3 cursor-pointer" @click="addNum">
          <div><v-icon color="blue">mdi-translate</v-icon></div>
          <div>English</div>
        </div>
      </v-container>
    </v-app-bar>
    <!-- ------------Main nuxt--------------------------------------------------main nuxt --------------------->
    <v-main :class="sun? '':'bgcolor'">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <!----------------mobile footer------------------------------------------- foooter for mobile screen -->
    <v-footer
      v-if="$vuetify.breakpoint.xs"
      fixed
      app
      :color="sun ? 'primary' : ''"
    >
      <v-container class="d-flex align-center justify-space-between ma-0 pa-2">
        <div
          v-ripple
          class="text-center px-0 cursor-pointer"
          @click="goHome('/')"
        >
          <div><v-icon to="/" large>mdi-home</v-icon></div>
        </div>
        <div
          v-ripple
          class="text-center px-0 cursor-pointer"
          @click="goCategory('/category')"
        >
          <div>
            <v-icon to="/category" large>mdi-shape-outline</v-icon>
          </div>
        </div>
        <div v-ripple class="text-center"  to="/" @click="goHome('/')">
          <div elevation="8">
            <v-avatar class="mt-n9  cursor-pointer" elevation="8"
              ><v-img
                src="/image/redBlack.gif"
                max-width="60"
                max-height="60"
              ></v-img
            ></v-avatar>
          </div>
          <div class="mt-n2  cursor-pointer">{{ title }}</div>
        </div>

        <div
          v-ripple
          class="text-center px-0 cursor-pointer"
          @click="goDetail('/productDetail')"
        >
          <div><v-icon large to="/productDetail">mdi-cart-outline</v-icon></div>
        </div>

        <div
          v-ripple
          class="text-center px-0 cursor-pointer"
          @click="goTo('/login')"
        >
          <div><v-icon to="/login" large>mdi-account</v-icon></div>
        </div>
      </v-container>
    </v-footer>
    <!--------------------------desktop footer screen---------------------------------------- desktop screen -->
    <v-footer v-else> </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',

  data() {
    return {
      num:0,
      sun: false,
      clipped: false,
      drawer: false,
      fixed: false,
      search: '',
      title: 'MayMaiShop',
      dark: false,
    }
  },

  computed:{
    getNo(){
      return this.$store.state.product.number
    }

  },
  watch: {

  },
  
  created() {
    this.dark = this.$cookies.get('mode')
    this.$vuetify.theme.dark = this.dark
    this.sun = this.dark
  },
  mounted() {
    this.$store.dispatch('product/search')
  },

  methods: {
  addNum() {
      this.num = this.num + 1
   this.$store.commit('product/changeNumber', this.num)
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
.bgcolor{
  background-color: #F3F3F3;

}
</style>
