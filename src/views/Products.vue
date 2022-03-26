<template>
  <div :class="containerClass">
    <div :class="categoryClass">
      <div :class="categoryTitleClass">{{ category.longTitle }}</div>
    </div>
    <div :class="contentClass">
      <div :class="filterClass">
        <FilterPanel />
      </div>
      <div :class="gridClass">
        <Card @click="goToProduct(product.id)" v-for="(product, index) in products" :key="index">
          <template v-slot:card-image>
            <div :class="imageWrapperClass">
              <img :class="imageClass" :src="product.image" /></div
          ></template>
          <template v-slot:card-details>
            <div :class="detailsClass">
              <div :class="titleClass">{{ product.title }}</div>
              <div :class="priceWrapperClass">
                <span> {{ product.price }} </span>
                <span :class="priceCurrencyClass">
                  {{ product.currency }}
                </span>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Card from '@/common/components/Card.vue';
import FilterPanel from '@/common/components/FilterPanel.vue';

export default {
  name: 'Products',
  components: {
    Card,
    FilterPanel,
  },
  data() {
    return {
      containerClass: 'products',
    };
  },
  created() {
    const categoryId = this.$route.params.categoryId;
    this.setCategory(categoryId);
  },
  computed: {
    ...mapState(['products', 'category']),
    categoryClass() {
      return `${this.containerClass}__category`;
    },
    categoryLineClass() {
      return `${this.categoryClass}__line`;
    },
    categoryTitleClass() {
      return `${this.categoryClass}__title`;
    },
    contentClass() {
      return `${this.containerClass}__content`;
    },
    filterClass() {
      return `${this.contentClass}__filters`;
    },
    gridClass() {
      return `${this.contentClass}__grid`;
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
    ...mapActions(['setCategory']),
    goToProduct(productId) {
      this.$router.push({ name: 'Product', params: { productId } });
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  &__category {
    font-size: $font-large;
    min-width: 300px;
    font-weight: bold;
    word-spacing: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Merriweather', serif;

    @media only screen and (min-width: $mobile) {
      font-size: $font-2xl;
    }

    @media only screen and (min-width: $tablet) {
      font-size: $font-3xl;
    }

    @media only screen and (min-width: $laptop) {
      display: none;
    }
  }

  &__content {
    display: flex;
    justify-content: center;

    &__filters {
      width: 300px;
      margin: 15px;
      display: none;
      justify-content: center;
      align-items: center;
      font-size: $font-3xl;
      font-family: 'Merriweather', serif;
      box-shadow: 3px 0px 4px 3px $color-light-grey;

      @media only screen and (min-width: $laptop) {
        display: flex;
      }
    }

    &__grid {
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
          color: $color-dark-grey;

          &__currency {
            padding-left: 3px;
          }
        }
      }
    }
  }
}
</style>
