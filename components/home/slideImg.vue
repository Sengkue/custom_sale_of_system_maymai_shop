<template>
  <div>
    <v-carousel
      height="auto"
      interval="3000"
      cycle
      hide-delimiters
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(item, index) in getBanner" :key="index">
        <img
          :src="item.url"
          :alt="item.alt"
          lazy-src="/image/p01.jpg"
          style="object-fit: cover; width: 100%"
        />
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'EcommerceLandingSlideImg',

  data() {
    return {
      
    }
  },
  computed:{
    getBanner(){
      return this.$store.state.shop.banner
    }
  },
  mounted(){
    this.$store.dispatch('shop/selectImageSlide')
  }
}
</script>

<style lang="scss" scoped>
</style>
