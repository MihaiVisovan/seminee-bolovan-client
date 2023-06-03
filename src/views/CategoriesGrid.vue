<template>
  <div class="categories_grid">
    <Card @click="renderProducts(category.id)" v-for="(category, index) in categories" :key="index">
      <template v-slot:card-image>
        <div class="categories_grid__image_height">
          <img :src="category.image" class="categories_grid__image" />
        </div>
      </template>
      <template v-slot:card-details>
        <div class="categories_grid__details">
          {{ category.longTitle }}
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import renderProducts from '@/helpers/common/renderProducts.js';
import Card from '@/common/components/Card.vue';
import { mapState } from 'vuex';

export default {
  name: 'CategoriesGrid',
  components: {
    Card,
  },
  computed: {
    ...mapState(['categories']),
  },
  methods: {
    renderProducts,
  },
};
</script>

<style lang="scss" scoped>
.categories_grid {
  max-width: 1200px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;

  @media only screen and (min-width: $mobile) {
    justify-content: flex-start;
  }

  &__image_height {
    height: 200px;
  }

  &__image {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  &__details {
    font-family: 'Merriweather', serif;
    font-weight: 600;
    font-size: $font-medium;
  }
}
</style>
