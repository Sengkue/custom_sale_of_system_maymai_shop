<template>
    <div>
      <!-- --------------Extra large screen is 4k and ultra-wide > 1904px*------------------- -->
      <div v-if="$vuetify.breakpoint.xl">
        <v-carousel
          interval="3000"
          cycle
          hide-delimiters
          show-arrows-on-hover
        >
          <v-carousel-item v-for="(item, index) in items" :key="index">
           
              <img
                :src="item.src"
                :alt="item.alt"
                style="object-fit: cover; width: 100%"
              />
          
          </v-carousel-item>
        </v-carousel>
      </div>
      <!-- --------------Large screen is Desktop screen 1264px > < 1904px*------------------- -->
      <div v-if="$vuetify.breakpoint.lg">
        <v-carousel
          interval="3000"
          cycle
          hide-delimiters
          show-arrows-on-hover
          class="lg"
        >
          <v-carousel-item v-for="(item, index) in items" :key="index">
           
              <img
                :src="item.src"
                :alt="item.alt"
                style="object-fit: cover; width: 100%"
              />
           
          </v-carousel-item>
        </v-carousel>
      </div>
      <!-- --------------Medium screen Large tablet to laptop 960px > < 1264px*------------------- -->
      <div v-if="$vuetify.breakpoint.md">
        <v-carousel
          interval="3000"
          cycle
          hide-delimiters
          :show-arrows="false"
          class="md"
        >
          <v-carousel-item v-for="(item, index) in items" :key="index">
            
              <img
                :src="item.src"
                :alt="item.alt"
                style="object-fit: cover; width: 100%"
              />
           
          </v-carousel-item>
        </v-carousel>
      </div>
      <!-- --------------sleep mobile screen Small 600px > < 960px------------------- -->
      <div v-if="$vuetify.breakpoint.sm">
        <v-carousel
          interval="3000"
          cycle
          hide-delimiters
          :show-arrows="false"
          class="sm"
        >
          <v-carousel-item v-for="(item, index) in items" :key="index">
            
              <img
                :src="item.src"
                :alt="item.alt"
                style="object-fit: cover; width: 100%"
              />
          </v-carousel-item>
        </v-carousel>
      </div>
      <!-- --------------------- mobile screen Extra small < 600px--------------------------- -->
      <div v-if="$vuetify.breakpoint.xs">
        <v-carousel
          interval="3000"
          cycle
          hide-delimiters
          :show-arrows="false"
          class="mobile"
        >
          <v-carousel-item v-for="(item, index) in items" :key="index">
              <img
                :src="item.src"
                :alt="item.alt"
                style="object-fit: cover; width: 100%"
              />
          </v-carousel-item>
        </v-carousel>
      </div>
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
  .mobile {
    margin-bottom: -360px;
    margin-top: -22px;
  }
  .sm {
    margin-bottom: -160px;
    margin-top: -22px;
  }
  .md {
    margin-bottom: -150px;
    margin-top: -22px;
  }
  .lg {
    margin-bottom: -40px;
    margin-top: -22px;
  }
  </style>
  