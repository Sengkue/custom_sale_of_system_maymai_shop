<template>
  <div>
    <div v-if="$vuetify.breakpoint.xs">
      <v-app-bar fixed app>
        <div v-ripple @click="back('/checkout')">
          <v-icon>mdi-arrow-left-circle</v-icon>
        </div>
        <v-spacer />
        <h3 class="ml-n5">ແກ້ໄຂຜູ້ຮັບ</h3>
        <v-spacer />
      </v-app-bar>
    </div>
    <LayoutsNavbarDesktop />
    <v-btn v-if="!$vuetify.breakpoint.xs" fixed class="error mb-10" to="/checkout"><v-icon>mdi-arrow-left-circle</v-icon>back</v-btn>
    <v-container>
      <div class="pt-16 mt-n2 pb-5" style="border-bottom: 1px solid black;">
      <v-row >
        <v-col cols="12" sm="6" class="my-0 py-0">
          <v-text-field 
          v-model="userName"
            outlined
            label="ຊື່ຜູ້ຮັບ"
            placeholder="ທ ເຊັງວ່າງ"
            persistent-placeholder
            clearable
            prepend-inner-icon="mdi-account"
            dense
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="6" class="my-0 py-0">
          <v-text-field
          v-model="number"
            outlined
            label="ເບີໂທ"
            persistent-placeholder
            placeholder="02078781525"

            clearable
            prepend-inner-icon="mdi-cellphone-marker"
            dense
          >
          </v-text-field>
        </v-col>
        <v-col cols="12">
          <v-col cols="12">
            <v-btn   class="green white--text mt-n5" small @click="setDefault()">
              ຕັ້ງເປັນຄ່າເລີ່ມຕົ້ນ
            </v-btn>
            <div>ຂໍ້ມູນຈາກບັນຊີ:</div> <div class="blue--text">( Seng kue vang / +8562078781525)</div>
          </v-col>
          <v-card-actions>
            <v-btn color="error" @click="reset()">ຍົກເລີກ</v-btn>
            <v-btn color="primary" @click="save()">ບັນທືກ</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'CustomSaleOfSystemMaymaiShopEditreceive',
  layout: 'nothing',

  data() {
    return {
      userName:'',
      number:'',
    }
  },
  computed: {
    isValid() {
      return this.userName.trim() !== '' && this.number.trim() !== '';
    },
  },
  mounted() {},

  methods: {
    save() {
      if (this.isValid) {
        this.$toast.success('ການເພີ່ມຂໍ້ມູນຂອງທ່ານສຳເລັດ!')

      } else {
        this.$toast.error('ປ້ອມຂໍ້ມູນໃຫ້ຄົບກ່ອນ!')

      }
    },
    reset(){
      this.userName = "";
      this.number = "";
    },
    setDefault(){
      this.userName = "seng kue vang";
      this.number = "2078781525";

    },
    back(to) {
      this.$router.push(to)
    },
  },
}
</script>

<style lang="scss" scoped></style>
