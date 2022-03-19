<template>
  <div :class="containerClass">
    <SearchboxMobile />
    <div :class="categoriesClass">
      <div @click="goToProductsPage(category)" v-for="(category, index) in categories" :key="index">
        <div :class="categoryClass">
          <div :class="categoryNameClass">
            {{ category.shortTitle }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchboxMobile from '@/components/navbar/components/SearchboxMobile.vue';
import { mapState } from 'vuex';

export default {
  name: 'Navbar',
  data() {
    return {
      containerClass: 'navbar',
    };
  },
  components: {
    SearchboxMobile,
  },
  computed: {
    ...mapState(['categories']),
    categoriesClass() {
      return `${this.containerClass}__categories`;
    },
    categoryClass() {
      return `${this.categoriesClass}__category`;
    },
    categoryNameClass() {
      return `${this.categoryClass}__name`;
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
.navbar {
  width: 100%;
  height: 50px;
  background: linear-gradient(to left, #e8c547 20%, #c20114 100%);
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: $laptop) {
    height: 40px;
  }

  &__categories {
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: $laptop) {
      display: flex;
    }

    &__category {
      margin-right: 15px;
      height: 100%;
      font-size: $font-small;
      font-family: 'Merriweather', serif;
      cursor: pointer;

      @media only screen and (min-width: $desktop) {
        font-size: $font-medium;
      }

      &__name {
        color: white;
        border: 1px solid transparent;
        border-radius: 50px;
        padding: 3px 10px;

        &:hover {
          border-color: white;
        }
      }
    }
  }
}
</style>
