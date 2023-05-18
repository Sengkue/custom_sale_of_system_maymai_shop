<template>
  <div>
    <v-card>
      <v-row>
        <v-col cols="12">
          <v-row class="ma-0 pa-0">
            <v-col cols="12" class="mt-0 pt-0">
              <v-card-title class="d-flex justify-space-between mt-0 pt-0">
                <div class="d-flex">
                  <v-icon>mdi-account-tie</v-icon>
                  <div >ຜູ້ຮັບ</div>
                </div>
                <div v-ripple @click="editUser('/checkout/editreceive')">
                  <v-icon>mdi-square-edit-outline</v-icon>
                </div>
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="3" class="mt-0 pt-0"
                    ><div>ຊື່ຜູ້ຮັບ:</div></v-col
                  >
                  <v-col cols="9" class="mt-0 pt-0"><div>ເຊັງວ່າງ</div></v-col>
                  <v-col cols="3" class="mt-0 pt-0"><div>ເບີໂທ:</div></v-col>
                  <v-col cols="9" class="mt-0 pt-0">
                    <div>+20 78781525</div></v-col
                  >
                </v-row>
              </v-card-text>
              <v-divider class="mt-0 pt-0"></v-divider>
            </v-col>

            <v-col cols="12" class="mt-0 pt-0">
              <v-card-title class="d-flex justify-space-between mt-0 pt-0">
                <div class="d-flex">
                  <v-icon>mdi-map-marker</v-icon>
                  <div >ທີ່ຢູ່</div>
                </div>
                <div v-repple @click="editLocation('/checkout/editreceive_Address')">
                  <v-icon>mdi-square-edit-outline</v-icon>
                </div>
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="3" class="mt-0 pt-0"><div>ແຂວງ:</div></v-col>
                  <v-col cols="9" class="mt-0 pt-0"
                    ><div>ນະຄອນຫຼວງວຽງຈັນ</div></v-col
                  >
                  <v-col cols="3" class="mt-0 pt-0"><div>ເມືອງ:</div></v-col>
                  <v-col cols="9" class="mt-0 pt-0"> <div>ໄຊທານີ</div></v-col>
                  <v-col cols="3" class="mt-0 pt-0"><div>ບ້ານ:</div></v-col>
                  <v-col cols="9" class="mt-0 pt-0"> <div>ດົງໂດກ</div></v-col>
                  <v-col cols="3" class="mt-0 pt-0"><div>ທີ່ຢູ່:</div></v-col>
                  <v-col cols="9" class="mt-0 pt-0"> <div>ມຊ</div></v-col>
                </v-row>
              </v-card-text>
              <v-divider></v-divider>
            </v-col>

            <v-col cols="12" class="mt-0 pt-0">
              <v-card-title class="d-flex justify-space-between mt-0 pt-0">
                <div class="d-flex">
                  <v-icon>mdi-truck-delivery</v-icon>
                  <div style="border: ">ການຈັດສົ່ງ</div>
                </div>
              </v-card-title>
              <v-card-text class="mt-0 pt-0">
                <v-row>
                  <v-col cols="12" class="mt-0 pt-0"
                    ><div>
                      ນະຄອນຫຼວງວຽງຈັນ ຈັດສົ່ງພາຍໃນ 24 ຊົ່ວໂມງ
                      (ຈະມີພະນັກງານຕິດຕໍ່ຫາຜູ້ຮັບກ່ອນຈັດສົ່ງສິນຄ້າ).
                    </div></v-col
                  >
                  <v-col cols="12" class="mt-0 pt-0"
                    ><div>
                      ຕ່າງເເຂວງ ຈະໄດ້ຮັບສິນຄ້າພາຍໃນ 2-3 ມື້
                      (ຄ່າຂົນສົ່ງຊຳລະປາຍທາງ).
                    </div></v-col
                  >
                </v-row>
              </v-card-text>
              <v-divider></v-divider>
            </v-col>

            <v-col cols="12" class="ma-0 pa-0">
              <v-card-title class="d-flex justify-space-between mt-0 pt-0">
                <div class="d-flex">
                  <v-icon>mdi-credit-card-multiple-outline</v-icon>
                  <div style="border: ">ຊ່ອງທາງການຊຳລະເງິນ</div>
                </div>
              </v-card-title>
              <v-card-text class="mt-0 pt-0">
                <v-row class="mt-0 pt-0">
                  <v-col cols="12" sm="6" class="mt-0 pt-0">
                    <div class="d-flex align-center">
                      <v-avatar size="30">
                        <v-img src="/onepay.png"></v-img>
                      </v-avatar>
                      <div class="ml-2">Onepay</div>
                    </div>
                    <div class="d-flex justify-center">
                      <v-img
                        v-ripple
                        src="QR.jpg"
                        max-width="50%"
                        contain
                        @click="openImage = true"
                      ></v-img>
                      <v-dialog v-model="openImage">
                        <v-card>
                          <div class="d-flex justify-end">
                            <v-btn
                              text
                              @click="openImage = false"
                              color="red white--text"
                              >X</v-btn
                            >
                          </div>
                          <div class="d-flex justify-center">
                            <v-img
                              v-ripple
                              src="QR.jpg"
                              max-width="50%"
                              height="auto"
                              contain
                            ></v-img>
                          </div>
                        </v-card>
                      </v-dialog>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <!---------------------------------- profile image user -->
                    <div class="text-center mt-5">
                      <div class="d-flex justify-center">
                        <v-img
                          v-ripple
                          v-if="url"
                          :src="url"
                          max-width="50%"
                          height="auto"
                          contain
                          @click="ImageUplaod = true"
                        ></v-img>
                        <v-img
                          v-else
                          v-repple
                          src="/onepay.png"
                          max-width="50%"
                          height="auto"
                          contain
                          @click="upload"
                        ></v-img>
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
                      <v-btn class="mt-2" color="primary" small @click="upload">
                        <v-icon>mdi-tray-arrow-up</v-icon>
                        ອັດໃບບິນຊ້ຳລະ
                      </v-btn>
                    </div>
                    <!-- --------------------------------dialog --------- -->
                    <v-dialog v-model="ImageUplaod">
                      <v-card>
                        <div class="d-flex justify-end">
                          <v-btn
                            text
                            @click="ImageUplaod = false"
                            color="red white--text"
                            >X</v-btn
                          >
                        </div>
                        <div class="d-flex justify-center">
                          <v-img
                            v-ripple
                            :src="url"
                            max-width="50%"
                            height="auto"
                            contain
                          ></v-img>
                        </div>
                      </v-card>
                    </v-dialog>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-divider></v-divider>
            </v-col>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="green white--text">ຢືນຢັນການຊື້</v-btn>
            </v-card-actions>
            <v-col cols="12"></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'CustomSaleOfSystemMaymaiShopIndex',
  layout: 'empty-layout',

  data() {
    return {
      openImage: false,
      ImageUplaod: false,
      file: null,
      url: null,
    }
  },


  methods: {
    editLocation(to){
      this.$router.push(to)
    },
    editUser(to){
        this.$router.push(to)
    },
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
