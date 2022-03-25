<template>
  <div :class="containerClass">
    <div :class="categoryClass">
      <span :class="categoryLineClass"></span>
      <div>{{ category.longTitle }}</div>
      <span :class="categoryLineClass"></span>
    </div>
    <div :class="contentClass">
      <div :class="filterClass">Filters</div>
      <div :class="gridClass">
        <Card @click="goToProduct(product.id)" v-for="(product, index) in products" :key="index">
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
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
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
    contentClass() {
      return `${this.containerClass}__content`;
    },
    filterClass() {
      return `${this.contentClass}__filter_panel`;
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
    font-size: $font-2xl;
    min-width: 300px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    word-spacing: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    &__line {
      width: 15px;
      margin: 0 5px;
      border: 1px solid black;
      border-radius: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media only screen and (min-width: $mobile) {
      font-size: $font-4xl;

      &__line {
        width: 20px;
        margin: 0 10px;
        border-width: 2px;
      }
    }

    @media only screen and (min-width: $tablet) {
      font-size: $font-5xl;

      &__line {
        width: 30px;
        margin: 0 15px;
      }
    }
  }

  &__content {
    display: flex;
    justify-content: center;

    &__filter_panel {
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
}
</style>
