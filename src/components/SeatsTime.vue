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
.seats__time {
  background-color: white;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  height: 3rem;
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
