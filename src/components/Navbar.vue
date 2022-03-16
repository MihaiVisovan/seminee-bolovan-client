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
        'Elemente distributie',
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
  background: linear-gradient(to right, #f42b03 0%, #ffbe0b 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-family: 'Merriweather', serif;

  &__category {
    margin-right: 50px;
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
