<template>
  <div :class="containerClass">
    <div @click="toggleMenu" :class="menuClass">
      <div :class="firstLineClass" id="menu-first-line"></div>
      <div :class="secondLineClass" id="menu-second-line"></div>
    </div>
    <div @click="goHome" :class="brandNameClass">ȘEMINEE BOLOVAN</div>
    <div :class="searchboxClass">
      <input type="text" placeholder="Ce cauți astăzi?" />
      <MagnifyingGlassIcon :class="searchIconClass" />
    </div>
    <div @click="addCartAnimation" :class="cartClass" id="cart">
      <CartIcon />
    </div>
  </div>
</template>

<script>
import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon.vue';
import CartIcon from '@/assets/icons/CartIcon.vue';
import { mapState, mapMutations } from 'vuex';

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
    ...mapState(['showMenu']),
    brandNameClass() {
      return `${this.containerClass}__name`;
    },
    menuClass() {
      return `${this.containerClass}__menu`;
    },
    menuAnimationClass() {
      return `${this.menuClass}__animation`;
    },
    firstLineClass() {
      return `${this.menuClass}__first_line`;
    },
    firstLineRotateClass() {
      return `${this.firstLineClass}__rotate`;
    },
    firstLineRotateReversedClass() {
      return `${this.firstLineRotateClass}__reversed`;
    },
    secondLineClass() {
      return `${this.menuClass}__second_line`;
    },
    secondLineRotateClass() {
      return `${this.secondLineClass}__rotate`;
    },
    secondLineRotateReversedClass() {
      return `${this.secondLineRotateClass}__reversed`;
    },
    searchboxClass() {
      return `${this.containerClass}__search`;
    },
    searchIconClass() {
      return `${this.searchboxClass}__icon`;
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
    toggleMenu() {
      const menuFirstLine = document.getElementById('menu-first-line');
      const menuSecondLine = document.getElementById('menu-second-line');

      if (!this.showMenu) {
        menuFirstLine.classList.add(this.firstLineRotateClass);
        menuSecondLine.classList.add(this.secondLineRotateClass);

        menuFirstLine.classList.remove(this.firstLineRotateReversedClass);
        menuSecondLine.classList.remove(this.secondLineRotateReversedClass);
      } else {
        menuFirstLine.classList.add(this.firstLineRotateReversedClass);
        menuSecondLine.classList.add(this.secondLineRotateReversedClass);

        menuFirstLine.classList.remove(this.firstLineRotateClass);
        menuSecondLine.classList.remove(this.secondLineRotateClass);
      }

      this.setShowMenu(!this.showMenu);
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
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  box-sizing: border-box;

  &__menu {
    width: 20px;
    cursor: pointer;
    @media only screen and (min-width: $laptop) {
      display: none;
    }

    &__first_line {
      border: 1px solid black;
      transform-origin: 100% 0%;
      transition: transform 0.5s ease-out;
      width: 20px;

      &__rotate {
        transform: rotate(-45deg);
        &__reversed {
          transform: rotate(0deg);
        }
      }
    }

    &__second_line {
      border: 1px solid black;
      width: 20px;
      margin-top: 7px;
      transform-origin: 100% 0%;
      transition: transform 0.5s ease-out;

      &__rotate {
        transform: translateY(5px) rotate(45deg);
        &__reversed {
          transform: rotate(0deg);
        }
      }
    }
  }

  &__name {
    display: flex;
    justify-content: flex-start;
    font-size: 30px;
    font-weight: bold;
    font-family: 'Plak', serif;
    letter-spacing: 0.5px;
    word-spacing: 3px;
    padding-bottom: 2px;

    @media only screen and (min-width: $tablet) {
      font-size: 40px;
    }

    @media only screen and (min-width: $laptop) {
      width: 250px;
    }

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }

  &__search {
    position: relative;
    width: 30%;
    height: 35px;
    display: none;

    @media only screen and (min-width: $laptop) {
      display: block;
    }

    &__icon {
      position: absolute;
      left: 15px;
      top: 8px;
    }
  }

  &__cart {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;

    @media only screen and (min-width: $tablet) {
      svg {
        width: 50px;
        height: 50px;
      }
    }

    @media only screen and (min-width: $laptop) {
      width: 250px;
    }

    &:hover {
      opacity: 0.7;
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

input[type='text'] {
  height: 100%;
  width: 100%;
  border-radius: 50px;
  border: 2px solid black;
  padding-left: 40px;
  font-size: 15px;
  font-family: 'Merriweather', serif;
}
</style>
