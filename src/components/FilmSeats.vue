<script setup lang="ts">
import type { FilmSession } from '@/listFilms'
import SeatsOrder from './SeatsOrder.vue'
import { ref } from 'vue'
const props = defineProps<{
  seats: FilmSession
  date: Date
}>()
const isReserved = (seat: number) => props.seats.reserved.includes(seat)

const reserveSeats = ref<number[]>([])

const seatsWrapper = ref<HTMLElement | null>(null)

const RESERVED_NAME = 'faq__reserved'

const clickHandler = (seat: number, event: MouseEvent) => {
  const element = event.target as HTMLDivElement
  if (element.classList.contains(RESERVED_NAME)) {
    //TODO
    const index = reserveSeats.value.indexOf(seat)
    reserveSeats.value.splice(index, 1)
    element.classList.remove(RESERVED_NAME)
    return
  }
  reserveSeats.value.push(seat)
  element.classList.add('faq__reserved')
}

const removeHandler = (id: number) => {
  //TODO
  const index = reserveSeats.value.indexOf(id)
  reserveSeats.value.splice(index, 1)
  seatsWrapper.value?.children[id - 1].classList.remove(RESERVED_NAME)
}
</script>
<template>
  <section class="seats__wrapper">
    <h2 class="seats__title">Доступные места</h2>
    <section class="seats__time">
      <h3>{{ props.seats.time }}</h3>
      <div>{{ props.date.toLocaleDateString() }}</div>
    </section>
    <div class="chairs__wrapper">
      <div class="seats__chairs" ref="seatsWrapper">
        <div
          type="button"
          class="seats__chair"
          v-for="chair in props.seats.totalSeats"
          :key="chair"
          :class="isReserved(chair) ? `faq__circle_red` : ``"
          v-tooltip.top="chair"
          @click="clickHandler(chair, $event)"
        ></div>
      </div>
      <SeatsOrder :seats="reserveSeats" @remove-order="removeHandler" />
    </div>
    <section class="seats__faq">
      <div class="faq__circle faq__circle_blue"></div>
      <h4>свободно</h4>
      <div class="faq__circle faq__circle_red"></div>
      <h4>занято</h4>
    </section>
  </section>
</template>

<style scoped>
.seats__wrapper {
  background-color: rgb(247, 248, 250);
  height: 100vh;
  border: 1px solid rgba(120, 120, 128, 0.2);
  border-radius: 1rem;
  position: relative;
}
.seats__title {
  padding: 1.5rem;
}
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

.chairs__wrapper {
  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
}
.seats__chairs {
  border-radius: 0.5rem;
  display: grid;
  gap: 1.5rem;
  justify-content: center;
  grid-template-columns: repeat(8, 1rem);
  margin-bottom: 0.5rem;
}

.seats__chair {
  padding: 1rem;
  border-radius: 0.175rem;
  cursor: pointer;
  background-color: rgb(125, 177, 229);
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}
.seats__faq {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
  gap: 0.2rem;
  background-color: white;
  padding: 0.5rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
}
.faq__circle {
  border-radius: 9999px;
  width: 0.75rem;
  height: 0.75rem;
}
.faq__circle_blue {
  background-color: rgb(125, 177, 229);
}
.faq__reserved {
  background-color: rgb(255, 170, 0);
}
.faq__circle_red {
  background-color: rgba(128, 128, 128, 0.5);
  cursor: not-allowed;
  pointer-events: none;
}
</style>
