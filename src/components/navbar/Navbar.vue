<template>
  <div :class="containerClass">
    <div :class="searchboxClass">
      <SearchboxMobile />
    </div>
    <ul :class="categoriesClass">
      <li
        :class="categoryClass"
        @click="renderProducts(category.id)"
        v-for="(category, index) in categories"
        :key="index"
      >
        <div :class="[categoryNameClass, categoryNameActiveClass(category.id)]">
          {{ category.shortTitle }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import SearchboxMobile from '@/components/navbar/components/SearchboxMobile.vue';
import renderProducts from '@/helpers/common/renderProducts.js';
import { mapState } from 'vuex';

export default {
  name: 'Navbar',
  components: {
    SearchboxMobile,
  },
  data() {
    return {
      containerClass: 'navbar',
    };
  },

  computed: {
    ...mapState(['categories']),
    searchboxClass() {
      return `${this.containerClass}__searchbox`;
    },
    categoriesClass() {
      return `${this.containerClass}__categories`;
    },
    categoryClass() {
      return `${this.categoriesClass}__category`;
    },
    categoryNameClass() {
      return `${this.categoryClass}__name`;
    },
    categoryNameActiveClass() {
      return id =>
        this.$route.params.categoryId === id ? `${this.categoryNameClass}__active` : '';
    },
  },
  methods: {
    renderProducts,
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

  &__searchbox {
    width: 100%;

    @media only screen and (min-width: $laptop) {
      display: none;
    }
  }

  &__categories {
    width: 100%;
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
        transition: all 0.2s ease-in-out;

        &__active {
          box-shadow: inset 0px 0px 2px 2px white;
          border-radius: 50px;
        }

        &:hover {
          box-shadow: inset 0px 0px 2px 2px white;
          border-radius: 50px;
        }

        &:active {
          transition: none;
          transform: scale(95%);
        }
      }
    }
  }
}
</style>
