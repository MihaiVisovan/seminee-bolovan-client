<template>
  <div :class="containerClass">
    <div :class="brandNameClass">Șeminee Bolovan</div>
    <div :class="searchboxClass">
      <input type="text" placeholder="Caută șeminee" />
      <MagnifyingGlassIcon :class="searchIconClass" />
    </div>
    <div :class="cartClass">
      <CartIcon />
    </div>
  </div>
</template>

<script>
import MagnifyingGlassIcon from '@/assets/icons/magnifying-glass.svg';
import CartIcon from '@/assets/icons/cart.svg';

export default {
  name: 'Header',
  components: {
    MagnifyingGlassIcon,
    CartIcon,
  },
  data() {
    return {
      containerClass: 'header',
    };
  },
  computed: {
    brandNameClass() {
      return `${this.containerClass}__name`;
    },
    searchboxClass() {
      return `${this.containerClass}__search`;
    },
    cartClass() {
      return `${this.containerClass}__cart`;
    },
    searchIconClass() {
      return `${this.searchboxClass}__icon`;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-sizing: border-box;

  &__name {
    width: 250px;
    display: flex;
    justify-content: flex-start;
    font-size: 28px;
    font-weight: 500;

    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }

  &__search {
    position: relative;

    &__icon {
      position: absolute;
      left: 15px;
      top: 8px;
    }
  }

  &__cart {
    width: 250px;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
}

input[type='text'] {
  height: 35px;
  width: 500px;
  border-radius: 50px;
  border: 2px solid black;
  padding-left: 40px;
  font-size: 15px;
  font-family: 'Merriweather', serif;
}
</style>
