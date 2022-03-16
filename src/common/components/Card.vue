<template>
  <div :class="containerClass">
    <div :class="imageWrapperClass">
      <slot name="card-image"></slot>
    </div>
    <div :class="detailsWrapperClass">
      <slot name="card-details"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      containerClass: 'card',
    };
  },
  computed: {
    imageWrapperClass() {
      return `${this.containerClass}__image_wrapper`;
    },
    detailsWrapperClass() {
      return `${this.containerClass}__details_wrapper`;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 4px 2px #dcdcdc;
  width: calc(25% - 30px);
  margin: 15px 15px;
  padding: 15px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 1px 4px 4px #dcdcdc;
  }

  &__image_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__details_wrapper {
    margin-top: 20px;
  }
}
</style>
