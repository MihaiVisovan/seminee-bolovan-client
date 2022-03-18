<template>
  <div :class="containerClass">
    <div :class="infoClass" v-for="(info, index) in infoList" :key="index">
      <div :class="titleClass">{{ info.title }}</div>
      <div :class="detailsClass" v-for="(detail, index) in info.details" :key="index">
        <span :class="detailsTitleClass"> {{ detail.key }} </span>
        <span> {{ detail.value }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      containerClass: 'footer',
      infoList: [
        {
          title: 'CONTACT',
          details: [
            {
              key: 'Adresa: ',
              value: 'Alba Iulia, B-dul Tudor Vladimirescu, nr. 66',
            },
            {
              key: 'Tel: ',
              value: '0744.792.373, 0747.297.127',
            },
            {
              key: 'Fax: ',
              value: '0358.110.556',
            },
            {
              key: 'Email: ',
              value: 'semineebolovan@gmail.com',
            },
          ],
        },
        {
          title: 'SUPORT CLIENȚI',
          details: [
            {
              key: 'Adresa: ',
              value: 'Alba Iulia, B-dul Tudor Vladimirescu, nr. 66',
            },
            {
              key: 'Tel: ',
              value: '0744.792.373, 0747.297.127',
            },
            {
              key: 'Fax: ',
              value: '0358.110.556',
            },
            {
              key: 'Email: ',
              value: 'semineebolovan@gmail.com',
            },
          ],
        },
        {
          title: 'COMENZI ȘI LIVRARE',
          details: [
            {
              key: 'Adresa: ',
              value: 'Alba Iulia, B-dul Tudor Vladimirescu, nr. 66',
            },
            {
              key: 'Tel: ',
              value: '0744.792.373, 0747.297.127',
            },
            {
              key: 'Fax: ',
              value: '0358.110.556',
            },
            {
              key: 'Email: ',
              value: 'semineebolovan@gmail.com',
            },
          ],
        },
      ],
    };
  },
  computed: {
    infoClass() {
      return `${this.containerClass}__info`;
    },
    titleClass() {
      return `${this.infoClass}__title`;
    },
    detailsClass() {
      return `${this.infoClass}__details`;
    },
    detailsTitleClass() {
      return `${this.detailsClass}__title`;
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 100%;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: black;

  &__info {
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
