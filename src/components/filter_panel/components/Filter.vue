<template>
  <div :class="containerClass">
    <div :class="nameClass">
      {{ filter.name }}
    </div>
    <div :class="iconClass" style="color: red"><FilterIcon /></div>
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
    };
  },
  props: {
    filter: Object,
  },
  computed: {
    nameClass() {},
    iconClass() {},
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
}
</style>
