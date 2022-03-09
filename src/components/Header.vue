<template>
  <div :class="containerClass">
    <div :class="brandNameClass">Șeminee Bolovan</div>
    <div :class="searchBoxClass">
      <input type="text" placeholder="Caută șeminee" />
    </div>
    <div :class="cartClass">
      <font-awesome-icon :style="{ height: '30px' }" icon="shopping-cart" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      containerClass: 'header',
    };
  },
  computed: {
    brandNameClass() {
      return `${this.containerClass}__name`;
    },
    searchBoxClass() {
      return `${this.containerClass}__search`;
    },
    cartClass() {
      return `${this.containerClass}__cart`;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-sizing: border-box;

  &__name {
    color: black;
    width: 250px;
    display: flex;
    justify-content: flex-start;
    font-size: 30px;
    font-weight: 500;

    &:hover {
      cursor: pointer;
      opacity: 0.6;
    }
  }

  &__cart {
    width: 250px;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
}

input[type='text'] {
  height: 40px;
  width: 500px;
  border-radius: 50px;
  border: 3px solid black;
  padding-left: 10px;
  font-size: 20px;
}
</style>
