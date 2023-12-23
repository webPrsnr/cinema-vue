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
import BackBtn from '@/components/ui/BackBtn.vue'
import ListIcon from '@/assets/icons/list.svg'
import { enableOpacity } from '@/composable/useHeader'
import { useHead } from '@unhead/vue'
import { converToHour } from '@/utils/convertToHour'
import { joinGenres } from '@/utils/joinGenres'

//TODO
// 1. css

const props = defineProps<{
  card: FilmInfo
}>()

const emit = defineEmits<{
  (e: 'update', props: null): void
}>()

provide('id', props.card.id)

useHead({
  title: `В-Синема. ${props.card.name}`,
  meta: [{ name: 'description', content: props.card.description }]
})

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

const listPageHandler = () => {
  emit('update', null)
}
</script>
<template>
  <section>
    <div class="container">
      <div class="top">
        <BackBtn title="К списку" position="left" class="top__btn" @click="listPageHandler">
          <ListIcon class="list-icon" />
        </BackBtn>
        <AppHeading title="Подробнее о фильме">
          <FAQ class="head-icon" />
        </AppHeading>
      </div>
      <div class="card">
        <div class="card__wrapper">
          <section class="card__poster">
            <div
              class="card__poster-image"
              :style="`background-image:url(${props.card.imgTitle})`"
            ></div>
          </section>
          <section class="card__main">
            <h1 class="card__title">«{{ card.name }}»</h1>
            <div class="card__info">
              <span>{{ card.country }}</span
              >,&nbsp;<span>{{ converToHour(card.duration) }}</span>
              <div>{{ joinGenres(card.genres) }}</div>
              <div class="card__age">
                <div class="card__limit">
                  <div class="card__sign">{{ card.ageLimit }}+</div>
                </div>
              </div>
            </div>

            <div class="card__description">
              <section class="film">
                <div class="film__info">
                  <div class="film__caption">Старт проката</div>
                  <div class="film__content">{{ props.card.start.toLocaleDateString() }}</div>
                  <div class="film__caption">Режисер</div>
                  <div class="film__content">{{ props.card.director }}</div>
                  <div class="film__caption">В главных ролях</div>
                  <div class="film__content">
                    <span v-for="actor in props.card.starring" :key="actor">{{
                      `${actor}, `
                    }}</span>
                  </div>
                  <div class="film__caption">Описание</div>
                  <div class="film__content">
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
    </div>
  </section>
</template>
<style scoped>
.container {
  max-width: 1299px;
  padding: 0 6px;
  margin: 0 auto;
  width: 100%;
}

.top {
  margin-top: 3.5rem;
  position: relative;

  &__btn {
    right: 1%;
  }
}

.list-icon {
  width: 18px;
  height: 18px;
  fill: var(--primary-icon);
}

.head-icon {
  width: 25px;
  height: 25px;
  fill: var(--primary-white);
}

.card {
  &__wrapper {
    display: grid;
    grid-template-columns: max-content 2fr 1fr;
    grid-column-gap: 0.5rem;
  }

  &__poster-image {
    width: 280px;
    height: 420px;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    background-position: center;
    border-radius: 0.6rem;
  }

  &__title {
    font-size: 32px;
    margin-bottom: 1rem;
  }

  &__info {
    margin-bottom: 1.85rem;
    color: var(--font-color);
  }

  &__age {
    margin-top: 0.75rem;
  }

  &__sign {
    padding: 0.5rem;
    display: inline;
    border: 2px solid var(--primary-icon);
    border-radius: 0.75rem;
  }
}

.film {
  &__info {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-column-gap: 2.5rem;
    row-gap: 1.25rem;
  }

  &__caption {
    color: var(--font-color);
  }
}
</style>
