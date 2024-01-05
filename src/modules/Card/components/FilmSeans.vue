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
  <section class="session__wrapper">
    <AppHeading title="Все сеансы">
      <Time class="head-icon" />
    </AppHeading>
    <div class="scroll">
      <template v-for="(date, index) in props.dates" :key="index">
        <section v-if="isDateExpired(date.date)" class="session">
          <h2 class="session__time">{{ new Date(date.date).toLocaleDateString() }}</h2>
          <div class="times">
            <template v-for="session in date.session" :key="session.time">
              <section v-if="isTimeExpired(session.time, date.date)" class="time">
                <h3
                  class="time__title"
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
