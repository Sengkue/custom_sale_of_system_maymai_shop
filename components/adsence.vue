<template>
  <v-app>
    <div class="text-center">
      <v-dialog v-model="dialog" max-width="600">
        <template #activator="{ on, attrs }">
          <v-btn v-bind="attrs" class="mt-2" color="red" dark v-on="on">
            show
          </v-btn>
          {{ dateFormat(now) }}
        </template>

        <v-card>
          <div class="d-flex justify-center">
            <v-img src="/image/icon.png" max-height="400" max-width="400">
              <v-chip class="ma-2" color="orange" text-color="white">
                Premium
                <v-icon right> mdi-star </v-icon>
              </v-chip>

              <v-chip class="ma-2" color="primary" text-color="white">
                1 Year
                <v-icon right> mdi-cake-variant </v-icon>
              </v-chip>
            </v-img>
          </div>
          <v-text-field outlined label="date time " type="date"> </v-text-field
          ><br />
          <v-card-title class="text-h5"> Welcome to Hmong Shop </v-card-title>

          <v-card-text> This Time we have Promotion for everyone? </v-card-text>

          <v-card-actions>
            <v-img
              src="/image/GreenRed.gif"
              max-height="60"
              max-width="60"
            ></v-img>

            <v-spacer></v-spacer>
            <v-btn text @click="dialog = false"> Cancel</v-btn>
            <v-btn color="red" text @click="showclose">
              Close{{ popup }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    dialog: false,
    now: null,
    popup: true,
  }),

  mounted() {
    // this.$cookies.set('popup', true)
    this.now = new Date()
    setInterval(() => {
      this.now = new Date()
    }, 1000)

    // setInterval(() => {
    //   this.dialog = true
    // }, 10000)

    if (this.popup === true) {
      setTimeout(() => {
        this.dialog = true
      }, 5000)
    }
  },
  methods: {
    dateFormat() {
      return (
        new Date().getHours() +
        ':' +
        new Date().getMinutes() +
        ':' +
        (new Date().getSeconds()).toString().padStart(2,0)
      )
    },
    showclose() {
      this.popup = !this.popup
      this.dialog = !this.dialog
    },
  },
}
</script>
