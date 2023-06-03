<template>
  <div @click="toggleMenu" class="menu_icon">
    <div class="menu_icon__first_line" id="dropdown-icon-first-line"></div>
    <div class="menu_icon__second_line" id="dropdown-icon-second-line"></div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'MenuIcon',
  watch: {
    showMenu(newValue) {
      this.triggerIconAnimation(newValue);
    },
  },
  computed: {
    ...mapState(['showMenu']),
  },
  methods: {
    ...mapMutations(['setShowMenu']),
    triggerIconAnimation(newValue) {
      const iconFirstLine = document.getElementById('dropdown-icon-first-line');
      const iconSecondLine = document.getElementById('dropdown-icon-second-line');

      if (newValue) {
        iconFirstLine.classList.add('menu_icon__first_line__rotate');
        iconSecondLine.classList.add('menu_icon__second_line__rotate');

        iconFirstLine.classList.remove('menu_icon__first_line__rotate--reversed');
        iconSecondLine.classList.remove('menu_icon__second_line__rotate--reversed');
      } else {
        iconFirstLine.classList.add('menu_icon__first_line__rotate--reversed');
        iconSecondLine.classList.add('menu_icon__second_line__rotate--reversed');

        iconFirstLine.classList.remove('menu_icon__first_line__rotate');
        iconSecondLine.classList.remove('menu_icon__second_line__rotate');
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
      &--reversed {
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
      &--reversed {
        transform: rotate(0deg);
      }
    }
  }
}
</style>
