<template>
  <div :class="containerClass">
    <input type="text" placeholder="Ce cauți astăzi?" />
    <MagnifyingGlassIcon :class="searchIconClass" />
  </div>
</template>

<script>
import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon.vue';

export default {
  name: 'SearchboxMobile',
  components: {
    MagnifyingGlassIcon,
  },
  data() {
    return {
      containerClass: 'searchbox_mobile',
    };
  },

  computed: {
    searchIconClass() {
      return `${this.containerClass}__icon`;
    },
  },
};
</script>

<style lang="scss" scoped>
.searchbox_mobile {
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  position: relative;

  &__icon {
    width: 18px;
    position: absolute;
    left: 35px;
    top: 7px;
    fill: white;
  }
}

input[type='text'] {
  outline: none;
  height: 100%;
  width: 100%;
  border-radius: 50px;
  border: 2px solid white;
  background: transparent;
  color: white;
  padding-left: 40px;
  font-size: $font-small;
  font-family: 'Merriweather', serif;
}

input::placeholder {
  color: white;
}
</style>
