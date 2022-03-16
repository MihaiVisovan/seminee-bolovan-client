<template>
  <div :class="containerClass">
    <div :class="gridClass">
      <Card
        @click="goToProductsPage(category.details)"
        v-for="(category, index) in categories"
        :key="index"
      >
        <template v-slot:card-image>
          <div :class="imageWrapperClass">
            <img :src="category.image" :class="imageClass" />
          </div>
        </template>
        <template v-slot:card-details>
          <div :class="detailsClass">
            {{ category.details }}
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '@/common/components/Card.vue';
export default {
  name: 'Categories',
  components: {
    Card,
  },
  data() {
    return {
      containerClass: 'categories',
      categories: [
        {
          image: 'https://semineebolovan.ro/wp-content/uploads/2018/01/AL9R_H_anim_0.png',
          details: 'Focare semineu',
        },
        {
          image: 'https://semineebolovan.ro/wp-content/uploads/2018/01/AL9R_G_H_anim_0.png',
          details: 'Termocamine',
        },
        {
          image: 'https://semineebolovan.ro/wp-content/uploads/2018/01/burlane2.png',
          details: 'Burlane din otel',
        },
        {
          image: 'https://semineebolovan.ro/wp-content/uploads/2018/01/grill_gall01_alpha.png',
          details: 'Bioseminee',
        },
        {
          image: 'https://semineebolovan.ro/wp-content/uploads/2018/01/Distributie-aer-2.jpg',
          details: 'Elemente distributie aer',
        },
        {
          image: 'https://semineebolovan.ro/wp-content/uploads/2018/01/SL_56x56x9_perspective_.png',
          details: 'Grile aer',
        },
        {
          image: 'https://semineebolovan.ro/wp-content/uploads/2018/01/lupo_m_7-copy.png',
          details: 'Sobe pe lemne',
        },
        {
          image: 'https://semineebolovan.ro/wp-content/uploads/2018/01/WCPW02_1.png',
          details: 'Acumulatoare de caldura',
        },
      ],
    };
  },
  computed: {
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
  },
  methods: {
    goToProductsPage(id) {
      const dashedId = id.toLowerCase().replaceAll(' ', '-');
      this.$router.push({ name: 'Products', params: { categoryId: dashedId } });
    },
  },
};
</script>

<style lang="scss" scoped>
.categories {
  width: 100%;
  margin: 50px 0;

  &__grid {
    max-width: 1200px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;

    &__image_wrapper {
      height: 200px;
    }

    &__image {
      height: 100%;
      width: 100%;
    }

    &__details {
      font-family: 'Merriweather', serif;
      font-weight: 600;
      font-size: 18px;
    }
  }
}
</style>
