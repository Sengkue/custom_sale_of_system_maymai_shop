<template>
  <div>
    <div id="app">
      <v-app>
        <v-main>
          <v-carousel>
            <template v-for="(item, index) in slider">
              <v-carousel-item
                v-if="(index + 1) % columns === 1 || columns === 1"
                :key="index"
              >
                <v-row class="flex-nowrap" style="height: 100%">
                  <template v-for="(n, i) in columns">
                    <template v-if="+index + i < slider.length">
                      <v-col :key="i">
                        <v-sheet
                          v-if="+index + i < slider.length"
                          :color="slider[+index + i]"
                          height="100%"
                        >
                          <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                          >
                            <div class="display-3">{{ +index + i + 1 }}</div>
                          </v-row>
                        </v-sheet>
                      </v-col>
                    </template>
                  </template>
                </v-row>
              </v-carousel-item>
            </template>
          </v-carousel>
        </v-main>
      </v-app>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EcommerceLandingTestimage',

  data() {
    return {
      slider: [
        'red',
        'green',
        'orange',
        'blue',
        'pink',
        'purple',
        'indigo',
        'cyan',
        'deep-purple',
        'light-green',
        'deep-orange',
        'blue-grey',
      ],
    }
  },
  computed: {
    columns() {
      if (this.$vuetify.breakpoint.xl) {
        return 4
      }

      if (this.$vuetify.breakpoint.lg) {
        return 3
      }

      if (this.$vuetify.breakpoint.md) {
        return 2
      }

      return 1
    },
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped></style>
