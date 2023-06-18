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
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: $font-small;
  font-family: 'Merriweather', serif;
  letter-spacing: 0px;
  color: $color-dark-grey;
  font-weight: 200;
  box-shadow: 1px 2px 10px -3px grey;

  @media only screen and (min-width: $tablet) {
    flex-direction: row;
    padding: 0;
  }

  &__divider {
    width: 100%;
    margin: 0 30px;
    padding: 10px 30px;
    justify-content: center;
    text-align: left;

    @media only screen and (min-width: $tablet) {
      padding: 20px 0px;
      width: 25%;
      text-align: center;
    }

    &__title {
      color: black;
      font-weight: bold;
    }
  }
}
</style>
