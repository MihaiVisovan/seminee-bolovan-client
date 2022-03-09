<template>
  <div :class="containerClass">Footer</div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      containerClass: 'footer',
    };
  },
};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: black;
  position: absolute;
  bottom: 0;
}
</style>
