<template>
  <v-carousel v-show="!isMobile"  interval="3000" cycle hide-delimiters >
    <v-carousel-item v-for="(item, index) in items" :key="index">
      <v-card>
        <img
          :src="item.src"
          :alt="item.alt"
          style="object-fit: cover; width: 100%; height: 100%"
        />
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  name: 'EcommerceLandingSlideImg',

  data() {
    return {
      isMobile: false,
      change: true,
      items: [
        {
          src: '/image/p01.png',
        },
        {
          src: '/image/p02.jpg',
        },
        {
          src: '/image/p03.png',
        },
        {
          src: '/image/p04.png',
        },
        {
          src: '/image/p05.png',
        },
        {
          src: '/image/p06.jpg',
        },
      ],
    }
  },
  watch: {
    '$vuetify.breakpoint.width': function (val) {
      this.isMobile = val <= 600
    },


  },
  mounted() {
    this.isMobile = window.innerWidth <= 600
  },
}
</script>

<style lang="scss" scoped>


</style>

