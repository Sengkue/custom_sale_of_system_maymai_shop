<template>
  <div>
    <div class="row row-sm">
      <div class="col-lg-4 mb-n12">
        <div class="card mg-b-20">
          <div class="card-body">
            <div class="ps-0">
              <div class="main-profile-overview">
                <div class="main-img-user profile-user">
                  <img
                    v-if="getProfile.c_profile"
                    alt=""
                    :src="getProfile.c_profile"
                  /><a
                    class="fas fa-camera profile-edit"
                    href="JavaScript:void(0);"
                  ></a>
                  <img v-if="!getProfile.c_profile" alt="" src="seng.jpg" /><a
                    class="fas fa-camera profile-edit"
                    href="JavaScript:void(0);"
                  ></a>
                </div>
                <div class="d-flex justify-content-between mg-b-20">
                  <div>
                    <h5 class="main-profile-name">{{ getProfile.c_fname }}</h5>
                    <!-- <p class="main-profile-name-text">vip</p> -->
                  </div>
                </div>
                <!-- <h6>Address</h6> -->
                <!-- <div class="main-profile-bio">
                  Live Thongmany village, Pakkading district, Bolikhansay
                  province, Phone number is +20 78781525, the language
                  discussion is Laos...
                </div> -->
                <hr />
                <v-list nav dense>
                  <v-list-item-group>
                    <v-list-item
                      v-for="item in items"
                      :key="item.i"
                      :to="item.to"
                    >
                      <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                      </v-list-item-icon>

                      <v-list-item-content>
                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="logout">
                      <v-list-item-icon>
                        <v-icon>mdi-logout</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Logout</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </div>
              <!-- main-profile-overview -->
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card">
          <div class="card-body">
            <div class="tabs-menu">
              <!-- Tabs -->
              <ul class="nav nav-tabs profile navtab-custom panel-tabs">
                <li class="">
                  <a
                    href="#home"
                    data-bs-toggle="tab"
                    class="active"
                    aria-expanded="true"
                  >
                    <span class="visible-xs"
                      ><i class="las la-user-circle tx-16 me-1"></i
                    ></span>
                    <span class="hidden-xs">ລາຍການລໍຖ້າຈັດສົ່ງ</span>
                  </a>
                </li>
                <li class="">
                  <a
                    href="#settings"
                    data-bs-toggle="tab"
                    aria-expanded="false"
                  >
                    <span class="visible-xs"
                      ><i class="las la-cog tx-16 me-1"></i
                    ></span>
                    <span class="hidden-xs">ປະຫວັດຈັດສົ່ງສຳເລັດ</span>
                  </a>
                </li>
              </ul>
            </div>
            <div
              class="tab-content border-start border-bottom border-right border-top-0 p-4 br-dark"
            >
              <div id="home" class="tab-pane active">
                <v-data-table :headers="headerPending" :items="salesData">
                  <template #[`item.sale_total`]="{ value }">
                    {{ currency(value) }}
                  </template>
                  <template #[`item.sale_date`]="{ value }">
                    {{ formatDateBill(value) }}
                  </template>
                  <template #[`item.sale_status`]="{ value }">
                    <div v-if="value === 'pending'" class="red--text">
                      ລໍຖ້າຈັດສົ່ງ...
                    </div>
                  </template>
                  <template #[`item.actions`]="{ item }">
                    <div>
                      <v-btn text small @click="review(item.id)"
                        ><v-icon>mdi-eye</v-icon></v-btn
                      >
                    </div>
                  </template>
                </v-data-table>
              </div>
              <div id="settings" class="tab-pane">
                <v-data-table :headers="headerPending" :items="salesCompleted">
                  <template #[`item.sale_total`]="{ value }">
                    {{ currency(value) }}
                  </template>
                  <template #[`item.sale_date`]="{ value }">
                    {{ formatDateBill(value) }}
                  </template>
                  <template #[`item.sale_status`]="{ value }">
                    <div v-if="value !== 'pending'" class="red--text">
                      ຈັດສົ່ງສຳເລັດ
                    </div>
                  </template>
                  <template #[`item.actions`]="{item}">
                    <div>
                      <v-btn text small @click="review(item.id)"
                        ><v-icon>mdi-eye</v-icon></v-btn
                      >
                    </div>
                  </template>
                </v-data-table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <v-dialog v-model="dialog" max-width="800">
                <!-- _______________________________table show details_____________________________ -->
                <div v-if="getDetail">
          <v-data-table :headers="newdetailHeader" :items="getDetail">
            <template #[`item.profile`]="{ value }">
              <v-icon v-if="!value" color="primary" large
                >mdi-file-image-remove</v-icon
              >
              <v-img v-else :src="value" width="50" height="50"></v-img>
            </template>
            <template #[`items.`]>
              <div>
                
              </div>
            </template>
            <template #top>
              <div class="d-flex align-center justify-space-between">
                <div>
                  <h3 class="mb-0">ລາຍລະອຽດການສັ່ງຊື້</h3>
                </div>
                <div class="d-flex align-center justify-space-between">
                  <v-tooltip top>
                    <template #activator="{ on }">
                      <v-btn
                      text
                        class="red white--text"
                        v-on="on"
                        @click="dialog = false"
                      >
                       <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </template>
                    <span>ປິດ</span>
                  </v-tooltip>
                </div>
              </div>
            </template>
            <template #[`item.total`]="{ item }">
              {{ item.sale_price * item.quantity }}
            </template>
          </v-data-table>
        </div>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomSaleOfSystemMaymaiShopIndex',
  middleware: 'auth',
  data() {
    return {
      items: [{ text: 'My Favourite', icon: 'mdi-cart-heart' }],
      headerPending: [
        { text: 'ໃບບິນສັ່ງຊື້', value: 'id' },
        { text: 'ຊື່ລູກຄ້າ', value: 'customerName' },
        { text: 'ລາຄາສັ່ງຊື້ທັງໝົດ', value: 'sale_total' },
        { text: 'ວັນທີສັ່ງຊື້', value: 'sale_date' },
        { text: 'ສະຖານະ', value: 'sale_status' },
        { text: 'ເບິ່ງ', value: 'actions' },
      ],
      salesData: [],
      salesCompleted: [],
      newdetailHeader: [
        { text: 'ລໍາດັບ', value: 'index' },
        {
          text: 'ຮູບ',
          align: 'center',
          sortable: false,
          value: 'profile',
        },
        { text: 'ຊື່ສິນຄ້າ', value: 'productName' },
        { text: 'ປະເພດ', value: 'productName' },
        { text: 'ສີ', value: 'color' },
        { text: 'ຂະໜາດ', value: 'size_id' },
        { text: 'ຈໍານວນ', value: 'quantity' },
        { text: 'ລາຄາ(ກິບ)', value: 'sale_price' },
        { text: 'ລາຄາລວມ(ກິບ)', value: 'total' },
      ],
      loading:false,
      getDetail:[],
      dialog:false
    }
  },
  computed: {
    getProfile() {
      return this.$store.state.user.profile
    },
  },
  mounted() {
    this.$store.dispatch('user/selectProfile', this.$cookies.get('user_id'))
    this.fetchSalesData()
    this.completedSale()
  },

  methods: {
    review(id) {
      this.dialog = true
      this.$axios
        .get(`/saleDetail/sale/${id}`)
        .then((data) => {
          this.getDetail = data.data.result.map((item, index)=>{
            return { index: index + 1,...item}
          })
        })
        .catch((error) => {
          this.$toast.error('ບໍ່ມີຂໍ້ມູນ!', error)
          this.getDetail = []
        })
    },
    async fetchSalesData() {
      const apiUrl = `http://localhost:8080/sale/online/pending/${this.$cookies.get(
        'user_id'
      )}`
      try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        this.salesData = data.result
      } catch (error) {
        console.error('Error fetching sales data:', error)
      }
    },
    async completedSale() {
      const apiUrl = `http://localhost:8080/sale/online/completed/${this.$cookies.get(
        'user_id'
      )}`
      try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        this.salesCompleted = data.result
      } catch (error) {
        console.error('Error fetching sales data:', error)
      }
    },
    logout() {
      this.$cookies.remove('token')
      this.$router.push('login')
    },
  },
}
</script>

<style lang="scss" scoped></style>
