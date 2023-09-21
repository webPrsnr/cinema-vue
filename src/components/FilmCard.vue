<script setup lang="ts">
import type { FilmInfo } from '@/listFilms'
import { converToHour } from '@/utils/convertToHour'
import FilmSeans from './FilmSeans.vue'
import { defineAsyncComponent } from 'vue'
import AppSpinner from './ui/AppSpinner.vue'
import { useSetSeats } from '@/composable/useSetSeats'

//TODO
// 1. css

const props = defineProps<{
  card: FilmInfo
}>()

const FilmSeats = defineAsyncComponent({
  loader: () =>
    new Promise<any>((res) => {
      setTimeout(() => res(import('./FilmSeats.vue')), 2000)
    }),
  loadingComponent: AppSpinner
})

const { seats, isSeatsAvailable, setSeats } = useSetSeats(props.card.dates)

const chooseTimeHandler = (time: string, clickedDate: Date) => {
  seats.value = { time, clickedDate }
}
</script>
<template>
  <section>
    <h1>Подробнее о фильме</h1>
    <div class="wrapper">
      <div class="wrapper__film">
        <section class="el">
          <div class="poster" :style="`background-image:url(${props.card.imgTitle})`"></div>
        </section>
        <section class="el el__description">
          <h1>О фильме</h1>
          <div class="el__description description">
            <section class="el__year">
              <h2>Возрастные ограничения</h2>
            </section>
            <section class="el__about">
              <h2>Подробнее о фильме</h2>
              <div class="info">
                <div>Старт проката</div>
                <div>{{ props.card.start.toLocaleDateString() }}</div>
                <div>Режисер</div>
                <div>{{ props.card.director }}</div>
                <div>В главных ролях</div>
                <div>
                  <span v-for="actor in props.card.starring" :key="actor">{{ `${actor}, ` }}</span>
                </div>
                <div>Описание</div>
                <div>
                  {{ props.card.description }}
                </div>
              </div>
            </section>
          </div>
        </section>
        <FilmSeans @choose-time="chooseTimeHandler" :dates="props.card.dates" />
      </div>
      <div v-show="isSeatsAvailable" class="seats">
        <FilmSeats v-if="seats" :seats="setSeats" :date="seats.clickedDate" />
      </div>
    </div>
  </section>
</template>
<style scoped>
.wrapper {
  display: grid;
}
.el {
  border: 1px solid red;
}
.wrapper__film {
  display: grid;
  grid-template-columns: max-content 2fr 1fr;
  grid-column-gap: 0.5rem;
}
.poster {
  width: 280px;
  height: 420px;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  background-position: center;
}
.el__description {
  display: flex;
  flex-direction: column;
}
.description {
  flex-grow: 1;
}
.el__year {
  flex-grow: 1;
}
.info {
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 5px;
}
.seats {
  padding: 1.7rem 1rem;
}
</style>
