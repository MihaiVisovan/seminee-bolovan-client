<template>
  <div :class="containerClass">
    <Header />
    <DropdownMenu v-if="showMenu" />
    <Navbar />
    <Fireplace />
    <router-view :class="contentClass"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import DropdownMenu from '@/components/header/components/DropdownMenu.vue';
import Navbar from '@/components/navbar/Navbar.vue';
import Fireplace from '@/components/Fireplace.vue';
import Footer from '@/components/footer/Footer.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: { Header, Navbar, Footer, Fireplace, DropdownMenu },
  data() {
    return {
      containerClass: 'app',
    };
  },
  computed: {
    ...mapState(['showMenu']),
    contentClass() {
      return `${this.containerClass}__content`;
    },
  },
};
</script>

<style lang="scss">
.app {
  height: 100%;
  position: relative;
  &__content {
    min-height: 500px;
  }
}
</style>
