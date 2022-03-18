<template>
  <div :class="containerClass">
    <SearchboxMobile />
    <div :class="categoriesClass">
      <div v-for="(category, index) in categories" :key="index">
        <div :class="categoryClass">
          <div :class="categoryNameClass">
            {{ category }}
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
      font-size: $font-medium;
      font-family: 'Merriweather', serif;
      cursor: pointer;

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
