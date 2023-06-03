<template>
  <div class="searchbox_desktop">
    <input type="text" placeholder="Ce cauți astăzi?" />
    <MagnifyingGlassIcon class="searchbox_desktop__icon" />
  </div>
</template>

<script>
import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon.vue';

export default {
  name: 'SearchboxDesktop',
  components: {
    MagnifyingGlassIcon,
  },
};
</script>

<style lang="scss" scoped>
.searchbox_desktop {
  position: relative;
  width: 50%;
  height: 100%;

  &__icon {
    position: absolute;
    left: 15px;
    top: 10px;
  }
}

input[type='text'] {
  height: 100%;
  width: 100%;
  border-radius: 50px;
  border-top: 2px solid black;
  color: black;
  padding-left: 40px;
  font-size: $font-medium;
  font-family: 'Merriweather', serif;
  outline: none;
}
</style>
