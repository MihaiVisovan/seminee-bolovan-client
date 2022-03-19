<template>
  <div :class="containerClass">
    <div :class="filterClass">Filters</div>
    <div :class="gridClass">
      <Card
        @click="goToProduct(product.details.title)"
        v-for="(product, index) in products"
        :key="index"
      >
        <template v-slot:card-image>
          <div :class="imageWrapperClass">
            <img :src="product.image" :class="imageClass" /></div
        ></template>
        <template v-slot:card-details>
          <div :class="detailsClass">
            <div :class="titleClass">{{ product.details.title }}</div>
            <div :class="priceWrapperClass">
              <span> {{ product.details.price }} </span>
              <span :class="priceCurrencyClass"> {{ product.details.currency }} </span>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Card from '@/common/components/Card.vue';
export default {
  name: 'Products',
  components: {
    Card,
  },
  data() {
    return {
      containerClass: 'products',
    };
  },
  computed: {
    ...mapState(['products']),
    filterClass() {
      return `${this.containerClass}__filter_panel`;
    },
    gridClass() {
      return `${this.containerClass}__grid`;
    },
    imageWrapperClass() {
      return `${this.gridClass}__image_wrapper`;
    },
    imageClass() {
      return `${this.gridClass}__image`;
    },
    detailsClass() {
      return `${this.gridClass}__details`;
    },
    titleClass() {
      return `${this.detailsClass}__title`;
    },
    priceWrapperClass() {
      return `${this.detailsClass}__price`;
    },
    priceCurrencyClass() {
      return `${this.priceWrapperClass}__currency`;
    },
  },
  methods: {
    goToProduct(id) {
      const dashedId = id.toLowerCase().replaceAll(' ', '-');
      this.$router.push({ name: 'Product', params: { productId: dashedId } });
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  padding: 20px 0;

  @media only screen and (min-width: $mobile) {
    padding: 20px;
  }

  &__filter_panel {
    width: 300px;
    margin: 15px 0;
    display: none;
    justify-content: center;
    align-items: center;
    font-size: $font-xxxl;
    font-family: 'Merriweather', serif;
    box-shadow: 3px 0px 4px 3px $color-light-grey;

    @media only screen and (min-width: $laptop) {
      display: flex;
    }
  }

  &__grid {
    flex: 1;
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
        color: $color-dark-grey;

        &__currency {
          padding-left: 3px;
        }
      }
    }
  }
}
</style>
