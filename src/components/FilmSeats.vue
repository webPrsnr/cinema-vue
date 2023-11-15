<script setup lang="ts">
import type { FilmSession } from '@/listFilms'
import SeatsOrder from './SeatsOrder.vue'
import SeatsChairs from './SeatsChairs.vue'
import SeatsFaq from './SeatsFaq.vue'
import SeatsTime from './SeatsTime.vue'
import { ref } from 'vue'
const props = defineProps<{
  seats: FilmSession
  date: Date
}>()

const reserveSeats = ref<number[]>([])

const clickHandler = (seat: number) => {
  reserveSeats.value.push(seat)
}

const removeHandler = (id: number) => {
  const index = reserveSeats.value.indexOf(id)
  reserveSeats.value.splice(index, 1)
}
</script>
<template>
  <section class="seats__wrapper">
    <h2 class="seats__title">Доступные места</h2>
    <SeatsTime :time="props.seats.time" :date="props.date" />
    <div class="chairs__wrapper">
      <SeatsChairs
        :chairs="props.seats.totalSeats"
        :reservedGuest="props.seats.reserved"
        :reservedClient="reserveSeats"
        @click-handler="clickHandler"
        @remove-handler="removeHandler"
      />
      <SeatsOrder :seats="reserveSeats" @remove-order="removeHandler" />
    </div>
    <SeatsFaq />
  </section>
</template>

<style scoped>
.seats {
  &__wrapper {
    background-color: rgb(247, 248, 250);
    height: 100vh;
    border: var(--primary-border);
    border-radius: 1rem;
    position: relative;
  }

  &__title {
    padding: 1.5rem;
  }
}

.chairs__wrapper {
  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
}
</style>
