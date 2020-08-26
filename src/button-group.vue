<template>
<div class="wuhu-button-group">
  <slot></slot>
</div>
</template>

<script lang="ts">
export default {
  mounted() {
    for (let node of this.$children) {
      let name = node.nodeName.toLowerCase()
      if (name  !== 'button'){
        console.warn(`wuhu-button-group的子元素应全是wuhu-button,但你写的是￥{name}`);
      }
    }
  }
};
</script>

<style lang="scss">
.wuhu-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .g-button {
    border-radius: 0;
    margin-left: -1px;
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>