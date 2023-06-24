<template>
  <div class="search">
    <ProductsGrid />
  </div>
</template>

<script>
import ProductsGrid from '@/components/products/ProductsGrid.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'SearchComponent',
  components: {
    ProductsGrid,
  },
  created() {
    this.searchProducts();
  },
  computed: {
    ...mapState(['products', 'initialProducts']),
    searchQuery() {
      return this.$route.query.query;
    },
  },
  watch: {
    searchQuery() {
      this.searchProducts();
    },
  },
  methods: {
    ...mapMutations(['setProducts']),
    searchProducts() {
      this.resetProducts();
      if (this.searchQuery) {
        const searchedProducts = this.removeDuplicates(
          this.getProductsByTitle(),
          this.getProductsByAttribute()
        );

        this.setProducts(searchedProducts);
      }
    },
    removeDuplicates(array1, array2) {
      return [array1, array2]
        .flat(2)
        .filter((obj, index, array) => index === array.findIndex(o => o.id === obj.id));
    },
    getProductsByTitle() {
      return this.products.filter(product => {
        return product.title.toLowerCase().includes(this.searchQuery);
      });
    },
    getProductsByAttribute() {
      return this.products.filter(product => {
        const productFound = Object.values(product).find(productValue => {
          if (typeof productValue === 'string') {
            return productValue.toLowerCase().includes(this.searchQuery);
          }
        });
        return Boolean(productFound);
      });
    },
    resetProducts() {
      this.setProducts(this.initialProducts);
    },
  },
};
</script>

<style lang="scss">
.search {
}
</style>
