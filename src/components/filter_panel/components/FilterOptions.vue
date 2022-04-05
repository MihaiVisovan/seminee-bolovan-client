<template>
  <div :class="containerClass">
    <ul :class="optionsClass">
      <li
        @click="toggleOption(option.id)"
        :class="[optionClass, option.selected ? optionSelectedClass : '']"
        v-for="option in filter.options"
      >
        <div :class="checkboxWrapperClass">
          <div :class="checkboxContentClass">
            <Checkbox />
          </div>
          <div :class="[coverClass, option.selected ? coverSelectedClass : '']"></div>
        </div>
        <span :class="optionNameClass"> {{ option.name }} </span>
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
  data() {
    return {
      containerClass: 'filter_options',
    };
  },
  props: {
    filter: Object,
  },
  computed: {
    ...mapState(['filters']),
    optionsClass() {
      return `${this.containerClass}__options`;
    },
    optionClass() {
      return `${this.optionsClass}__option`;
    },
    optionSelectedClass() {
      return `${this.optionClass}__selected`;
    },
    checkboxWrapperClass() {
      return `${this.optionClass}__checkbox`;
    },
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
  &__options {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid $color-light-grey;
    padding: 10px 20px;

    &__option {
      height: 30px;
      font-size: $font-xs;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;

      &__selected {
        background: linear-gradient(to left, #e8c547 20%, #c20114 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      &__checkbox {
        height: 14px;
        width: 14px;
        padding: 1px;
        position: relative;
        border: 1px solid $color-dark-grey;
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

          &__selected {
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
