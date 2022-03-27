<template>
  <div :class="containerClass">
    <ul :class="optionsClass">
      <li :class="optionClass" v-for="(option, index) in filterOptions" :key="index">
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FilterOptions',
  data() {
    return {
      containerClass: 'filter_options',
    };
  },
  props: {
    filterOptions: Array,
  },
  computed: {
    optionsClass() {
      return `${this.containerClass}__options`;
    },
    optionClass() {
      return `${this.optionsClass}__option`;
    },
  },
};
</script>

<style lang="scss" scoped>
.filter_options {
  &__options {
    display: flex;
    flex-direction: column;
    padding: 20px;

    &__option {
      height: 30px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>
