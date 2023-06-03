<template>
  <div class="button">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.button {
  font-size: $font-small;
  font-family: 'Merriweather', serif;
  letter-spacing: 1px;
  font-weight: 400;
  box-shadow: 0px 0px 3px 3px $color-light-grey;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: 0 15px;
  width: 100%;
  cursor: pointer;
  color: white;
  background: black;
  font-weight: bold;

  &:hover {
    color: black;
    background: white;
  }
}
</style>
