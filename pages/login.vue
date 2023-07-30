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
                            color="teal"
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
                            color="teal"
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
                            color="teal"
                            dark
                            block
                            :loading="loading"
                            @click="logintosystem"
                            >Login</v-btn
                          >
                          <v-row class="mt-2">
                            <v-col cols="6"> ລືມລະຫັດຜ່ານບໍ? </v-col>
                            <v-col cols="6" class="d-flex justify-end">
                              <a
                                style="text-decoration: none"
                                :href="
                                  'https://wa.me/' +
                                  '+8562078781525' +
                                  '?text=ສະບາຍດີແອັດ ລູກຄ້າລືມລະຫັດຜ່ານ '
                                "
                                target="_blank"
                              >
                                ຕິດຕໍ່ຫາ Admin
                                <v-icon
                                  class="my-icon"
                                  size="25"
                                  color="success"
                                  >mdi-whatsapp</v-icon
                                >
                              </a>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-col>
                  <v-col cols="12" md="6" class="teal rounded-bl-xl">
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
                  <v-col cols="12" md="6" class="teal rounded-br-xl">
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
                        <v-col cols="12" sm="8" class="mb-5">
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
                              class="mt-2 teal white--text"
                              small
                              @click="upload"
                            >
                              <v-icon color="white">mdi-tray-arrow-up</v-icon>
                              Profile
                            </v-btn>
                          </div>

                          <v-text-field
                            v-model="register.c_fname"
                            label="ຊື່"
                            outlined
                            dense
                            color="teal"
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
                            color="teal"
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
                            color="teal"
                            autocomplete="off"
                            :items="['ຊາຍ', 'ຍິງ']"
                            :rules="[(v) => !!v || 'ກະລຸນາເລືອກເພດກ່ອນ']"
                          ></v-select>

                          <v-text-field
                            v-model="register.c_phone"
                            label="ເບີ"
                            outlined
                            dense
                            color="teal"
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
                            color="teal"
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
                            color="teal"
                            dark
                            block
                            tile
                            @click="signup"
                            >Sign up</v-btn
                          >
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
    this.$store.dispatch('user/realLogin')
  },

  methods: {
    logintosystem() {
      this.loading = true
      this.$store.dispatch('user/login', this.Login)
      this.loading = false
    },
    async signup() {
      if (this.file === null || this.file === '') {
        this.$toast.error('ເລືອກຮູບກ່ອນ')
        return
      }
      this.loading = true
      const file = this.file
      const formData = new FormData()
      formData.append('file', file)
      await this.$axios.post('/upload/single', formData).then((res) => {
        this.register.c_profile = res.data.url
        this.$store.dispatch('user/register', this.register)
      })
      setTimeout(() => {
        this.loading = false   
        this.step = 1
        this.clear()
      }, 3000);
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
      this.file = null
      this.url = null
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
