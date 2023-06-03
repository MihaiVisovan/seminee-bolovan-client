<template>
  <div class="products_grid">
    <Card @click="goToProduct(product.id)" v-for="(product, index) in products" :key="index">
      <template v-slot:card-image>
        <div class="products_grid__image_wrapper">
          <img class="products_grid__image" :src="product?.images[0]" /></div
      ></template>
      <template v-slot:card-details>
        <div class="products_grid__details">
          <div class="products_grid__details__title">
            {{ product.title }}
          </div>
          <div class="products_grid__details__price">
            <span> {{ product.price }} </span>
            <span class="products_grid__details__price__currency">
              {{ product.currency }}
            </span>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Card from '@/common/components/Card.vue';

export default {
  name: 'ProductsGrid',
  components: { Card },
  computed: {
    ...mapState(['products']),
  },
  methods: {
    goToProduct(productId) {
      this.$router.push({ name: 'Product', params: { productId } });
    },
  },
};
</script>

<style lang="scss" scoped>
.products_grid {
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;

  @media only screen and (min-width: $mobile) {
    justify-content: flex-start;
  }

  &__image_wrapper {
    height: 200px;
  }

  &__image {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  &__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    letter-spacing: 0.5px;

    &__title {
      font-weight: 700;
      font-size: $font-large;
    }

    &__price {
      font-weight: 600;
      font-size: $font-medium;
      color: $color-darker-grey;

      &__currency {
        padding-left: 3px;
      }
    }
  }
}
</style>
