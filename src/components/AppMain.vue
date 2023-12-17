<script setup lang="ts">
import type { FilmInfo } from '@/listFilms'
import { list } from '@/listFilms'
import FilmList from './FilmList.vue'
import FilmCard from './FilmCard.vue'
import { onBeforeMount, shallowRef } from 'vue'
import { useSwitchTab } from '@/composable/useSwitchTab'

const films = shallowRef<FilmInfo[]>([])

const { currentTab, toggleSwitchTab, currentFilm } = useSwitchTab(films)

onBeforeMount(() => {
  //fetch
  films.value = list
})
</script>
<template>
  <main>
    <section class="main">
      <FilmList v-if="currentTab === 'list'" :list="films" @update="toggleSwitchTab" />
      <FilmCard
        v-if="currentTab === 'card' && currentFilm"
        :card="currentFilm"
        @update="toggleSwitchTab"
      />
    </section>
  </main>
</template>
