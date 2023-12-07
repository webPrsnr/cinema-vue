<script setup lang="ts">
import type { FilmSession } from '@/listFilms'
import SeatsOrder from './SeatsOrder.vue'
import SeatsChairs from './SeatsChairs.vue'
import SeatsFaq from './SeatsFaq.vue'
import SeatsTime from './SeatsTime.vue'
import SeatsBackBtn from './SeatsBackBtn.vue'
import { inject, isReactive, ref } from 'vue'
import { useGetLC } from '@/composable/useLocalStorage'

const id = inject('id') as number

const props = defineProps<{
  seats: FilmSession
  date: number
}>()

// const res =
//   useGetLC(id, props.seats.time, props.date.getTime())?.concat(props.seats.reserved) ||
//   props.seats.reserved

let res = useGetLC(id, props.seats.time, props.date) || props.seats.reserved
!isReactive(res) && (res = res.concat(props.seats.reserved))

const emit = defineEmits<{
  (e: 'moveBackHandler'): void
}>()

const reserveSeats = ref<number[]>([])

const clickHandler = (seat: number) => {
  reserveSeats.value.push(seat)
}

const removeHandler = (id: number) => {
  const index = reserveSeats.value.indexOf(id)
  reserveSeats.value.splice(index, 1)
}

const moveBackHandler = () => {
  emit('moveBackHandler')
}
</script>
<template>
  <section class="seats__wrapper">
    <SeatsTime :time="props.seats.time" :date="props.date" />
    <SeatsBackBtn @click="moveBackHandler" />
    <div class="chairs__wrapper">
      <SeatsChairs
        :chairs="props.seats.totalSeats"
        :reservedGuest="res"
        :reservedClient="reserveSeats"
        @click-handler="clickHandler"
        @remove-handler="removeHandler"
      />
      <SeatsOrder
        :seats="reserveSeats"
        @remove-order="removeHandler"
        :date="date"
        :time="seats.time"
      />
    </div>
    <SeatsFaq />
  </section>
</template>

<style scoped>
.seats {
  &__wrapper {
    background-color: rgb(247 248 250);
    height: 100vh;
    border: var(--primary-border);
    border-radius: 1rem;
    position: relative;
  }

  &__title {
    padding: 2.5rem;
  }
}

.chairs {
  &__wrapper {
    display: grid;
    grid-template-columns: 3fr 1fr;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
  }
}
</style>
