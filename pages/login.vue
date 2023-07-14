<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-window-item :value="1">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-card-text class="mt-12">
                      <h4 class="text-center">ເຂົ້າສູ່ລະບົບບັນຊີຂອງທ່ານ</h4>
                      <h6 class="text-center grey--text">
                        ເຂົ້າສູ່ລະບົບບັນຊີຂອງທ່ານເພື່ອໃຫ້ທ່ານສາມາດທຳການສັ່ງຊື້
                      </h6>

                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="8">
                          <v-text-field
                            v-model="Login.c_phone"
                            label="ເບີ"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            class="mt-16"
                            :rules="[
                              (v) => !!v || 'ປ້ອມເບີເພື່ອເຂົ້າສູ່ລະບົບ',
                              (v) =>
                                (v && v.length <= 25) ||
                                'Name must be less than 10 characters',
                            ]"
                          >
                          </v-text-field>
                          <v-text-field
                            v-model="Login.c_password"
                            label="ລະຫັດ"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            type="password"
                            :rules="[
                              (v) => !!v || 'ປ້ອມລະຫັດ',
                              (v) =>
                                (v && v.length <= 25) ||
                                'ລະຫັດບໍ່ສາມາດຍາວເກີນ25ຕົວເລກ',
                            ]"
                          >
                          </v-text-field>

                          <v-btn
                            color="blue"
                            dark
                            block
                            :loading="loading"
                            @click="logintosystem"
                            >Login</v-btn
                          >
                          <h5 class="text-center grey--text mt-4 mb-3">
                            Or Log in using
                          </h5>
                          <div
                            class="d-flex justify-space-between align-center mx-10 mb-16"
                          >
                            <v-btn
                              depressed
                              outlined
                              color="grey"
                              @click="addLog"
                            >
                              <v-icon color="red">mdi-google</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="blue">mdi-facebook</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="ligt-blue">mdi-twitter</v-icon>
                            </v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-col>
                  <v-col cols="12" md="6" class="blue rounded-bl-xl">
                    <div style="text-align: center; padding: 180px 0">
                      <v-card-text class="white--text">
                        <h3 class="text-center">ຍັງບໍ່ມີບັນຊີບໍ?</h3>
                        <h6>
                          ລົງທະບຽນສໍາລັບບັນຊີເພື່ອສາມາດດຳເນີນການຢ່າງຖືກຕ້ອງ
                        </h6>
                      </v-card-text>

                      <div class="text-center">
                        <v-btn tile outlined dark @click="step++"
                          >SIGN UP
                        </v-btn>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
              <v-window-item :value="2">
                <v-row>
                  <v-col cols="12" md="6" class="blue rounded-br-xl">
                    <div style="text-align: center; padding: 180px 0">
                      <v-card-text class="white--text">
                        <h3 class="text-center">ລົງທະບຽນແລ້ວ?</h3>
                        <h6 class="text-center">
                          ເຂົ້າສູ່ລະບົບບັນຊີຂອງທ່ານເພື່ອໃຫ້ທ່ານສາມາດສືບຕໍ່ສ້າງ
                          ແລະ<br />
                          ແກ້ໄຂກະແສການເລີ່ມຕົ້ນຂອງທ່ານ
                        </h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step--">Log in</v-btn>
                      </div>
                    </div>
                  </v-col>

                  <!--end login --------------------------------------------------------login -->

                  <v-col cols="12" md="6">
                    <v-card-text class="mt-12">
                      <h3 class="text-center">ລົງທະບຽນສໍາລັບບັນຊີ</h3>
                      <h5 class="text-center grey--text">
                        ໃຫ້ທ່ານຕັ້ງຄ່າທັງໝົດເພື່ອໃຫ້ທ່ານສາມາດເລີ່ມສ້າງຕົວຂອງທ່ານເອງໄດ້
                      </h5>
                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="8">
                          <!---------------------------------- profile image user -->
                          <div class="justify-center text-center mt-5">
                            <div>
                              <v-avatar size="120">
                                <v-img v-if="url" :src="url"></v-img>
                                <v-img v-else src="image/profile.gif"></v-img>
                              </v-avatar>
                            </div>
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
                            <!--------------------------- buttom profile -->
                            <v-btn
                              class="mt-2"
                              color="primary"
                              small
                              @click="upload"
                            >
                              <v-icon>mdi-tray-arrow-up</v-icon>
                              Profile
                            </v-btn>
                          </div>

                          <v-text-field
                            v-model="register.c_fname"
                            label="ຊື່"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            class="mt-4"
                            :rules="[
                              (v) => !!v || 'ປ້ອມຊື່',
                              (v) =>
                                (v && v.length <= 25) ||
                                'ສາມາດປ້ອນໄດ້25ຕົວອັກສອນ',
                            ]"
                          />
                          <v-text-field
                            v-model="register.c_lname"
                            label="ນາມສະກຸນ"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            :rules="[
                              (v) => !!v || 'ປ້ອມນາມກະກຸນ',
                              (v) =>
                                (v && v.length <= 25) ||
                                'ສາມາດປ້ອນໄດ້25ຕົວອັກສອນ',
                            ]"
                          />

                          <v-select
                            v-model="register.c_gender"
                            label="ເພດ"
                            outlined
                            dense
                            color="blue"
                            autocomplete="off"
                            :items="['ຊາຍ', 'ຍິງ']"
                            :rules="[(v) => !!v || 'ກະລຸນາເລືອກເພດກ່ອນ']"
                          ></v-select>

                          <v-text-field
                            v-model="register.c_phone"
                            label="ເບີ"
                            outlined
                            dense
                            color="blue"
                            autocomplete="off"
                            :rules="[
                              (v) => !!v || 'ກະລຸນາປ້ອມເບີ',
                              (v) => /^\d+$/.test(v) || 'ສາມາດປ້ອມໄດ້ພຽງຕົວເລກ',
                            ]"
                          ></v-text-field>

                          <v-text-field
                            v-model="register.c_password"
                            label="ລະຫັດ"
                            outlined
                            dense
                            color="blue"
                            autocomplete="off"
                            :append-icon="
                              showPassword ? 'mdi-eye' : 'mdi-eye-off'
                            "
                            :rules="[
                              (v) => !!v || 'ປ້ອມລະຫັດ',
                              (v) =>
                                (v && v.length <= 25) ||
                                'ລະຫັດຜ່ານຕ້ອງມີໜ້ອຍກວ່າ 6 ຕົວອັກສອນ',
                            ]"
                            :type="showPassword ? 'text' : 'password'"
                          >
                            <template #append>
                              <v-icon @click="showPassword = !showPassword">
                                {{ showPassword ? 'mdi-eye' : 'mdi-eye-off' }}
                              </v-icon>
                            </template>
                          </v-text-field>

                          <v-btn
                            :loading="loading"
                            color="blue"
                            dark
                            block
                            tile
                            @click="signup"
                            >Sign up</v-btn
                          >

                          <h5 class="text-center grey--text mt-4 mb-3">
                            Or Sign up using
                          </h5>
                          <div
                            class="d-flex justify-space-between align-center mx-10 mb-11"
                          >
                            <v-btn depressed outlined color="grey">
                              <v-icon color="red">mdi-google</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="blue">mdi-facebook</v-icon>
                            </v-btn>
                            <v-btn depressed outlined color="grey">
                              <v-icon color="light-blue lighten-3"
                                >mdi-twitter</v-icon
                              >
                            </v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-window-item>
            </v-form>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'EcommerceLandingLogin',
  layout: 'blank',
  data() {
    return {
      loading: false,
      file: null,
      url: null,
      step: 1,
      Login: {
        c_phone: null,
        c_password: null,
      },
      valid: true,
      register: {
        c_profile: null,
        c_fname: null,
        c_lname: null,
        c_gender: null,
        c_phone: null,
        c_password: null,
      },
      showPassword: false,
    }
  },
  propos: {
    source: String,
  },

  mounted() {
    // this.$store.dispatch('user/realLogin')
  },

  methods: {
    logintosystem() {
      this.loading = true
      this.$store.dispatch('user/login', this.Login)
      this.loading = false
    },
    addLog() {
      this.username = '02078781525'
      this.password = '123456'
    },
    async signup() {
      this.loading = true
      if (this.$refs.form.validate()) {
        const file = this.file
        const formData = new FormData()
        formData.append('file', file)
        await this.$axios.post('/upload/single', formData).then((res) => {
          this.register.c_profile = res.data.url
          this.$store.dispatch('user/register', this.register)
          this.clear()
          this.step = 1
        })
      }
      this.loading = false
    },
    onFileChange(e) {
      if (e) {
        this.url = URL.createObjectURL(e)
      }
    },
    upload() {
      document.getElementById('file').click()
    },
    clear() {
      this.register.c_profile = null
      this.register.c_fname = null
      this.register.c_lname = null
      this.register.c_gender = null
      this.register.c_phone = null
      this.register.c_password = null
    },
  },
}
</script>

<style lang="scss" scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
