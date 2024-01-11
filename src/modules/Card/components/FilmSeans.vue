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
  const [currentDate, currentMonth] = [new Date().getDate(), new Date().getMonth()]
  const [initialDate, initialMonth] = [new Date(date).getDate(), new Date(date).getMonth()]

  if (currentMonth === initialMonth) {
    if (currentDate <= initialDate) return true
  }
  return false
}

const isTimeExpired = (initialTime: string, date: number) => {
  const currentDate = new Date().getDate()
  const initialDate = new Date(date).getDate()
  const currentHour = new Date().getHours()

  if (currentDate === initialDate) {
    if (currentHour >= parseInt(initialTime)) {
      console.log('init')

      return false
    }
  }
  return true
}
</script>
<template>
  <section>
    <AppHeading title="Все сеансы">
      <Time class="head-icon" />
    </AppHeading>
    <div class="film-seans">
      <template v-for="(date, index) in props.dates" :key="index">
        <section v-if="isDateExpired(date.date)" class="film-seans__session">
          <h2 class="film-seans__time">{{ new Date(date.date).toLocaleDateString() }}</h2>
          <div class="film-seans__container">
            <template v-for="session in date.session" :key="session.time">
              <section
                v-if="isTimeExpired(session.time, date.date)"
                class="film-seans__available-container"
              >
                <h3
                  class="film-seans__available-title"
                  @click="chooseSession(session.time, new Date(date.date).getTime())"
                >
                  {{ session.time }}
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
.film-seans {
  display: flex;
  height: 15rem;
  overflow: auto;
  gap: 8px;

  @media (width <= 1370px) {
    display: block;
    height: 22rem;
  }

  &__session {
    border: var(--primary-border);
    border-radius: 1rem;
    margin: 0.5rem 0;

    &:first-child {
      @media (width <= 1370px) {
        margin-top: 0;
      }
    }
  }

  &__time {
    padding: 0.7rem 0 0.7rem 1rem;
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
    padding: 5px 8px;
    cursor: pointer;
  }

  &__available-container {
    padding: 0.8rem;
    box-shadow: var(--primary-shadow);
  }

  &__available-title {
    line-height: 32px;
    font-size: 26px;
  }
}
</style>
