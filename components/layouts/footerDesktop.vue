<template>
    <div v-if="!$vuetify.breakpoint.xs">
        <v-footer> </v-footer>
    </div>
</template>

<script>
export default {
    name: 'CustomSaleOfSystemMaymaiShopFooterDesktop',

    data() {
        return {
            cartItems:[]
        };
    },

    mounted() {
        this.getCartItem()
    },

    methods: {
        getCartItem() {
      this.cartItems = this.$cookies.get('listOrder') || []
    },
    },
};
</script>

<style lang="scss" scoped>

</style>