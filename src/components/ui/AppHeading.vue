<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="heading">
    <div class="heading__wrapper">
      <div class="heading__circle">
        <slot></slot>
      </div>
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<style scoped>
.heading {
  display: inline-block;
  margin: 0 0 1rem;
  padding: 0.25rem;
  border-radius: 0.85rem;
  background-color: var(--primary-white);
  box-shadow: var(--primary-shadow);

  &__wrapper {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  &__circle {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-icon);
    border-radius: 9999px;
  }
}
</style>
