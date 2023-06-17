<template>
  <div class="product_benefits">
    <div
      class="product_benefits__divider"
      v-for="(benefit, index) in product.benefits"
      :key="index"
    >
      <div class="product_benefits__divider__title">
        {{ benefit.title }}
      </div>
      <div>
        {{ benefit.description }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Button from '../../common/components/Button.vue';
export default {
  name: 'ProductBenefits',
  components: {
    Button,
  },
  computed: {
    ...mapState(['product']),
  },
};
</script>

<style lang="scss" scoped>
.product_benefits {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: $font-small;
  font-family: 'Merriweather', serif;
  letter-spacing: 0px;
  color: $color-dark-grey;
  font-weight: 200;
  box-shadow: 1px 2px 10px -3px grey;

  &__divider {
    width: 25%;
    margin: 0 30px;
    justify-content: center;
    text-align: center;
    &__title {
      color: black;
      font-weight: bold;
    }
  }
}
</style>
