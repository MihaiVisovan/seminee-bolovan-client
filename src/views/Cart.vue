<template>
  <div :class="containerClass">CART</div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      containerClass: 'cart',
    };
  },
};
</script>

<style lang="scss" scoped>
.cart {
  font-size: $font-5xl;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
