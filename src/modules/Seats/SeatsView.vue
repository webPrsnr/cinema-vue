<script setup lang="ts">
import type { FilmSession } from '@/listFilms'
import SeatsOrder from './components/SeatsOrder.vue'
import SeatsChairs from './components/SeatsChairs.vue'
import SeatsFaq from './components/SeatsFaq.vue'
import SeatsTime from './components/SeatsTime.vue'
import BackBtn from '@/components/buttons/BackBtn.vue'
import ArrowUp from '@/assets/icons/arrow-up.svg'
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

let res = useGetLC({ id, time: props.seats.time, date: props.date }) || props.seats.reserved
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

const clearHandler = () => {
  const length = reserveSeats.value.length
  reserveSeats.value.splice(0, length)
  emit('moveBackHandler')
}

const moveBackHandler = () => {
  emit('moveBackHandler')
}
</script>
<template>
  <section class="seats__wrapper">
    <SeatsTime :time="props.seats.time" :date="props.date" />
    <BackBtn title="Назад" position="right" class="back-btn" @click="moveBackHandler">
      <ArrowUp class="arrow-icon" />
    </BackBtn>
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
        @clear-handler="clearHandler"
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

.back-btn {
  left: 1rem;
  top: 5rem;
}

.arrow-icon {
  width: 18px;
  height: 18px;
  stroke: var(--primary-icon);
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
