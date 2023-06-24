<template>
  <div class="searchbox_desktop">
    <input
      type="text"
      ref="searchbox"
      :placeholder="CONSTANTS.SEARCHBOX_PLACEHOLDER"
      v-model="searchQueryState"
    />
    <MagnifyingGlassIcon class="searchbox_desktop__icon" />
    <div class="searchbox_desktop__close" @click="resetProducts">
      <div class="searchbox_desktop__close__first_line"></div>
      <div class="searchbox_desktop__close__second_line"></div>
    </div>
  </div>
</template>

<script>
import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon.vue';
import CONSTANTS from '@/common/constants/index.js';

export default {
  name: 'SearchboxDesktop',
  components: {
    MagnifyingGlassIcon,
  },
  data: () => ({
    searchQueryState: '',
    CONSTANTS,
  }),
  mounted() {
    this.$refs.searchbox.focus();
  },
  watch: {
    $route(to, from) {
      if (!this.$route.fullPath.includes('search')) {
        this.searchQueryState = '';
      } else {
        this.searchQueryState = this.$route.query.query;
      }
    },
    searchQueryState() {
      this.searchProducts();
    },
  },
  methods: {
    searchProducts() {
      console.log(this.searchQueryState);
      this.$router.push({
        name: 'SearchComponent',
        query: { query: this.searchQueryState.trim() },
      });
    },
    resetProducts() {
      this.searchQueryState = '';
      this.searchProducts();
    },
  },
};
</script>

<style lang="scss" scoped>
.searchbox_desktop {
  position: relative;
  width: 50%;
  height: 100%;

  &__icon {
    position: absolute;
    left: 15px;
    top: 10px;
  }

  &__close {
    position: absolute;
    top: 5px;
    height: 30px;
    padding: 10px;
    width: 30px;
    right: 15px;
    cursor: pointer;

    &__first_line {
      border: 1px solid black;
      transform-origin: 100% 0%;
      width: 16px;
      transform: rotate(-45deg);
    }

    &__second_line {
      border: 1px solid black;
      width: 16px;
      margin-top: 4px;
      transform-origin: 100% 0%;
      transform: translateY(5px) translateX(1px) rotate(45deg);
    }
  }
}

input[type='text'] {
  height: 100%;
  width: 100%;
  border-radius: 50px;
  border-top: 2px solid black;
  color: black;
  padding-left: 40px;
  font-size: $font-medium;
  font-family: 'Merriweather', serif;
  outline: none;
}
</style>
