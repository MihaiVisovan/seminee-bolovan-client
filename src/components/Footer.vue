<template>
  <div :class="containerClass">
    <div :class="infoClass" v-for="(info, index) in infoList" :key="index">
      <div :class="titleClass">{{ info.title }}</div>
      <div :class="detailsClass" v-for="(detail, index) in info.details" :key="index">
        <b> {{ detail.key }} </b>
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
          title: 'Contact',
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
          title: 'Suport clienți',
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
          title: 'Comenzi și livrare',
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
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 200px;
  padding: 25px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background: black;

  &__info {
    display: flex;
    flex-direction: column;
    padding-right: 15px;

    &__title {
      font-weight: bold;
      font-size: 18px;
      color: white;
      margin-bottom: 10px;
    }

    &__details {
      font-size: 14px;
      color: white;
      line-height: 20px;
    }
  }
}
</style>
