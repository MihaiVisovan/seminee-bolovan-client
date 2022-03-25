<template>
  <div :class="containerClass">
    <video autoplay muted loop>
      <source src="@/assets/videos/fireplace.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: 'Fireplace',
  data() {
    return {
      containerClass: 'fireplace',
    };
  },
};
</script>

<style lang="scss" scoped>
video {
  padding: 0;
  border: none;
  margin: 0;
  width: 100%;
  height: 200px;
  background: black;
  display: block;
}
</style>
