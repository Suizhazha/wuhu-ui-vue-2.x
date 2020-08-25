<template>
  <div>
<button class="wuhu-button">提交</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'button.vue',

};
</script>

<style lang="scss" scoped>
.wuhu-button {
  font-size:var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover{
    border-color:var(--button-active-bg);
  }

  &:active {
    background-color:var(--border-color-hover);
  }
  &:focus{
    outline: none ;
  }
}
</style>