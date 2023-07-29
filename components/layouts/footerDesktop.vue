<template>
  <div v-if="!$vuetify.breakpoint.xs">
    <v-footer class="teal mt-5 white--text">
      <v-row class="pa-5">
        <v-col cols="4">
          <v-row>
            <v-col cols="12"><h3>ເວລາເປີດຮັານ</h3></v-col>
            <v-col cols="12">
              <div>ວັນຈັນ.....7:00 - 22:00</div>
              <div>ວັນອັງຄານ.....7:00 - 22:00</div>
              <div>ວັນພຸດ.....7:00 - 22:00</div>
              <div>ວັນພະຫັດ.....7:00 - 22:00</div>
              <div>ວັນສຸກ.....7:00 - 22:00</div>
              <div>ວັນເສົາ.....7:00 - 22:00</div>
              <div>ວັນອາທິດ.....7:00 - 22:00</div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4">
          <v-row>
            <v-col cols="12"><h3>ສະຖານທີຕ້້ງ</h3></v-col>
            <v-col cols="12">
              <div>ສະຖານທີຕ້້ງ</div>
              <div>ບ້ານ ດົງໂດກ</div>
              <div>ເມືອງ ໄຊທະນີ</div>
              <div>ແຂວງ ນະຄອນຫຼວງ</div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4">
          <v-row>
            <v-col cols="12"><h3>ຊ່ອງທາງຕິດຕໍ່</h3></v-col>
            <v-col cols="12">
              <div>ເບີ 02078781525</div>
              <div>ອີເມວ: maymai1990@gmail.com</div>
              <div>ສື່ມວນຊົນສັງຄົມ</div>
              <div class="d-flex flex-wrap">
                <v-btn small class="primary ma-1"><v-icon>mdi-facebook</v-icon>  facebook</v-btn>
                <v-btn small class="error ma-1"><v-icon>mdi-youtube</v-icon> YouTube</v-btn>
              </div>
              <div class="d-flex flex-wrap">
                <v-btn small class="success ma-1"><v-icon>mdi-whatsapp</v-icon> WhatsApp</v-btn>
                <v-btn small class="black white--text ma-1">TikTok</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'CustomSaleOfSystemMaymaiShopFooterDesktop',

  data() {
    return {
      cartItems: [],
    }
  },

  mounted() {
    this.getCartItem()
  },

  methods: {
    getCartItem() {
      this.cartItems = this.$cookies.get('listOrder') || []
    },
  },
}
</script>

<style lang="scss" scoped></style>
