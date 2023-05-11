<template>
    <div>
      <div v-if="!$vuetify.breakpoint.xs">
        <v-row class="justify-center">
          <v-col cols="12" sm="4" class="ma-0 pa-0">
            <v-card class="mx-auto" width="256" tile>
              <v-navigation-drawer permanent>
                <v-system-bar></v-system-bar>
                <v-list>
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-img src="image/sengkuevang.jpg"></v-img>
                    </v-list-item-avatar>
                  </v-list-item>
  
                  <v-list-item link>
                    <v-list-item-content>
                      <v-list-item-title class="text-h6">
                        Seng
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >Justingseng@gmail.com</v-list-item-subtitle
                      >
                    </v-list-item-content>
  
                    <v-list-item-action>
                      <v-icon>mdi-menu-down</v-icon>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list nav dense>
                  <v-list-item-group v-model="selectedItem" color="primary">
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
              </v-navigation-drawer>
            </v-card>
          </v-col>
          <v-col cols="12" sm="8" class="ma-0 pa-0">
            <v-card class="pa-5">
              <h1>profile</h1>
              <v-divider></v-divider>
              <v-row>
                <v-col cols="4">
                  <div class="text-right pt-3"><h3>Your Image:</h3></div>
                </v-col>
                <v-col cols="8">
                  <div class="text-left align-center">
                    <v-avatar><v-img src="image/sengkuevang.jpg"></v-img></v-avatar>
                  </div>
                </v-col>
                <v-col cols="4">
                  <div class="text-right align-center"><h3>User</h3></div>
                </v-col>
                <v-col cols="8">
                  <div class="text-left align-center">
                    <h3>+8562078781525</h3>
                  </div>
                </v-col>
                <v-col cols="4">
                  <div class="text-right align-center">
                    <h3>First name:</h3>
                  </div>
                </v-col>
                <v-col cols="8">
                  <div class="text-left align-center">
                    <v-text-field
                      outlined
                      dense
                      placeholder="first name"
                      hide-details="auto"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="4">
                  <div class="text-right align-center"><h3>Last name:</h3></div>
                </v-col>
                <v-col cols="8">
                  <div class="text-left align-center">
                    <v-text-field
                      outlined
                      dense
                      placeholder="last name"
                      hide-details="auto"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="4">
                  <div class="text-right align-center"><h3>Phone:</h3></div>
                </v-col>
                <v-col cols="8">
                  <div class="text-left align-center">
                    <v-text-field
                      outlined
                      dense
                      placeholder="phone"
                      hide-details="auto"
                    ></v-text-field>
                  </div>
                </v-col>
                <v-col cols="4">
                  <div class="text-right align-center">
                    <v-btn color="error">save</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
  
      <!-- mobile screeen --------------------------------- -->
      <div v-else>
        <v-row class="first-background" style="height: 25vh">
          <v-col cols="12">
           <div class="text-center align-center">
                <v-avatar class="mx-auto" size="90" >
                  <v-img src="image/sengkuevang.jpg"></v-img>
                </v-avatar>
                <div>Sengkuevang</div>
              </div>
          </v-col>
        </v-row>
        <v-row style="height: 75vh">
          <v-col cols="12">
  
  
  
  
                <v-list nav dense>
                  <v-list-item-group v-model="selectedItem">
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
  
  
  
          </v-col>
        </v-row>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EcommerceLandingProfile',
    data() {
      return {
        selectedItem: 0,
        items: [
          { text: 'My Files', icon: 'mdi-folder', to: '' },
          { text: 'My Favourite', icon: 'mdi-cart-heart' },
          { text: 'Starred', icon: 'mdi-star' },
          { text: 'Recent', icon: 'mdi-history' },
          { text: 'Offline', icon: 'mdi-check-circle' },
        ],
      }
    },
    mounted() {
      this.$store.dispatch('user/selectProfile')
    },
    methods: {
      logout() {
        this.$cookies.remove('token')
        this.$cookies.remove('user')
        this.$router.push('/')
      },
    },
  }
  </script>
  
  <style lang="scss" scoped>
  .first-background {
    background-color: rgb(255, 0, 0);
  }
  .second-background {
    background-color: rgb(72, 0, 255);
  }
  </style>