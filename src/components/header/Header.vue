<template>
  <div :class="containerClass">
    <div :class="dropdownIconClass">
      <MenuIcon />
    </div>
    <div :class="brandNameClass" @click="goHome">ȘEMINEE BOLOVAN</div>
    <div :class="searchboxClass">
      <SearchboxDesktop />
    </div>
    <div :class="cartClass" @click="addCartAnimation" id="cart-icon">
      <CartIcon />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import MenuIcon from '@/components/header/components/MenuIcon.vue';
import SearchboxDesktop from '@/components/header/components/SearchboxDesktop.vue';
import CartIcon from '@/assets/icons/CartIcon.vue';

export default {
  name: 'Header',
  components: {
    MenuIcon,
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
    dropdownIconClass() {
      return `${this.containerClass}__dropdown_icon`;
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
    ...mapMutations(['setShowMenu']),
    addCartAnimation() {
      const cart = document.getElementById('cart-icon');
      cart.classList.add(this.cartAnimationClass);

      setTimeout(() => {
        cart.classList.add(this.cartAnimationReversedClass);
        this.$router.push({ name: 'Cart' });
      }, 500);

      setTimeout(() => {
        cart.classList.remove(this.cartAnimationClass);
        cart.classList.remove(this.cartAnimationReversedClass);
      }, 1000);
      this.setShowMenu(false);
    },
    goHome() {
      this.$router.push({ name: 'Categories' });
      this.setShowMenu(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;

  @media only screen and (min-width: $laptop) {
    height: 60px;
  }

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
    min-width: 150px;

    @media only screen and (min-width: $s-mobile) {
      font-size: $font-xl;
    }

    @media only screen and (min-width: $mobile) {
      font-size: $font-3xl;
    }

    @media only screen and (min-width: $tablet) {
      padding: 0;
      justify-content: flex-start;
      font-size: $font-4xl;
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
