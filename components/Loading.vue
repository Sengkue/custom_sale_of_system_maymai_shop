<template>
  <div v-if="loading" class="loading-page">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular></div
      >
</template>

<script>
export default {
  name: 'EcommerceLandingLoading',
  data: () => ({
    loading: true,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style lang="scss" scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 80%);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}
</style>
