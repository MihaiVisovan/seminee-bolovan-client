<template>
  <div :class="containerClass">
    <div :class="gridClass">
      <Card
        @click="goToProductsPage(category)"
        v-for="(category, index) in categories"
        :key="index"
      >
        <template v-slot:card-image>
          <div :class="imageWrapperClass">
            <img :src="category.image" :class="imageClass" />
          </div>
        </template>
        <template v-slot:card-details>
          <div :class="detailsClass">
            {{ category.longTitle }}
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
  name: 'Categories',
  components: {
    Card,
  },
  data() {
    return {
      containerClass: 'categories',
    };
  },
  computed: {
    ...mapState(['categories']),
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
  },
  methods: {
    goToProductsPage(category) {
      // this will also be used as the category ID in the database, so it has to be unique
      const categoryId = category.shortTitle.toLowerCase().replaceAll(' ', '-');

      this.$router.push({
        name: 'Products',
        params: { categoryId: categoryId },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.categories {
  width: 100%;
  padding: 20px 0;

  @media only screen and (min-width: $mobile) {
    padding: 20px;
  }

  &__grid {
    max-width: 1200px;
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
      font-family: 'Merriweather', serif;
      font-weight: 600;
      font-size: $font-medium;
    }
  }
}
</style>
