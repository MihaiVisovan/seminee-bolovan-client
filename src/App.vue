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
  components: { Header, Navbar, Footer },
  name: 'App',
  data() {
    return {
      containerClass: 'app',
    };
  },
};
</script>

<style>
@import url(http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900);
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

.app {
  display: flex;
  flex-direction: column;
}
</style>
