<script setup lang="ts">
import type { RentalDate } from '@/listFilms'
import AppHeading from './ui/AppHeading.vue'
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
</script>
<template>
  <section class="session__wrapper">
    <AppHeading title="Все сеансы">
      <Time class="head-icon" />
    </AppHeading>
    <div class="scroll">
      <section class="session" v-for="(date, index) in props.dates" :key="index">
        <h2 class="session__time">{{ new Date(date.date).toLocaleDateString() }}</h2>
        <div class="times">
          <section class="time" v-for="sess in date.session" :key="sess.time">
            <h3
              class="time__title"
              @click="chooseSession(sess.time, new Date(date.date).getTime())"
            >
              {{ sess.time }}
            </h3>
          </section>
        </div>
      </section>
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
