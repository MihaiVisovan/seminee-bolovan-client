<template>
  <div class="product_info">
    <div class="product_info__title">{{ product.title }}</div>
    <div class="product_info__price">
      <span> {{ product.price }} </span>
      <span class="product_info__price__currency">
        {{ product.currency }}
      </span>
    </div>
    <div class="product_info__wrapper">
      <div class="product_info__content">
        {{ product.power.property }}:
        <span class="product_info__content__value">{{ product.power.value }}</span>
      </div>
      <div class="product_info__content">
        {{ product.glass.property }}:
        <span class="product_info__content__value">{{ product.glass.value }}</span>
      </div>
      <div class="product_info__content">
        {{ product.opening.property }}:
        <span class="product_info__content__value">{{ product.opening.value }}</span>
      </div>
      <div class="product_info__content">
        {{ product.material.property }}:
        <span class="product_info__content__value">{{ product.material.value }}</span>
      </div>
    </div>

    <div class="product_info__cart">
      <div class="product_info__cart__button">
        <Button text="Adaugă în coș"></Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Button from '../../common/components/Button.vue';
export default {
  name: 'ProductInfo',
  components: {
    Button,
  },
  computed: {
    ...mapState(['product']),
  },
};
</script>

<style lang="scss" scoped>
.product_info {
  height: 100%;
  display: flex;
  flex-direction: column;
  letter-spacing: 0.5px;
  font-size: $font-5xl;

  &__title {
    font-weight: 700;
  }

  &__price {
    font-size: $font-4xl;
    font-weight: 600;
    color: $color-darker-grey;

    &__currency {
      padding-left: 10px;
    }
  }

  &__wrapper {
    margin-top: 30px;
  }

  &__content {
    font-family: 'Merriweather', serif;
    letter-spacing: 0px;
    font-size: $font-medium;
    font-weight: 600;

    &__value {
      font-weight: 500;
    }
  }

  &__cart {
    margin-top: 50px;
    &__button {
      width: 50%;
      height: 50px;
    }
  }
}
</style>
