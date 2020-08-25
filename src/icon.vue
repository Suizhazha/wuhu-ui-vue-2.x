<template>
  <svg class="wuhu-icon">

    <!-- ``中是JS字符串，${icon}是模板字符串的插值-->
    <use :xlink:href="`#i${name}`"></use>
  </svg>
</template>

<script lang="ts">
export default {
  name: 'icon.vue',
  props:['name']
};
</script>

<style lang="scss" scoped>
.wuhu-icon{
  width: 1em;
  height: 1em;
}
</style>