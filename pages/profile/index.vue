<template>
  <div>
    <div class="row row-sm">
      <div class="col-lg-4 mb-n12">
        <div class="card mg-b-20">
          <div class="card-body">
            <div class="ps-0">
              <div class="main-profile-overview">
                <div class="main-img-user profile-user">
                  <img alt="" src="seng.jpg" /><a
                    class="fas fa-camera profile-edit"
                    href="JavaScript:void(0);"
                  ></a>
                </div>
                <div class="d-flex justify-content-between mg-b-20">
                  <div>
                    <h5 class="main-profile-name">Sengkuevang</h5>
                    <p class="main-profile-name-text">vip</p>
                  </div>
                </div>
                <h6>Address</h6>
                <div class="main-profile-bio">
                  Live Thongmany village, Pakkading district, Bolikhansay
                  province, Phone number is +20 78781525, the language
                  discussion is Laos...
                </div>
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
                    <span class="hidden-xs">Edit profile</span>
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
                    <span class="hidden-xs">SETTINGS</span>
                  </a>
                </li>
              </ul>
            </div>
            <div
              class="tab-content border-start border-bottom border-right border-top-0 p-4 br-dark"
            >
              <div class="tab-pane active" id="home">
                <div class="card-body">
                  <div class="mb-4 main-content-label">
                    Personal Information
                  </div>
                  <form class="form-horizontal">
                    <div class="form-group">
                      <div class="row">
                        <div class="col-md-3">
                          <label class="form-label">Language</label>
                        </div>
                        <div class="col-md-9">
                          <select class="form-control select2">
                            <option>Lao</option>
                            <option>Hmong</option>
                            <option>Thai</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div class="mb-4 main-content-label">ADDRESS</div>
                    <div class="form-group">
                      <div class="row">
                        <div class="col-md-3">
                          <label class="form-label">Province</label>
                        </div>
                        <div class="col-md-9">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Province"
                            value="Bolikhamsay"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="row">
                        <div class="col-md-3">
                          <label class="form-label">District</label>
                        </div>
                        <div class="col-md-9">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="District"
                            value="Pakkading"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="row">
                        <div class="col-md-3">
                          <label class="form-label">Village</label>
                        </div>
                        <div class="col-md-9">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Village"
                            value="thongnamy"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="row">
                        <div class="col-md-3">
                          <label class="form-label">Phone</label>
                        </div>
                        <div class="col-md-9">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="phone number"
                            value="+20 78781525"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="row">
                        <div class="col-md-3">
                          <label class="form-label">Address</label>
                        </div>
                        <div class="col-md-9">
                          <textarea
                            class="form-control"
                            name="example-textarea-input"
                            rows="2"
                            placeholder="Address"
                          >
ສາມາດຂົນສົ່ງໄດ້ທາງໃດຂຽງໃສໄດ້ນີ້ເລີຍເຈົ້າ</textarea
                          >
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="card-footer">
                  <button
                    type="submit"
                    class="btn btn-primary waves-effect waves-light"
                  >
                    Update Profile
                  </button>
                </div>
              </div>
              <div class="tab-pane" id="settings">
                <form role="form">
                  <div class="form-group">
                    <label for="FullName">Full Name</label>
                    <input
                      type="text"
                      value="ເຊັງວ່າງ"
                      id="FullName"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="Email">Email</label>
                    <input
                      type="email"
                      value="Sengkuevang@gmail.com"
                      id="Email"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="Username">Username</label>
                    <input
                      type="text"
                      value="sengkuevang"
                      id="Username"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="Password">Password</label>
                    <input
                      type="password"
                      placeholder="6 - 15 Characters"
                      id="Password"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group">
                    <label for="RePassword">Re-Password</label>
                    <input
                      type="password"
                      placeholder="6 - 15 Characters"
                      id="RePassword"
                      class="form-control"
                    />
                  </div>
                  <button
                    class="btn btn-primary waves-effect waves-light w-md"
                    type="submit"
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomSaleOfSystemMaymaiShopIndex',

  data() {
    return {
      items: [{ text: 'My Favourite', icon: 'mdi-cart-heart' }],
    }
  },

  mounted() {},

  methods: {
    logout() {
      this.$cookies.remove('token')
      this.$router.push('login')
    },
  },
}
</script>

<style lang="scss" scoped></style>
