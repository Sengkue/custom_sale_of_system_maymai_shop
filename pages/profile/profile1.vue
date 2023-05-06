// pages/profile.vue

<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-card-title class="headline">Profile</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field  v-model="name"  label="Name"/>
              <v-text-field  v-model="email"  label="Email"/>
              <v-text-field   v-model="password" label="Password" type="password" />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="updateProfile">Update</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    updateProfile() {
      // Perform API call to update profile information
      // Show success or error message to user
    }
  }
}
</script>
