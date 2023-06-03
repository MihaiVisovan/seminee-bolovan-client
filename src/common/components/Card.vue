<template>
  <div class="card">
    <div class="card__image">
      <slot name="card-image"></slot>
    </div>
    <div class="card__details">
      <slot name="card-details"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style lang="scss" scoped>
.card {
  background: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 4px 2px $color-light-grey;
  margin: 15px;
  padding: 20px;
  width: 100%;
  cursor: pointer;
  min-width: 150px;

  &:hover {
    box-shadow: 0px 1px 4px 4px $color-light-grey;
  }

  @media only screen and (min-width: $mobile) {
    width: calc(50% - 30px);
  }

  @media only screen and (min-width: $laptop) {
    width: calc(33.33% - 30px);
  }

  @media only screen and (min-width: $desktop) {
    width: calc(25% - 30px);
  }

  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
  }

  &__details {
    margin-top: 20px;
  }
}
</style>
