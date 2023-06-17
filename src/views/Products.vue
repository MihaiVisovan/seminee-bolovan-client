<template>
  <div class="products">
    <div class="products__category">
      <div>{{ category.longTitle }}</div>
    </div>
    <div class="products__content">
      <div class="products__content__sort_filter">
        <div class="products__content__sort_filter__button">
          <Button text="FILTREAZĂ" @click="setShowFilters(true)" />
        </div>
        <div class="products__content__sort_filter__button">
          <Button text="SORTEAZĂ" />
        </div>
      </div>
      <div class="products__content__filters" ref="filters">
        <FilterPanel />
      </div>
      <ProductsGrid />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import Button from '@/common/components/Button.vue';
import FilterPanel from '@/components/filter_panel/FilterPanel.vue';
import ProductsGrid from '@/components/products/ProductsGrid.vue';

export default {
  name: 'Products',
  components: {
    FilterPanel,
    Button,
    ProductsGrid,
  },
  created() {
    const categoryId = this.$route.params.categoryId;
    this.setCategory(categoryId);
  },
  watch: {
    showFilters(newValue) {
      const body = document.getElementsByTagName('body')[0];
      if (newValue) {
        this.$refs.filters.classList.add('products__category__content__filters--visible');
        body.classList.add('products__body');
      } else {
        this.$refs.filters.classList.remove('products__category__content__filters--visible');
        body.classList.remove('products__body');
      }
    },
  },
  computed: {
    ...mapState(['category', 'showFilters']),
    priceCurrencyClass() {
      return `${this.priceWrapperClass}__currency`;
    },
  },
  methods: {
    ...mapMutations(['setShowFilters']),
    ...mapActions(['setCategory']),
  },
};
</script>

<style lang="scss">
.products {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  &__body {
    overflow-y: hidden;

    @media only screen and (min-width: $laptop) {
      overflow-y: auto;
    }
  }

  &__category {
    padding: 10px 0;
    font-size: $font-xl;
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
      margin-top: 30px;
      margin-bottom: 10px;

      &__button {
        width: 100%;
        margin: 0 15px;
        height: 40px;
      }

      @media only screen and (min-width: $laptop) {
        display: none;
      }
    }

    &__filters {
      height: 100%;
      width: 100%;
      font-size: $font-small;
      font-family: 'Merriweather', serif;
      font-weight: 400;
      box-shadow: 2px 2px 3px 2px $color-light-grey;
      position: fixed;
      top: 0;
      left: 0;
      background: white;
      display: none;

      &--visible {
        display: block;
      }

      @media only screen and (min-width: $laptop) {
        display: block;
        margin: 15px;
        position: unset;
        width: 300px;
        font-size: $font-medium;
        background: none;
      }
    }
  }
}
</style>
