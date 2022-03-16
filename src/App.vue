<template>
  <div :class="containerClass">
    <Header />
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

export default {
  name: 'App',
  components: { Header, Navbar, Footer, Fireplace },
  data() {
    return {
      containerClass: 'app',
    };
  },
  computed: {
    routerViewClass() {
      return `${this.containerClass}__router_view`;
    },
  },
};
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;

  &__router_view {
    min-height: 500px;
  }
}

// global fonts
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=Roboto:wght@300;400;500;700&display=swap');
@font-face {
  font-family: 'Plak';
  src: url('@/assets/fonts/Neue Plak Condensed Black.ttf') format('truetype');
  font-weight: 800;
}

@font-face {
  font-family: 'Plak';
  src: url('@/assets/fonts/Neue Plak Condensed Bold.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: 'Plak';
  src: url('@/assets/fonts/Neue Plak Condensed SemiBold.ttf') format('truetype');
  font-weight: 600;
}

@font-face {
  font-family: 'Plak';
  src: url('@/assets/fonts/Neue Plak Condensed Regular.ttf') format('truetype');
  font-weight: normal;
}

// global styling
* {
  box-sizing: border-box;
  word-break: break-all;
  object-fit: contain;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
