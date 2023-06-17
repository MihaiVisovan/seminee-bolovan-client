<template>
  <div class="products_grid">
    <Card @click="goToProduct(product.id)" v-for="(product, index) in productsState" :key="index">
      <template v-slot:card-image>
        <div class="products_grid__image_wrapper">
          <img class="products_grid__image" :src="product?.images[0]" />
        </div>
      </template>
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
  data: () => ({
    productsState: [],
  }),
  created() {
    this.resetProducts();
  },
  computed: {
    ...mapState(['products', 'filters']),
    filterPairs() {
      const filterPairs = this.filters
        .map(filter => {
          // filter the selected options and grab their ids
          const optionIds = filter.options
            .filter(option => option.selected)
            .map(option => option.id);

          const filterPair = {
            id: filter.id,
            options: optionIds,
          };

          return filterPair;
        })
        .filter(filter => filter.options.length);
      return filterPairs;
    },
  },
  watch: {
    filterPairs(newVal) {
      if (newVal.length >= 1) {
        this.filterProducts(newVal);
      } else {
        this.resetProducts();
      }
    },
  },
  methods: {
    goToProduct(productId) {
      this.$router.push({ name: 'Product', params: { productId } });
    },
    filterProducts(newVal) {
      this.productsState = this.products.filter(product => {
        let meetsFilterCondition = true;
        newVal.forEach(filter => {
          // grab the value of the filter id

          const value = product[filter.id].value;

          // if the product value is not included in any of the selected
          // filters, don't show it
          if (!filter.options.includes(value)) {
            meetsFilterCondition = false;
          }
        });
        return meetsFilterCondition;
      });
    },
    resetProducts() {
      this.productsState = [...this.products];
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
  align-content: flex-start;

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
