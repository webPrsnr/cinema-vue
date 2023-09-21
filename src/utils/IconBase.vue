<script setup lang="ts">
interface IconBaseProps {
  width?: number
  height?: number
  iconName?: string
  iconColor?: string
}

const props = withDefaults(defineProps<IconBaseProps>(), {
  width: 18,
  height: 18,
  iconColor: 'currentColor',
  iconName: 'box'
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 18 18"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>
