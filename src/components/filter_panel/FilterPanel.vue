<template>
  <div class="filter_panel">
    <Filter v-for="(filter, index) in filters" :key="index" :filter="filter" />
    <div class="filter_panel__buttons">
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
  computed: {
    ...mapState(['filters']),
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
  position: relative;
  height: calc(100% - 70px);
  overflow: auto;

  @media screen and (min-width: $laptop) {
    height: 100%;
    overflow: none;
  }

  &__buttons {
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0px;
    box-shadow: 0 -10px 40px 0px rgb(0 0 0 / 30%);
    padding: 15px 0;
    width: 100%;

    @media screen and (min-width: $laptop) {
      display: none;
    }
  }
}

.filter_panel::-webkit-scrollbar {
  width: 8px;
}

.filter_panel::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background-color: $color-light-grey;
}

.filter_panel::-webkit-scrollbar-track {
  box-shadow: inset 0px 1px 2px $color-dark-grey;
  border-radius: 100px;
}
</style>
