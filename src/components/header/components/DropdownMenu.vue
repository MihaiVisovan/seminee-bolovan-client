<template>
  <div :class="containerClass" v-if="showMenu">
    <div :class="categoriesClass">
      <div
        @click="goToProductsPage(category)"
        v-for="(category, index) in categories"
        :key="index"
        :class="categoryClass"
      >
        {{ category.longTitle }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'Menu',
  data() {
    return {
      containerClass: 'menu',
      showMenu: true,
    };
  },
  computed: {
    ...mapState(['categories', 'showMenu']),
    categoriesClass() {
      return `${this.containerClass}__categories`;
    },
    categoryClass() {
      return `${this.categoriesClass}__category`;
    },
  },
  methods: {
    ...mapMutations(['setShowMenu']),
    goToProductsPage(category) {
      // this will also be used as the category ID in the database, so it has to be unique
      const categoryId = category.shortTitle.toLowerCase().replaceAll(' ', '-');

      this.$router.push({
        name: 'Products',
        params: { categoryId: categoryId },
      });
      this.setShowMenu(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 40px;
  height: 100%;
  width: 100%;
  background-color: white;
  font-family: 'Merriweather', serif;
  padding: 0px 25px;

  @media only screen and (min-width: $laptop) {
    display: none;
  }

  &__categories {
    &__category {
      height: 40px;
      padding-bottom: 3px;
      border-bottom: 1px solid transparent;
      border-image: linear-gradient(to left, #e8c547 30%, #c20114 100%);
      border-image-slice: 1;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      font-weight: bold;
      font-size: $font-small;
      text-transform: uppercase;
      letter-spacing: 0.3px;
      cursor: pointer;
    }
  }
}
</style>
