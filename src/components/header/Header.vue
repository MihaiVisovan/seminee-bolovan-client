<template>
  <div class="header">
    <div class="header__dropdown_icon">
      <MenuIcon />
    </div>
    <div class="header__name" @click="goHome">ȘEMINEE BOLOVAN</div>
    <div class="header__searchbox">
      <SearchboxDesktop />
    </div>
    <div class="header__cart" @click="addCartAnimation" id="cart-icon">
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
  methods: {
    ...mapMutations(['setShowMenu']),
    addCartAnimation() {
      const cart = document.getElementById('cart-icon');
      cart.classList.add('header__cart__animation');

      setTimeout(() => {
        cart.classList.add('header__cart__animation__reversed');
        this.$router.push({ name: 'Cart' });
      }, 500);

      setTimeout(() => {
        cart.classList.remove('header__cart__animation');
        cart.classList.remove('header__cart__animation__reversed');
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
