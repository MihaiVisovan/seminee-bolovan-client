<template>
  <div :class="containerClass">
    <Filter v-for="(filter, index) in filters" :key="index" :filter="filter" />
    <div :class="buttonsClass">
      <Button text="APLICĂ" @click="setShowFilters(false)" />
      <Button text="RESETEAZĂ" @click="resetFilters()" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Filter from '@/components/filter_panel/components/Filter.vue';
import Button from '@/common/components/Button.vue';

export default {
  name: 'FilterPanel',
  components: {
    Filter,
    Button,
  },
  data() {
    return {
      containerClass: 'filter_panel',
    };
  },
  computed: {
    ...mapState(['filters']),
    buttonsClass() {
      return `${this.containerClass}__buttons`;
    },
  },
  methods: {
    ...mapMutations(['setShowFilters', 'setFilters']),
    resetFilters() {
      const updatedFilters = this.filters.map(filter => {
        const updatedOptions = filter.options.map(option => {
          return {
            ...option,
            selected: false,
          };
        });
        return {
          ...filter,
          options: updatedOptions,
        };
      });

      // update the filters within the store
      this.setFilters(updatedFilters);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter_panel {
  &__buttons {
    display: flex;
    flex-direction: row;
    margin: 30px 0;

    @media screen and (min-width: $laptop) {
      display: none;
    }
  }
}
</style>
