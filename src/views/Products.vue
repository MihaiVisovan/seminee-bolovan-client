<template>
  <div :class="containerClass">
    <div :class="categoryClass">
      <div :class="categoryTitleClass">{{ category.longTitle }}</div>
    </div>
    <div :class="contentClass">
      <div :class="sortFilterWrapperClass">
        <div @click="renderFilters()" :class="sortFilterButtonClass">FILTREAZĂ</div>
        <div :class="sortFilterButtonClass">SORTEAZĂ</div>
      </div>
      <div :class="filtersClass" ref="filters" @click.prevent="hideFilters()">
        <FilterPanel />
      </div>
      <div :class="gridClass">
        <Card @click="goToProduct(product.id)" v-for="product in products">
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
import FilterPanel from '@/components/filter_panel/FilterPanel.vue';

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
    sortFilterWrapperClass() {
      return `${this.contentClass}__sort_filter`;
    },
    sortFilterButtonClass() {
      return `${this.sortFilterWrapperClass}__button`;
    },
    filtersClass() {
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
    renderFilters() {
      this.$refs.filters.style = 'display: block';
    },
    hideFilters() {
      this.$refs.filters.style = 'display: none';
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
    padding: 10px 0;
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
    flex-direction: column;

    @media only screen and (min-width: $laptop) {
      flex-direction: row;
    }

    &__sort_filter {
      display: flex;
      flex-direction: row;
      margin: 15px 0;

      &__button {
        font-size: $font-small;
        font-family: 'Merriweather', serif;
        letter-spacing: 1px;
        font-weight: 400;
        box-shadow: 0px 0px 3px 3px $color-light-grey;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        margin: 0 15px;
        width: 100%;
        cursor: pointer;
        color: white;
        background: black;
        font-weight: bold;

        &:hover {
          color: black;
          background: white;
        }
      }

      @media only screen and (min-width: $laptop) {
        display: none;
      }
    }

    &__filters {
      font-size: $font-small;
      font-family: 'Merriweather', serif;
      font-weight: 400;
      box-shadow: 2px 2px 3px 2px $color-light-grey;
      position: absolute;
      top: 0;
      left: 0;
      background: white;
      width: 100%;
      height: 100%;
      display: none;

      @media only screen and (min-width: $laptop) {
        display: block;
        margin: 15px;
        position: unset;
        width: 300px;
        font-size: $font-medium;
        background: none;
        height: unset;
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
