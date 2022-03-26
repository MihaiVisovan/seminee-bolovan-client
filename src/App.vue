<template>
  <div :class="containerClass">
    <Header />
    <Menu v-if="showMenu" />
    <Navbar />
    <Fireplace />
    <router-view :class="contentClass"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import Menu from '@/components/header/components/Menu.vue';
import Navbar from '@/components/navbar/Navbar.vue';
import Fireplace from '@/common/components/Fireplace.vue';
import Footer from '@/components/footer/Footer.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: { Header, Navbar, Footer, Fireplace, Menu },
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
    padding: 15px;

    @media screen and (min-width: $laptop) {
      padding: 50px;
    }
  }
}
</style>
