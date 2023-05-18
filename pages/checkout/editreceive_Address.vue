<template>
  <div>
    <!-- navbar -->
    <div v-if="$vuetify.breakpoint.xs">
      <v-app-bar fixed app>
        <div v-ripple @click="back('/checkout')">
          <v-icon>mdi-arrow-left-circle</v-icon>
        </div>
        <v-spacer />
        <h3 class="ml-n5">ແກ້ໄຂທີ່ຢູ່</h3>
        <v-spacer />
      </v-app-bar>
    </div>
    <LayoutsNavbarDesktop />
    <!-- button back -->
    <v-btn
      v-if="!$vuetify.breakpoint.xs"
      fixed
      class="error mb-10"
      to="/checkout"
      ><v-icon>mdi-arrow-left-circle</v-icon>back</v-btn
    >
    <!-- button add for app -->
    <v-btn
      v-if="$vuetify.breakpoint.xs"
      large
      fab
      fixed
      right
      bottom
      class="error mb-16"
     @click="addAddress()"
      ><v-icon>mdi-plus</v-icon></v-btn
    >
    <v-container>
      <div :class="$vuetify.breakpoint.xs? ' ':'   pt-16 mt-n2 pb-5'" style="border-bottom: 1px solid black">
        <!-- navbar second for desktop -->
        <v-row v-if="!$vuetify.breakpoint.xs">
          <v-col cols="12" class="teal d-flex align-center">
            <div class="white--text">ແກ້ໄຂທີ່ຢູ່</div>
            <v-spacer />
            <div class="white--text">
              <v-btn
                ><v-icon>mdi-plus-box</v-icon
                ><span>ເພີ່ມຂໍ້ມູນທີ່ຢູ່ໃໝ່</span></v-btn
              >
            </div>
          </v-col>
        </v-row>

        <v-row v-if="openEdit">
          <v-col
            cols="12"
            class="d-flex justify-space-between align-center px-0"
          >
            <div class="d-flex align-center">
              <v-checkbox v-model="checkbox1"></v-checkbox>
              <h3>ທີ່ຢູ່ຂົມສົ່ງ</h3>
            </div>
            <div v-ripple @click="editUser('/checkout/editreceive')">
              <v-icon>mdi-square-edit-outline</v-icon>
            </div>
          </v-col>
          <v-card-text class="mt-n5">
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
        </v-row>
        <v-divider></v-divider>
        <v-row v-if="openEdit">
          <v-col
            cols="12"
            class="d-flex justify-space-between align-center px-0"
          >
            <div class="d-flex align-center">
              <v-checkbox v-model="checkbox"></v-checkbox>
              <h3>ທີ່ຢູ່ຂົມສົ່ງ</h3>
            </div>
            <div v-ripple @click="editUser('/checkout/editreceive')">
              <v-icon>mdi-square-edit-outline</v-icon>
            </div>
          </v-col>
          <v-card-text class="mt-n5">
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
        </v-row>

        <!-- Add address -->
        <v-row v-if="!openEdit">
          <v-col cols="12" sm="6" class="my-0 py-0">
            <v-text-field
              v-model="userName"
              outlined
              label="ແຂວງ"
              placeholder="ຕົວຢ່າງ: ບໍລິຄ່າໄຊ"
              persistent-placeholder
              clearable
              prepend-inner-icon="mdi-home"
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
              prepend-inner-icon="mdi-home"
              dense
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="my-0 py-0">
            <v-text-field
              v-model="userName"
              outlined
              label="ຊື່ຜູ້ຮັບ"
              placeholder="ທ ເຊັງວ່າງ"
              persistent-placeholder
              clearable
              prepend-inner-icon="mdi-home"
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
              prepend-inner-icon="mdi-home"
              dense
            >
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-card-actions :class="! $vuetify.breakpoint.xs? '':'justify-center'">
              <v-btn color="error" @click="reset()" width="150">ຍົກເລີກ</v-btn>
              <v-btn color="primary" @click="save()" width="150">ບັນທືກ</v-btn>
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
      userName: '',
      number: '',
      checkbox1: true,
      checkbox: true,
      openEdit:true,
    }
  },

  mounted() {},

  methods: {
    addAddress(){
        this.openEdit = !this.openEdit;
    },
    save() {},
    reset() {
      this.userName = ''
      this.number = ''
    },
    setDefault() {
      this.userName = 'seng kue vang'
      this.number = '2078781525'
    },
    back(to) {
      this.$router.push(to)
    },
  },
}
</script>

<style lang="scss" scoped></style>
