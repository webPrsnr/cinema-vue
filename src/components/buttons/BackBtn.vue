<script setup lang="ts">
defineProps<{
  title: string
  position: 'left' | 'right'
}>()
</script>

<template>
  <section class="seats-back__wrapper">
    <slot v-if="position === 'left'" />
    <span class="seats-back__btn">{{ title }}</span>
    <slot v-if="position === 'right'" />
  </section>
</template>

<style scoped>
.seats-back {
  &__wrapper {
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
}
</style>
