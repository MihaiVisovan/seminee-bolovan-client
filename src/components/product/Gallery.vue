<template>
  <div class="gallery">
    <Carousel id="gallery" :items-to-show="1" :wrap-around="true" v-model="currentSlide">
      <Slide v-for="(image, index) in product?.images" :key="index">
        <img :src="image" class="gallery__image" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>

    <Carousel
      id="thumbnails"
      :items-to-show="3"
      :wrap-around="true"
      v-model="currentSlide"
      ref="carousel"
    >
      <Slide v-for="(image, index) in product?.images" :key="index">
        <img :src="image" @click="slideTo(index)" class="gallery__thumbnails" />
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { mapState } from 'vuex';

export default {
  name: 'Gallery',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  computed: {
    ...mapState(['product']),
  },
  data: () => ({
    currentSlide: 0,
  }),
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
  },
};
</script>

<style lang="scss">
.gallery {
  height: 100%;
  width: 100%;
  padding: 0 30px;

  &__image {
    height: 250px;
    width: 250px;

    @media only screen and (min-width: $tablet) {
      height: 350px;
      width: 350px;
    }

    @media only screen and (min-width: $laptop) {
      height: 450px;
      width: 450px;
    }
  }

  &__thumbnails {
    width: 75px;
    height: 75px;

    @media only screen and (min-width: $tablet) {
      width: 125px;
      height: 125px;
    }

    @media only screen and (min-width: $laptop) {
      width: 150px;
      height: 150px;
    }
  }
}

.carousel__prev,
.carousel__next,
.carousel__icon {
  height: 50px;
  width: 50px;
}
</style>
