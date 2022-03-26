<template>
  <div :class="containerClass">{{ product.title }}</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Product',
  data() {
    return {
      containerClass: 'product',
    };
  },
  created() {
    const productId = this.$route.params.productId;
    this.setProduct(productId);
  },
  computed: {
    ...mapState(['product']),
  },
  methods: {
    ...mapActions(['setProduct']),
  },
};
</script>

<style lang="scss" scoped>
.product {
  font-size: $font-5xl;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
