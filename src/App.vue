<template>
  <div :class="containerClass">
    <Header />
    <Menu v-if="showMenu" />
    <Navbar />
    <Fireplace />
    <router-view :class="routerViewClass"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import Fireplace from '@/components/Fireplace.vue';
import Footer from '@/components/Footer.vue';
import Menu from '@/components/Menu.vue';
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
    routerViewClass() {
      return `${this.containerClass}__router_view`;
    },
  },
};
</script>

<style lang="scss">
.app {
  position: relative;
  display: flex;
  flex-direction: column;

  &__router_view {
    min-height: 500px;
    padding: 25px 0;

    @media only screen and(min-width: $mobile) {
      padding: 25px 25px;
    }
  }
}
</style>
