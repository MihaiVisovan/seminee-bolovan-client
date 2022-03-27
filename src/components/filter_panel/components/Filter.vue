<template>
  <div :class="containerClass">
    <div :class="collapsedFilterClass" @click="toggleOptions">
      <div :class="nameClass">
        {{ filter.name }}
      </div>
      <div :class="[iconClass, iconRotatedClass]">
        <FilterIcon />
      </div>
    </div>
    <FilterOptions :filterOptions="filter.options" v-if="showOptions" />
  </div>
</template>

<script>
import FilterIcon from '@/assets/icons/FilterIcon.vue';
import FilterOptions from '@/components/filter_panel/components/FilterOptions.vue';

export default {
  name: 'Filter',
  components: {
    FilterIcon,
    FilterOptions,
  },
  data() {
    return {
      containerClass: 'filter',
      showOptions: false,
    };
  },
  props: {
    filter: Object,
  },
  computed: {
    collapsedFilterClass() {
      return `${this.containerClass}__collapsed`;
    },
    nameClass() {
      return `${this.collapsedFilterClass}__name`;
    },
    iconClass() {
      return `${this.collapsedFilterClass}__icon`;
    },
    iconRotatedClass() {
      return this.showOptions ? `${this.iconClass}__rotated` : '';
    },
    expandedFilterClass() {
      return `${this.containerClass}__expanded`;
    },
  },
  methods: {
    toggleOptions() {
      this.showOptions = !this.showOptions;
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-direction: column;

  &__collapsed {
    padding: 20px;
    height: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $color-light-grey;
    cursor: pointer;

    @media screen and (min-width: $laptop) {
      height: 50px;
    }

    &__name {
    }

    &__icon {
      transition: transform 0.3s ease-out;
      &__rotated {
        transform: rotate(180deg);
      }
    }
  }

  &__expanded {
  }
}
</style>
