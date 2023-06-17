<template>
  <div class="filter_options">
    <ul class="filter_options__wrapper">
      <li
        @click="toggleOption(option.id)"
        :class="[
          'filter_options__option',
          option.selected ? 'filter_options__option--selected' : '',
        ]"
        v-for="(option, index) in filter.options"
        :key="index"
      >
        <div class="filter_options__option__checkbox">
          <div class="filter_options__option__checkbox__content">
            <Checkbox />
          </div>
          <div
            :class="[
              'filter_options__option__checkbox__cover',
              option.selected ? 'filter_options__option__checkbox__cover--selected' : '',
            ]"
          ></div>
        </div>
        <span class="filter_options__option__name"> {{ option.name }} </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Checkbox from '@/assets/icons/Checkbox.vue';
export default {
  name: 'FilterOptions',
  components: {
    Checkbox,
  },
  props: {
    filter: Object,
  },
  computed: {
    ...mapState(['filters']),
    checkboxContentClass() {
      return `${this.checkboxWrapperClass}__content`;
    },
    coverClass() {
      return `${this.checkboxWrapperClass}__cover`;
    },
    coverSelectedClass() {
      return `${this.coverClass}__selected`;
    },
    optionNameClass() {
      return `${this.optionClass}__name`;
    },
  },
  methods: {
    ...mapMutations(['setFilters']),
    toggleOption(id) {
      // update options
      const updatedOptions = this.filter.options.map(x => {
        if (x.id === id) {
          return {
            ...x,
            selected: !x.selected,
          };
        }
        return x;
      });

      // update the current filter with the updated options
      const updatedFilter = { ...this.filter };
      updatedFilter.options = updatedOptions;

      const updatedFilters = this.filters.map(x => {
        if (x.id === this.filter.id) {
          return {
            ...x,
            options: updatedOptions,
          };
        }
        return x;
      });

      // update the filters within the store
      this.setFilters(updatedFilters);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter_options {
  border-bottom: 1px solid $color-light-grey;

  &__wrapper {
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
  }
  &__option {
    height: 30px;
    font-size: $font-xs;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    &:hover {
      color: darkgrey;
    }

    &--selected {
      background: linear-gradient(to left, #e8c547 20%, #c20114 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &__checkbox {
      height: 14px;
      width: 14px;
      padding: 1px;
      position: relative;
      border: 1px solid $color-darker-grey;
      border-radius: 3px;

      &__content {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &__cover {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: white;
        border-radius: 3px;

        &--selected {
          transform-origin: right center;
          animation: 0.2s show-checkbox ease-in-out forwards;
        }
      }
    }

    &__name {
      padding-left: 5px;
    }
  }
}

@keyframes show-checkbox {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}
</style>
