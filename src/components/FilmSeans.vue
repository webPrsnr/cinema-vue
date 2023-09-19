<script setup lang="ts">
import type { RentalDate } from '@/listFilms'

const props = defineProps<{
  dates: RentalDate[]
}>()
</script>
<template>
  <section class="session__wrapper">
    <h1>Все сеансы</h1>
    <section class="session" v-for="(date, index) in props.dates" :key="index">
      <h2 class="session__time">{{ date.date.toLocaleDateString() }}</h2>
      <div class="times">
        <section class="time" v-for="sess in date.session" :key="sess.time">
          <h3 class="time__title">{{ sess.time }}</h3>
        </section>
      </div>
    </section>
  </section>
</template>

<style scoped>
.session {
  border: 1px solid;
  border-color: rgba(120, 120, 128, 0.2);
  border-radius: 1rem;
  margin: 0.5rem 0;
}
.session__wrapper {
  height: 25rem;
  overflow: auto;
}
.session__time {
  padding: 0.7rem 0 0.7rem 1rem;
}
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
}
.times {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 5px 15px;
}

.time {
  padding: 0.8rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.time__title {
  line-height: 32px;
  font-size: 26px;
}
</style>
