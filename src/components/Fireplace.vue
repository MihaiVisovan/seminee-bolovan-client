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
  width: 100% !important;
  height: 200px !important;
  background: black;
}
</style>
