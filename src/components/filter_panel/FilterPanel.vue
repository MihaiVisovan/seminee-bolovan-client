<template>
  <div :class="containerClass">
    <Filter v-for="(filter, index) in filters" :key="index" :filter="filter" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Filter from '@/components/filter_panel/components/Filter.vue';

export default {
  name: 'FilterPanel',
  components: {
    Filter,
  },
  data() {
    return {
      containerClass: 'filter_panel',
    };
  },
  computed: {
    ...mapState(['filters']),
  },
};
</script>

<style lang="scss" scoped>
.filter_panel {
}
</style>
