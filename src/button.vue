<template>
  <button class="wuhu-button" :class="{[`icon-${iconPosition}`]:true}">
<wuhu-icon v-if="icon" :name = 'icon'></wuhu-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script lang="ts">
export default {
  name: 'button.vue',
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: 'left'
    }
  }
};
</script>

<style lang="scss" scoped>
.wuhu-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);


  //有时inline-flex会出现上下不对齐的bug,添加 vertical-align: middle; 解决
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &:hover {
    border-color: var(--button-active-bg);
  }

  &:active {
    background-color: var(--border-color-hover);
  }

  &:focus {
    outline: none;
  }

  > .content {
    order: 2;
  }

  > .icon {
    order: 1;
    margin-right: .3em;
  }

  &.icon-right {
    .content {
      order: 1;
    }

    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .3em;
    }
  }
}
</style>