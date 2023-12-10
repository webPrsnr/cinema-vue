<script setup lang="ts">
import type { FilmInfo } from '@/listFilms'
import FilmSeans from './FilmSeans.vue'
import { defineAsyncComponent, provide } from 'vue'
import { useSetSeats } from '@/composable/useSetSeats'
import { useSetScroll } from '@/composable/useSetScroll'
import SpinnerWrapper from './ui/SpinnerWrapper.vue'
import { useToggle } from '@/composable/useToggle'
import AppHeading from './ui/AppHeading.vue'
import FAQ from '@/assets/icons/ask.svg'
import { enableOpacity } from '@/composable/useHeader'

//TODO
// 1. css

const props = defineProps<{
  card: FilmInfo
}>()

provide('id', props.card.id)

const { currentState, toggle } = useToggle()
enableOpacity()

const FilmSeats = defineAsyncComponent({
  loader: () =>
    new Promise<any>((res) => {
      setTimeout(() => res(import('./FilmSeats.vue')), 0)
    })
})

useSetScroll()
const { seats, setSeats } = useSetSeats(props.card.dates)

const chooseTimeHandler = (time: string, clickedDate: number) => {
  toggle()
  seats.value = { time, clickedDate }
}

const moveBackHandler = () => {
  // TODO исправить хэдер при скролле
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  setTimeout(() => {
    toggle()
  }, 600)
}
</script>
<template>
  <section>
    <AppHeading title="Подробнее о фильме">
      <FAQ class="head-icon" />
    </AppHeading>
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
      <SpinnerWrapper v-if="currentState()">
        <FilmSeats
          v-if="seats"
          :seats="setSeats"
          :date="seats.clickedDate"
          :id="card.id"
          @moveBackHandler="moveBackHandler"
        />
      </SpinnerWrapper>
    </div>
  </section>
</template>
<style scoped>
.head-icon {
  width: 25px;
  height: 25px;
  fill: var(--primary-white);
}

.wrapper {
  display: grid;

  &__film {
    display: grid;
    grid-template-columns: max-content 2fr 1fr;
    grid-column-gap: 0.5rem;
  }
}

.el {
  border: 1px solid red;

  &__description {
    display: flex;
    flex-direction: column;
  }

  &__year {
    flex-grow: 1;
  }
}

.poster {
  width: 280px;
  height: 420px;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  background-position: center;
}

.description {
  flex-grow: 1;
}

.info {
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-column-gap: 10px;
  row-gap: 5px;
}
</style>
