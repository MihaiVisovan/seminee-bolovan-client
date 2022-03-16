<template>
  <div :class="containerClass">
    <div @click="goHome" :class="brandNameClass">ȘEMINEE BOLOVAN</div>
    <div :class="searchboxClass">
      <input type="text" placeholder="Caută șeminee" />
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
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-sizing: border-box;

  &__name {
    width: 250px;
    display: flex;
    justify-content: flex-start;
    font-size: 40px;
    font-weight: bold;
    font-family: 'Plak', serif;
    letter-spacing: 0.5px;
    word-spacing: 3px;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
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
  height: 35px;
  width: 500px;
  border-radius: 50px;
  border: 2px solid black;
  padding-left: 40px;
  font-size: 15px;
  font-family: 'Merriweather', serif;
}
</style>
