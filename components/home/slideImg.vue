<template>
  <div class="mt-n6">
    <v-carousel
      height="auto"
      interval="3000"
      cycle
      hide-delimiters
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(item, index) in items" :key="index">
        <img
          :src="item.src"
          :alt="item.alt"
          lazy-src="/image/p01.jpg"
          style="object-fit: cover; width: 100%"
        />
      </v-carousel-item>
    </v-carousel>
    <v-card color="teal">
      <!-- //content -->
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'EcommerceLandingSlideImg',

  data() {
    return {
      items: [
        {
          src: '/image/p01.jpg',
        },
        {
          src: '/image/p02.jpg',
        },
        {
          src: '/image/p03.jpg',
        },
        {
          src: '/image/p04.jpg',
        },
        {
          src: '/image/p05.jpg',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
