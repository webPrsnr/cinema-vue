<script setup lang="ts">
defineProps<{
  time: string
  date: number
}>()
</script>
<template>
  <section class="seats__time">
    <h3>{{ time }}</h3>
    <div>{{ new Date(date).toLocaleDateString() }}</div>
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
    margin: 3rem auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
