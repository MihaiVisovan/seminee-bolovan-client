<template>
  <div :class="containerClass">
    <div :class="filterClass">Filters</div>
    <div :class="gridClass">
      <Card
        @click="goToProduct(product.details.title)"
        v-for="(product, index) in products"
        :key="index"
      >
        <template v-slot:card-image>
          <div :class="imageWrapperClass">
            <img :src="product.image" :class="imageClass" /></div
        ></template>
        <template v-slot:card-details>
          <div :class="detailsClass">
            <div :class="titleClass">{{ product.details.title }}</div>
            <div :class="priceWrapperClass">
              <span> {{ product.details.price }} </span>
              <span :class="priceCurrencyClass"> {{ product.details.currency }} </span>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/common/components/Card.vue';
export default {
  name: 'Products',
  components: {
    Card,
  },
  data() {
    return {
      containerClass: 'products',
      products: [
        {
          image:
            'http://semineebolovan.ro/wp-content/uploads/2017/09/AL19R_H_anim_0-300x320_center_center.png',
          details: { title: 'Albero AL19 R.H-D', price: 10532, currency: 'RON' },
        },
        {
          image: 'https://semineebolovan.ro/wp-content/uploads/2018/01/AL9R_G_H_anim_0.png',
          details: { title: 'Albero AL19 R.H-D', price: 10532, currency: 'RON' },
        },
        {
          image: 'https://semineebolovan.ro/wp-content/uploads/2018/01/burlane2.png',
          details: { title: 'Albero AL19 R.H-D', price: 10532, currency: 'RON' },
        },
        {
          image:
            'http://semineebolovan.ro/wp-content/uploads/2017/09/AL16L_G_H_anim_0-300x320_center_center.png"',
          details: { title: 'Albero AL19 R.H-D', price: 10532, currency: 'RON' },
        },
        {
          image: 'https://semineebolovan.ro/wp-content/uploads/2018/01/Distributie-aer-2.jpg',
          details: { title: 'Albero AL12 R.H-D', price: 10532, currency: 'RON' },
        },
        {
          image:
            'http://semineebolovan.ro/wp-content/uploads/2017/08/AL9S_H_anim_0-300x320_center_center.png',
          details: { title: 'Albero AL15 R.H-D', price: 10532, currency: 'RON' },
        },
        {
          image:
            'http://semineebolovan.ro/wp-content/uploads/2017/09/14R_G_H_anim_0-300x320_center_center.png',
          details: { title: 'Albero AL19 L.H-D', price: 7300, currency: 'RON' },
        },
        {
          image:
            'http://semineebolovan.ro/wp-content/uploads/2017/09/AL19L_H_anim_0-300x320_center_center.png',
          details: { title: 'Albero AL13 R.H-D', price: 7300, currency: 'RON' },
        },
        {
          image:
            'http://semineebolovan.ro/wp-content/uploads/2017/09/AL19R_H_anim_0-300x320_center_center.png',
          details: { title: 'Albero AL19 R.H-D', price: 7300, currency: 'RON' },
        },
        {
          image: 'https://semineebolovan.ro/wp-content/uploads/2018/01/AL9R_G_H_anim_0.png',
          details: { title: 'Albero AL19 R.H-D', price: 10532, currency: 'RON' },
        },
        {
          image: 'https://semineebolovan.ro/wp-content/uploads/2018/01/burlane2.png',
          details: { title: 'Albero AL25 R.G-D', price: 1032, currency: 'RON' },
        },
        {
          image:
            'http://semineebolovan.ro/wp-content/uploads/2017/09/AL16L_G_H_anim_0-300x320_center_center.png',
          details: { title: 'Marino AL19 R.H-D', price: 10532, currency: 'RON' },
        },
        {
          image: 'https://semineebolovan.ro/wp-content/uploads/2018/01/Distributie-aer-2.jpg',
          details: { title: 'Toro AL19 R.H-D', price: 10532, currency: 'RON' },
        },
        {
          image:
            'http://semineebolovan.ro/wp-content/uploads/2017/08/AL9S_H_anim_0-300x320_center_center.png',
          details: {
            title: 'Tero AL19 R.H-',
            price: 10.532,
            currency: 'RON',
          },
        },
        {
          image:
            'http://semineebolovan.ro/wp-content/uploads/2017/09/14R_G_H_anim_0-300x320_center_center.png',
          details: {
            title: 'Albero AL19 R.H-',
            price: 11500,
            currency: 'RON',
          },
        },
        {
          image:
            'http://semineebolovan.ro/wp-content/uploads/2017/09/AL19L_H_anim_0-300x320_center_center.png',
          details: { title: 'Albero AL125 R.H-D', price: 12532, currency: 'RON' },
        },
      ],
    };
  },
  computed: {
    filterClass() {
      return `${this.containerClass}__filter_panel`;
    },
    gridClass() {
      return `${this.containerClass}__grid`;
    },
    imageWrapperClass() {
      return `${this.gridClass}__image_wrapper`;
    },
    imageClass() {
      return `${this.gridClass}__image`;
    },
    detailsClass() {
      return `${this.gridClass}__details`;
    },
    titleClass() {
      return `${this.detailsClass}__title`;
    },
    priceWrapperClass() {
      return `${this.detailsClass}__price`;
    },
    priceCurrencyClass() {
      return `${this.priceWrapperClass}__currency`;
    },
  },
  methods: {
    goToProduct(id) {
      const dashedId = id.toLowerCase().replaceAll(' ', '-');
      this.$router.push({ name: 'Product', params: { productId: dashedId } });
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  padding: 25px 0;

  @media only screen and (min-width: $mobile) {
    padding: 25px;
  }

  &__filter_panel {
    width: 300px;
    margin: 15px 0;
    display: none;
    justify-content: center;
    align-items: center;
    font-size: $font-xxxl;
    font-family: 'Merriweather', serif;
    box-shadow: 3px 0px 4px 3px $color-light-grey;

    @media only screen and (min-width: $laptop) {
      display: flex;
    }
  }

  &__grid {
    padding: 0 15px;
    flex: 1;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;

    @media only screen and (min-width: $mobile) {
      justify-content: flex-start;
    }

    &__image_wrapper {
      height: 200px;
    }

    &__image {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }

    &__details {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      letter-spacing: 0.5px;

      &__title {
        font-weight: 700;
        font-size: $font-large;
      }

      &__price {
        font-weight: 600;
        font-size: $font-medium;
        color: $color-dark-grey;

        &__currency {
          padding-left: 3px;
        }
      }
    }
  }
}
</style>
