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
  data() {
    return {
      containerClass: 'searchbox_mobile',
    };
  },
  components: {
    MagnifyingGlassIcon,
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
  height: 28px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  position: relative;

  &__icon {
    width: 16px;
    position: absolute;
    left: 37px;
    top: 5px;
    fill: white;
  }

  @media only screen and (min-width: $laptop) {
    display: none;
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
  padding-left: 35px;
  font-size: $font-small;
  font-family: 'Merriweather', serif;
}

input::placeholder {
  color: white;
}
</style>
