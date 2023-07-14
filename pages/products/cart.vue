<template>
  <div>
    <cart-desktop-cart v-if="!$vuetify.breakpoint.xs"/>
    <cart-mobile-cart v-if="$vuetify.breakpoint.xs"/>
  </div>
</template>

<script>
export default {
  name: 'CustomSaleOfSystemMaymaiShopCart',
  middleware: 'auth',
  data() {
    return {
      
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