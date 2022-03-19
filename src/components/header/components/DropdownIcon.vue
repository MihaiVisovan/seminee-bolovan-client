<template>
  <div @click="toggleMenu" :class="containerClass">
    <div :class="firstLineClass" id="menu-first-line"></div>
    <div :class="secondLineClass" id="menu-second-line"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Dropdown',
  data() {
    return {
      containerClass: 'dropdown',
    };
  },
  watch: {
    showMenu(newValue, oldValue) {
      this.triggerIconAnimation(newValue);
    },
  },
  computed: {
    ...mapState(['showMenu']),
    menuAnimationClass() {
      return `${this.containerClass}__animation`;
    },
    firstLineClass() {
      return `${this.containerClass}__first_line`;
    },
    firstLineRotateClass() {
      return `${this.firstLineClass}__rotate`;
    },
    firstLineRotateReversedClass() {
      return `${this.firstLineRotateClass}__reversed`;
    },
    secondLineClass() {
      return `${this.containerClass}__second_line`;
    },
    secondLineRotateClass() {
      return `${this.secondLineClass}__rotate`;
    },
    secondLineRotateReversedClass() {
      return `${this.secondLineRotateClass}__reversed`;
    },
  },
  methods: {
    ...mapMutations(['setShowMenu']),
    triggerIconAnimation(newValue) {
      const menuFirstLine = document.getElementById('menu-first-line');
      const menuSecondLine = document.getElementById('menu-second-line');

      if (newValue) {
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
    },
    toggleMenu() {
      this.triggerIconAnimation();

      this.setShowMenu(!this.showMenu);
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
      transform: translateY(5px) translateX(1px) rotate(45deg);
      &__reversed {
        transform: rotate(0deg);
      }
    }
  }
}
</style>
