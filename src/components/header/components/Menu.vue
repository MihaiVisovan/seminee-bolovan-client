<template>
  <div :class="containerClass" v-if="showMenu">
    <ul :class="categoriesClass">
      <li
        :class="categoryClass"
        @click="renderProducts(category.id), setShowMenu(false)"
        v-for="(category, index) in categories"
        :key="index"
      >
        {{ category.longTitle }}
      </li>
    </ul>
  </div>
</template>

<script>
import renderProducts from '@/helpers/common/renderProducts.js';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Menu',
  data() {
    return {
      containerClass: 'menu',
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
    renderProducts,
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
    list-style: none;
    padding-inline-start: 0;
    &__category {
      height: 40px;
      padding-bottom: 3px;
      border-bottom-width: 1px;
      border-bottom-style: solid;
      // the following 6 lines are needed for iOS devices
      // so only the bottom border will have linear-gradient
      // because transparent property doesn't work
      border-right-width: 0px;
      border-right-style: solid;
      border-left-width: 0px;
      border-left-style: solid;
      border-top-width: 0px;
      border-top-style: solid;
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
