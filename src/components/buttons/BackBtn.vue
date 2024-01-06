<script setup lang="ts">
defineProps<{
  title: string
  position: 'left' | 'right'
}>()
</script>

<template>
  <section class="seats-back">
    <slot v-if="position === 'left'" />
    <span>{{ title }}</span>
    <slot v-if="position === 'right'" />
  </section>
</template>

<style scoped>
.seats-back {
  position: absolute;
  display: inline-flex;
  gap: 0.25rem;
  align-items: flex-start;
  background-color: var(--primary-white);
  padding: 1rem;
  border-radius: 0.85rem;
  box-shadow: var(--secondary-shadow);
  cursor: pointer;

  &:hover {
    background-color: var(--disabled-btn);
  }
}
</style>
