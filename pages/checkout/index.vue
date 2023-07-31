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
                  <div>ຜູ້ຮັບ</div>
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
                  <v-col cols="9" class="mt-0 pt-0"
                    ><div>
                      <v-text-field
                        v-model="location.recipient"
                        label="ປ້ອມຊື່ຜູ້ຮັບ"
                        filled
                      ></v-text-field></div
                  ></v-col>
                  <v-col cols="3" class="mt-0 pt-0"><div>ເບີໂທ:</div></v-col>
                  <v-col cols="9" class="mt-0 pt-0">
                    <div>
                      <v-text-field
                        v-model="location.phone"
                        label="ປ້ອມເບີ"
                        filled
                      ></v-text-field></div
                  ></v-col>
                </v-row>
              </v-card-text>
              <v-divider class="mt-0 pt-0"></v-divider>
            </v-col>

            <v-col cols="12" class="mt-0 pt-0">
              <v-card-title class="d-flex justify-space-between mt-0 pt-0">
                <div class="d-flex">
                  <v-icon>mdi-map-marker</v-icon>
                  <div>ທີ່ຢູ່</div>
                </div>
                <div
                  v-repple
                  @click="editLocation('/checkout/editreceive_Address')"
                >
                  <v-icon>mdi-square-edit-outline</v-icon>
                </div>
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="3" class="mt-0 pt-0"><div>ແຂວງ:</div></v-col>
                  <v-col cols="9" class="mt-0 pt-0"
                    ><div>
                      <v-text-field
                        v-model="location.province"
                        label="ປ້ອມຊື່ແຂວງ"
                        filled
                      ></v-text-field></div
                  ></v-col>
                  <v-col cols="3" class="mt-0 pt-0"><div>ເມືອງ:</div></v-col>
                  <v-col cols="9" class="mt-0 pt-0">
                    <div>
                      <v-text-field
                        v-model="location.district"
                        label="ປ້ອມຊື່ເມືອງ"
                        filled
                      ></v-text-field></div
                  ></v-col>
                  <v-col cols="3" class="mt-0 pt-0"><div>ບ້ານ:</div></v-col>
                  <v-col cols="9" class="mt-0 pt-0">
                    <div>
                      <v-text-field
                        v-model="location.village"
                        label="ປ້ອມຊື່ບ້ານ"
                        filled
                      ></v-text-field></div
                  ></v-col>
                  <v-col cols="3" class="mt-0 pt-0"
                    ><div>ບໍລິສັດຂົນສົ່ງ:</div></v-col
                  >
                  <v-col cols="9" class="mt-0 pt-0">
                    <div>
                      <v-text-field
                        v-model="location.address"
                        label="ປ້ອມບໍລິສັດຂົນສົ່ງ"
                        placeholder="ອະນຸສິດ "
                        filled
                      ></v-text-field></div
                  ></v-col>
                  <v-col cols="3" class="mt-0 pt-0"
                    ><div>ສາຂາຂົນສົ່ງ:</div></v-col
                  >
                  <v-col cols="9" class="mt-0 pt-0">
                    <div>
                      <v-text-field
                        v-model="location.express"
                        label="ປ້ອມສາຂາຂົນສົ່ງ"
                        placeholder="ສາຂາດົງໂດກ"
                        filled
                      ></v-text-field></div
                  ></v-col>
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
                              color="red white--text"
                              @click="openImage = false"
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
                        v-if="url"
                          v-ripple
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
                            color="red white--text"
                            @click="ImageUplaod = false"
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
              <v-btn class="green white--text" @click="openDialog()"
                >ຢືນຢັນການຊື້</v-btn
              >
            </v-card-actions>
            <v-col cols="12"></v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
    <!-- __________________________________dialog confirm_______________________ -->
    <v-dialog v-model="showConfirmationDialog" max-width="500">
      <v-card>
        <v-card-title class="headline">ການຢືນຢັນ</v-card-title>
        <v-card-text> ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການສືບຕໍ່ການຊື້? </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="showConfirmationDialog = false"
            >ຍົກເລີກ</v-btn
          >
          <v-btn
            :loading="loading"
            class="green white--text"
            @click="confirmPurchase"
            >ຢືນຢັນສັ່ງຊື້</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'CustomSaleOfSystemMaymaiShopIndex',
  data() {
    return {
      
      loading: false,
      openImage: false,
      ImageUplaod: false,
      file: null,
      url: null,
      showConfirmationDialog: false,
      location: {
        province: null,
        district: null,
        village: null,
        address: null,
        express: null,
        customer_id: null,
        recipient: null,
        phone: null,
      },
      sale_online: {
        customer_id: null,
        promotion_id: null,
        employee_id: null,
        location_id: null,
        payment: null,
        sale_date: null,
        sale_total: null,
        sale_type: 'online',
        sale_status: 'pending',
        sale_quantity: null,
      },
      sale_detail: {
        sale_id: null,
        product_id: null,
        sale_price: null,
        quantity: null,
        color: null,
        size: null,
      },
      cartItems: [],
    }
  },
  computed: {
    TotalQuantity() {
      return this.cartItems.reduce(
        (num, item) => num + parseInt(item.quantity),
        0
      )
    },
    TotalPrice() {
      return this.cartItems.reduce(
        (num, item) => num + item.price * parseInt(item.quantity),
        0
      )
    },
  },
  mounted() {
    this.location.recipient = this.$cookies.get('user') || []
    this.location.phone = this.$cookies.get('phone') || []
    this.location.customer_id = this.$cookies.get('user_id') || []
    this.sale_online.customer_id = this.$cookies.get('user_id') || []
    this.cartItems = this.$cookies.get('listOrder') || []
  },
  methods: {
    openDialog() {
      if (
        !this.location.recipient ||
        !this.location.phone ||
        !this.location.province ||
        !this.location.district ||
        !this.location.village ||
        !this.location.address ||
        !this.location.express
      ) {
        this.$toast.error('ກະລຸນາປ້ອນທີ່ຢູ່ໃຫ້ຄົບກ່ອນຢືນຢັນ!')
        return
      }
      if (!this.file) {
        this.$toast.error('ກະລຸນາເລືອກໃບບິນຊຳລະເງິນກ່ອນຢືນຢັນ!')
        return
      }
      this.showConfirmationDialog = true
    },

    editLocation(to) {
      this.$router.push(to)
    },
    editUser(to) {
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
    // ___________________confirm_______________________
    async confirmPurchase() {
      this.loading = true
      const currentDate = new Date()
      const formattedDate = currentDate.toISOString()
      this.sale_online.sale_date = formattedDate
      this.sale_online.sale_quantity = parseInt(this.TotalQuantity)
      this.sale_online.sale_total = parseInt(this.TotalPrice)
      await this.$axios.post('/location', this.location).then((res) => {
        this.sale_online.location_id = res.data.result.id
      })
      const file = this.file
      const formData = new FormData()
      formData.append('file', file)
      await this.$axios.post('/upload/single', formData).then((res) => {
        this.sale_online.payment = res.data.url
      })
      await this.$axios.post('/sale', this.sale_online).then((res) => {
        this.sale_detail.sale_id = res.data.result.id
      })
      await this.cartItems.map((item) => {
        this.sale_detail.color_size_id = item.id
        this.sale_detail.product_id = item.product_id
        this.sale_detail.color = item.color
        this.sale_detail.size = item.size
        this.sale_detail.quantity = parseInt(item.quantity)
        this.sale_detail.sale_price = parseInt(item.price)
        return this.$axios.post('/saleDetail', this.sale_detail).then((res) => {

        })
      })
      this.$toast.success('ສຳຊື້ສຳເລັດ ຂອບໃຈທີ່ໄວ້ວາງໃຈພວກເຮົາ')
      this.showConfirmationDialog = false
      this.loading = false
      this.$cookies.remove('listOrder')
      this.$router.push('/profile')
    },
  },
}
</script>

<style lang="scss" scoped></style>
