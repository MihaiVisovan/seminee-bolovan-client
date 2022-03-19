<template>
  <div :class="containerClass">
    <DropdownIcon />
    <div @click="goHome" :class="brandNameClass">ȘEMINEE BOLOVAN</div>
    <div :class="searchboxClass">
      <SearchboxDesktop />
    </div>
    <div @click="addCartAnimation" :class="cartClass" id="cart">
      <CartIcon />
    </div>
  </div>
</template>

<script>
import DropdownIcon from '@/components/header/components/DropdownIcon.vue';
import SearchboxDesktop from '@/components/header/components/SearchboxDesktop.vue';
import CartIcon from '@/assets/icons/CartIcon.vue';

export default {
  name: 'Header',
  components: {
    DropdownIcon,
    SearchboxDesktop,
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
      return `${this.containerClass}__searchbox`;
    },
    cartClass() {
      return `${this.containerClass}__cart`;
    },
    cartAnimationClass() {
      return `${this.cartClass}__animation`;
    },
    cartAnimationReversedClass() {
      return `${this.cartAnimationClass}__reversed`;
    },
  },
  methods: {
    addCartAnimation() {
      const cart = document.getElementById('cart');
      cart.classList.add(this.cartAnimationClass);

      setTimeout(() => {
        cart.classList.add(this.cartAnimationReversedClass);
        this.$router.push({ name: 'Cart' });
      }, 500);

      setTimeout(() => {
        cart.classList.remove(this.cartAnimationClass);
        cart.classList.remove(this.cartAnimationReversedClass);
      }, 1000);
    },
    goHome() {
      this.$router.push({ name: 'Categories' });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;

  &__name {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: $font-large;
    font-weight: bold;
    letter-spacing: 0.5px;
    padding-top: 3px;
    word-spacing: 3px;
    cursor: pointer;

    @media only screen and (min-width: $s-mobile) {
      font-size: $font-xxl;
    }

    @media only screen and (min-width: $mobile) {
      font-size: $font-xxxl;
    }

    @media only screen and (min-width: $tablet) {
      padding: 0;
      justify-content: flex-start;
      font-size: $font-xxxxl;
      width: 250px;
      flex: none;
    }
  }

  &__searchbox {
    flex: 1;
    justify-content: center;
    align-items: center;
    display: none;

    @media only screen and (min-width: $laptop) {
      display: flex;
    }
  }

  &__cart {
    height: 100%;
    width: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    padding-top: 3px;

    @media only screen and (min-width: $laptop) {
      width: 250px;
      padding-top: 0;

      svg {
        width: 50px;
        height: 50px;
      }
    }

    &__animation {
      animation: slide-out-right 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;

      &__reversed {
        animation: slide-out-left 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
      }
    }
  }
}

@keyframes slide-out-right {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(200px);
    opacity: 0;
  }
}

@keyframes slide-out-left {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
