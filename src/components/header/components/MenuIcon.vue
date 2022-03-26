<template>
  <div @click="toggleMenu" :class="containerClass">
    <div :class="firstLineClass" id="dropdown-icon-first-line"></div>
    <div :class="secondLineClass" id="dropdown-icon-second-line"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'MenuIcon',
  data() {
    return {
      containerClass: 'menu_icon',
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
      const iconFirstLine = document.getElementById('dropdown-icon-first-line');
      const iconSecondLine = document.getElementById('dropdown-icon-second-line');

      if (newValue) {
        iconFirstLine.classList.add(this.firstLineRotateClass);
        iconSecondLine.classList.add(this.secondLineRotateClass);

        iconFirstLine.classList.remove(this.firstLineRotateReversedClass);
        iconSecondLine.classList.remove(this.secondLineRotateReversedClass);
      } else {
        iconFirstLine.classList.add(this.firstLineRotateReversedClass);
        iconSecondLine.classList.add(this.secondLineRotateReversedClass);

        iconFirstLine.classList.remove(this.firstLineRotateClass);
        iconSecondLine.classList.remove(this.secondLineRotateClass);
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
.menu_icon {
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
