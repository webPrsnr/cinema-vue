<script setup lang="ts">
import type { FilmInfo } from '@/listFilms'
import FilmSeans from './components/FilmSeans.vue'
import CardPoster from './components/CardPoster.vue'
import CardBody from './components/CardBody.vue'
import CardDescription from './components/CardDescription.vue'
import CardHeader from './components/CardHeader.vue'
import { defineAsyncComponent, provide } from 'vue'
import { useSetSeats } from '@/composable/useSetSeats'
import { useSetScroll } from '@/composable/useSetScroll'
import SpinnerWrapper from '@/components/spinner/SpinnerWrapper.vue'
import { useToggle } from '@/composable/useToggle'
import { enableOpacity } from '@/composable/useHeader'
import { useHead } from '@unhead/vue'

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
      setTimeout(() => res(import('../Seats/SeatsView.vue')), 0)
    })
})

useSetScroll()
const { seats, setSeats } = useSetSeats(props.card.dates)

const chooseTimeHandler = (time: string, clickedDate: number) => {
  toggle()
  seats.value = { time, clickedDate }
}

const moveBackHandler = () => {
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
      <CardHeader @list-page-handler="listPageHandler" />
      <div class="card">
        <div class="card__wrapper">
          <CardPoster :img-src="card.imgTitle" />
          <CardBody
            :age-limit="card.ageLimit"
            :country="card.country"
            :duration="card.duration"
            :genres="card.genres"
            :name="card.name"
          >
            <CardDescription
              :description="card.description"
              :director="card.director"
              :starring="card.starring"
              :start-show="new Date(card.start)"
            />
          </CardBody>
          <FilmSeans :dates="props.card.dates" @choose-time="chooseTimeHandler" />
        </div>
        <SpinnerWrapper v-if="currentState()">
          <FilmSeats
            v-if="seats"
            :id="card.id"
            :seats="setSeats"
            :date="seats.clickedDate"
            @move-back-handler="moveBackHandler"
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

.card {
  &__wrapper {
    display: grid;
    grid-template-columns: max-content 2fr 1fr;
    grid-column-gap: 0.5rem;
  }
}
</style>
