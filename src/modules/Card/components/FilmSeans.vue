<script setup lang="ts">
import type { RentalDate } from '@/listFilms'
import AppHeading from '@/components/ui/AppHeading.vue'
import Time from '@/assets/icons/time.svg'

const props = defineProps<{
  dates: RentalDate[]
}>()
const emit = defineEmits<{
  (e: 'chooseTime', time: string, date: number): void
}>()

const chooseSession = (time: string, date: number) => {
  emit('chooseTime', time, date)
}

const isDateExpired = (date: number) => {
  const currentDate = new Date()
  const [currentDay, currentMonth, currentYear] = [
    currentDate.getDate(),
    currentDate.getMonth(),
    currentDate.getFullYear()
  ]
  const initialDate = new Date(date)
  const [initialDay, inititalMonth, initialYear] = [
    initialDate.getDate(),
    initialDate.getMonth(),
    initialDate.getFullYear()
  ]
  const result =
    currentYear > initialYear
      ? false
      : currentMonth > inititalMonth
      ? false
      : currentDay > initialDay
      ? false
      : true
  return result
}

const isTimeExpired = (initialTime: string, date: number) => {
  const currentTime = new Date()
  const initialDate = new Date(date)
  const [initialDay, inititalMonth] = [initialDate.getDay(), initialDate.getMonth()]
  const [min, hour, currentDay, currentMonth] = [
    currentTime.getMinutes(),
    currentTime.getHours(),
    currentTime.getDay(),
    currentTime.getMonth()
  ]

  const convertedTime = `${hour}.${min}`

  const result =
    currentMonth === inititalMonth && currentDay === initialDay && convertedTime >= initialTime
      ? false
      : true
  return result
}
</script>
<template>
  <section class="session__wrapper">
    <AppHeading title="Все сеансы">
      <Time class="head-icon" />
    </AppHeading>
    <div class="scroll">
      <template v-for="(date, index) in props.dates" :key="index">
        <section class="session" v-if="isDateExpired(date.date)">
          <h2 class="session__time">{{ new Date(date.date).toLocaleDateString() }}</h2>
          <div class="times">
            <template v-for="sess in date.session" :key="sess.time">
              <section class="time" v-if="isTimeExpired(sess.time, date.date)">
                <h3
                  class="time__title"
                  @click="chooseSession(sess.time, new Date(date.date).getTime())"
                >
                  {{ sess.time }}
                </h3>
              </section>
            </template>
          </div>
        </section>
      </template>
    </div>
  </section>
</template>

<style scoped>
.session {
  border: var(--primary-border);
  border-radius: 1rem;
  margin: 0.5rem 0;

  &:first-child {
    margin-top: 0;
  }

  &__time {
    padding: 0.7rem 0 0.7rem 1rem;
  }
}

.scroll {
  height: 24rem;
  overflow: auto;
}

.head-icon {
  width: 25px;
  height: 25px;
  fill: var(--primary-white);
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgba(0 0 0 / 20%);
  border-radius: 0.5rem;
}

.times {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 5px 15px;
  cursor: pointer;
}

.time {
  padding: 0.8rem;
  box-shadow: var(--primary-shadow);

  &__title {
    line-height: 32px;
    font-size: 26px;
  }
}
</style>
