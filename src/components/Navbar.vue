<template>
  <div :class="containerClass">
    <div v-for="(category, index) in categories" :key="index">
      <div :class="categoryClass">
        {{ category }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      containerClass: 'navbar',
      categories: ['Focare', 'Termocamine', 'Bioseminee', 'Burlane', 'Grile aer', 'Sobe'],
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
.navbar {
  width: 100%;
  height: 40px;
  background: linear-gradient(to right, #ff5050 0%, #ffcc00 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 18px;

  &__category {
    margin: 0 30px;

    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
}
</style>
