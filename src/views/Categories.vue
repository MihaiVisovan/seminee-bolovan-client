<template>
  <div class="categories">
    <CategoriesGrid />
  </div>
</template>

<script>
import CategoriesGrid from '@/views/CategoriesGrid.vue';

export default {
  name: 'Categories',
  components: {
    CategoriesGrid,
  },
};
</script>

<style lang="scss" scoped>
.categories {
  width: 100%;
}
</style>
