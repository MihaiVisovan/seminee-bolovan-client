<template>
  <div class="product">
    <div class="product__section product__section__one">
      <div class="product__divider product__divider__gallery">
        <Gallery />
      </div>
      <div class="product__divider product__divider__product_info">
        <ProductInfo />
      </div>
    </div>
    <div class="product__section product__section__two">
      <ProductBenefits />
    </div>
    <div class="product__section product__section__three"></div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Gallery from '@/components/product/Gallery.vue';
import ProductInfo from '@/components/product/ProductInfo.vue';
import ProductBenefits from '@/components/product/ProductBenefits.vue';

export default {
  name: 'Product',
  components: {
    Gallery,
    ProductInfo,
    ProductBenefits,
  },
  created() {
    const productId = this.$route.params.productId;
    this.setProduct(productId);
  },
  computed: {
    ...mapState(['product']),
  },
  methods: {
    ...mapActions(['setProduct']),
  },
};
</script>

<style lang="scss" scoped>
.product {
  display: flex;
  flex-direction: column;
  padding: 0;
  box-shadow: -2px -4px 10px -3px grey;

  &__section {
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: $tablet) {
      flex-direction: row;
    }

    &__one {
    }

    &__two {
    }

    &__three {
    }
  }

  &__divider {
    width: 100%;

    @media only screen and (min-width: $tablet) {
      width: 50%;
    }

    @media only screen and (min-width: $laptop) {
      padding-top: 50px;
    }

    &__gallery {
      padding: 30px 0;
      background-color: #f2f2f2;
    }

    &__product_info {
      padding: 30px 0;

      @media only screen and (min-width: $tablet) {
        padding: 30px;
      }

      box-shadow: -5px 0px 8px -7px grey;
    }
  }
}
</style>
