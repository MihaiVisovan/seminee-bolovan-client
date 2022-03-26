<template>
  <div :class="containerClass"></div>
</template>

<script>
export default {
  name: 'FilterPanel',
  data() {
    return {
      containerClass: 'filter_panel',
    };
  },
};
</script>

<style lang="scss" scoped>
.filter_panel {
}
</style>
