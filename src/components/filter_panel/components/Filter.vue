<template>
  <div :class="containerClass" @click="rotateArrow">
    <div :class="nameClass">
      {{ filter.name }}
    </div>
    <div :class="[iconClass, iconRotatedClass]" style="color: red">
      <FilterIcon />
    </div>
  </div>
</template>

<script>
import FilterIcon from '@/assets/icons/FilterIcon.vue';

export default {
  name: 'Filter',
  components: {
    FilterIcon,
  },
  data() {
    return {
      containerClass: 'filter',
      rotateIcon: false,
    };
  },
  props: {
    filter: Object,
  },
  computed: {
    nameClass() {
      return `${this.containerClass}__name`;
    },
    iconClass() {
      return `${this.containerClass}__icon`;
    },
    iconRotatedClass() {
      return this.rotateIcon ? `${this.iconClass}__rotated` : '';
    },
  },
  methods: {
    rotateArrow() {
      this.rotateIcon = !this.rotateIcon;
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  padding: 20px;
  height: 40px;
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
</style>
