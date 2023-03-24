<template>
  <div>
    <v-row>
      <v-col cols="12">
        <div class="text-center">
          <v-avatar size="400">
            <v-img :src="url"></v-img>
          </v-avatar>
        </div>
      </v-col>
      <v-col cols="12">
        <v-file-input
          id="file"
          v-model="file"
          label="Image"
          filled
          class="d-none"
          prepend-icon="mdi-camera"
          @change="onFileChange"
          @click="upload"
        ></v-file-input>
      </v-col>
    </v-row>
    <v-btn @click="upload"> upload image </v-btn>
    <v-card> </v-card>
  </div>
</template>

<script>
export default {
  name: 'EcommerceLandingProfile',

  data() {
    return {
      file: null,
      url: null,
    }
  },

  mounted() {},

  methods: {
    onFileChange(e) {
      if (e) {
        this.url = URL.createObjectURL(e)
      }
    },
    upload() {
      document.getElementById('file').click()
    },
  },
}
</script>

<style lang="scss" scoped></style>
