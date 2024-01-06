<script setup lang="ts">
defineProps<{
  location: 'list' | 'card'
  limit: number
}>()

const isAdult = (limit: number) => limit === 18
</script>
<template>
  <span
    :class="[
      location === 'list' ? 'age__list' : 'age__card',
      isAdult(limit) ? 'age__adult-content' : 'age__safe-content'
    ]"
    >{{ limit }}+</span
  >
</template>

<style scoped>
.age {
  &__list {
    color: var(--primary-white);
    padding: 0.25rem 0.1rem;
  }

  &__card {
    padding: 0.5rem;
    display: inline;
    border: 2px solid var(--primary-icon);
    border-radius: 0.75rem;
  }

  &__adult-content {
    background-color: var(--primary-danger);
    color: var(--primary-white);
    border: none;
  }

  &__safe-content {
    background-color: var(--secondary-icon);
  }
}
</style>
