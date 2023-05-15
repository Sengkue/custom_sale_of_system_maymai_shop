<template>
    <div>
      <div v-if="floating">
        <v-btn
          fab
          dark
          fixed
          bottom
          right
          color="blue"
          :class="$vuetify.breakpoint.xs? 'mr-n4':''"
          href="https://m.me/JustinSengWebdeveloper"
          target="_blank"
          style="bottom: 190px"
        >
          <v-icon size="24">mdi-facebook-messenger</v-icon>
        </v-btn>

        <v-btn
          fab
          dark
          fixed
          bottom
          right
          :class="$vuetify.breakpoint.xs? 'mr-n4':''"
          style="bottom: 130px"
          color="green"
          href="https://wa.me/8562078781525"
          target="_blank"
        >
          <v-icon size="24">mdi-whatsapp</v-icon>
        </v-btn>
      </div>
      <v-btn
          :small="$vuetify.breakpoint.xs"
          :class="$vuetify.breakpoint.xs? 'mr-n4':''"
          fab
          dark
          fixed
          bottom
          right
          class="teal"
          style="bottom: 65px"
          @click="floating = !floating"
          
        >
          <v-icon>{{floating? 'mdi-close':'mdi-chat'}}</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    name: 'CustomSaleOfSystemMaymaiShopIndex',

    data() {
        return {
            floating:false,
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>