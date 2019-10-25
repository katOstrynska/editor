<template>
  <div id="app">
    <panel></panel>
    <scene></scene>
  </div>
</template>

<script>
  import Panel from '@/components/Panel/index.vue';
  import Scene from '@/components/Scene/index.vue';

  export default {
    components: {
      Panel,
      Scene
    }
  }
</script>

<style lang="scss" scoped>
  @import "styles/global.scss";

  #app {
    height: 100%;
    display: flex;
  }
</style>
