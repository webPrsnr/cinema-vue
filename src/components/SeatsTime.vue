<script setup lang="ts">
defineProps<{
  time: string
  date: Date
}>()
</script>
<template>
  <section class="seats__time">
    <h3>{{ time }}</h3>
    <div>{{ date.toLocaleDateString() }}</div>
  </section>
</template>

<style scoped>
.seats {
  &__time {
    background-color: var(--primary-white);
    border-radius: 1rem;
    box-shadow: var(--secondary-shadow);
    height: 3rem;
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
