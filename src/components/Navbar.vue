<template>
  <div :class="containerClass">
    <div v-for="(category, index) in categories" :key="index">
      <div :class="categoryContainerClass">
        <div :class="categoryNameClass">
          {{ category }}
        </div>
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
    categoryContainerClass() {
      return `${this.containerClass}__category`;
    },
    categoryNameClass() {
      return `${this.categoryContainerClass}__name`;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 40px;
  background: linear-gradient(to left, #e8c547 20%, #c20114 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: 'Merriweather', serif;

  @media only screen and (max-width: 992px) {
    display: none;
  }

  &__category {
    margin-right: 20px;
    height: 100%;
    cursor: pointer;

    &__name {
      color: white;
      border: 1px solid transparent;
      border-radius: 50px;
      padding: 4px 10px;
      box-sizing: border-box;

      &:hover {
        border-color: white;
      }
    }
  }
}
</style>
