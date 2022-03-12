<template>
  <div :class="containerClass">
    <Header />
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: { Header, Navbar, Footer },
  data() {
    return {
      containerClass: 'app',
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&display=swap');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Merriweather', serif;
}

.app {
  display: flex;
  flex-direction: column;
}
</style>
