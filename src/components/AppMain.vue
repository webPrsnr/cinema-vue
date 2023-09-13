<script setup lang="ts">
import type { FilmInfo } from '@/listFilms'
import { list } from '@/listFilms'
import FilmList from './FilmList.vue'
import FilmCard from './FilmCard.vue'
import { onBeforeMount, shallowRef } from 'vue'
import { useSwitchTab } from '@/composable/useSwitchTab'

const films = shallowRef<FilmInfo[] | null>(null)

const { currentTab, toggleSwitchTab, currentFilm } = useSwitchTab(films)

onBeforeMount(() => {
  //fetch
  films.value = list
})
</script>
<template>
  <main>
    <section class="main">
      <h2>Заказ билетов</h2>
      <FilmList v-if="currentTab && films" :list="films" @update="toggleSwitchTab" />
      <FilmCard v-if="!currentTab && currentFilm" :card="currentFilm" />
    </section>
  </main>
</template>
