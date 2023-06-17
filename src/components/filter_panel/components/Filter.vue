<template>
  <div class="filter">
    <div :class="['filter__collapsed', expandedFilterClass]" @click="toggleOptions">
      <div class="filter__name">
        {{ filter.name }}
      </div>
      <div :class="['filter__icon', iconRotatedClass]">
        <FilterIcon />
      </div>
    </div>
    <transition name="slide">
      <FilterOptions :filter="filter" v-if="filter.expanded" />
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import FilterIcon from '@/assets/icons/FilterIcon.vue';
import FilterOptions from '@/components/filter_panel/components/FilterOptions.vue';

export default {
  name: 'Filter',
  components: {
    FilterIcon,
    FilterOptions,
  },
  data: () => ({
    showOptions: false,
  }),
  props: {
    filter: Object,
  },
  computed: {
    ...mapState(['filters']),
    expandedFilterClass() {
      return this.filter.expanded ? 'filter__expanded' : '';
    },
    iconRotatedClass() {
      return this.filter.expanded ? 'filter__icon__rotated' : '';
    },
  },
  methods: {
    ...mapMutations(['setFilters']),
    toggleOptions() {
      const updatedFilters = this.filters.map(x => {
        if (x.id === this.filter.id) {
          return {
            ...x,
            expanded: !x.expanded,
          };
        }
        return x;
      });
      this.setFilters(updatedFilters);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-direction: column;
  font-size: $font-small;

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
  }

  &__icon {
    transition: transform 0.3s ease-out;

    &__rotated {
      transform: rotate(180deg);
    }
  }

  &__expanded {
    background-color: $color-lighter-grey;
  }
}

.slide-enter-active {
  transform-origin: top center;
  animation: 0.3s slide-top;
}

@keyframes slide-top {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}
</style>
