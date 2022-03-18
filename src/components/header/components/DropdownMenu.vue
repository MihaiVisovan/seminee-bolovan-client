<template>
  <div :class="containerClass">
    <div v-for="(category, index) in categories" :key="index" :class="categoryClass">
      {{ category }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      containerClass: 'menu',
      categories: [
        'Focare',
        'Termocamine',
        'Burlane',
        'Bioșeminee',
        'Grile',
        'Sobe',
        'Acumulatoare',
      ],
    };
  },
  computed: {
    categoryClass() {
      return `${this.containerClass}__category`;
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 60px;
  height: 100%;
  width: 100%;
  background-color: white;
  font-family: 'Merriweather', serif;

  @media only screen and (min-width: $laptop) {
    display: none;
  }

  &__category {
    height: 40px;
    border-top: 1px solid $color-light-grey;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: $font-small;
    cursor: pointer;
  }

  &__category:last-child {
    border-bottom: 1px solid $color-light-grey;
  }
}
</style>
