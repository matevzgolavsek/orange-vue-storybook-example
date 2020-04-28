<template>
  <button type="button" class="button" @click="handleClick" :disabled="isDisabled">
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'o-button',
    props: {
      isDisabled: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleClick(e) {
        this.$emit('buttonClick', e);
      }
    }
  }
</script>