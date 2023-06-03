<template>
  <div class="footer">
    <ul class="footer__wrapper">
      <li class="footer__content" v-for="(info, index) in footerInfo" :key="index">
        <div class="footer__title">{{ info.title }}</div>
        <ul class="footer__details">
          <li v-for="(detail, index) in info.details" :key="index">
            <span class="footer__details__title"> {{ detail.key }} </span>
            <span> {{ detail.value }} </span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Footer',
  computed: {
    ...mapState(['footerInfo']),
  },
};
</script>

<style lang="scss" scoped>
.footer {
  background: black;
  width: 100%;
  padding: 20px;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__content {
    display: flex;
    flex-direction: column;
    letter-spacing: 1.5px;
    padding-right: 30px;
    margin-bottom: 50px;

    @media only screen and (min-width: $desktop) {
      margin-bottom: 0px;
    }

    &__title {
      font-weight: 600;
      font-size: $font-xl;
      color: white;
      margin-bottom: 10px;
    }

    &__details {
      font-family: 'Merriweather', serif;
      font-size: $font-small;
      color: white;
      line-height: 20px;
      letter-spacing: 0px;

      &__title {
        font-weight: 600;
      }
    }
  }
}
</style>
