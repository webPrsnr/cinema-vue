<script setup lang="ts">
import AppHeader from '@/components/header/AppHeader.vue'
import ModalWindow from '@/components/modals/ModalWindow.vue'
import ListView from '@/modules/List/ListView.vue'
import CardView from '@/modules/Card/CardView.vue'
import type { FilmInfo } from '@/listFilms'
import { list } from '@/listFilms'
import data from '@/data.json'
import { useSwitchTab } from '@/composable/useSwitchTab'
import { onBeforeMount, shallowRef } from 'vue'
import '@/assets/styles/index.css'

const films = shallowRef<FilmInfo[]>([])

const { currentTab, toggleSwitchTab, currentFilm } = useSwitchTab(films)

onBeforeMount(() => {
  films.value = data
})
</script>

<template>
  <AppHeader />
  <main>
    <section class="main">
      <ListView v-if="currentTab === `list`" :list="films" @update="toggleSwitchTab" />
      <CardView
        v-if="currentTab === `card` && currentFilm"
        :card="currentFilm"
        @update="toggleSwitchTab"
      />
    </section>
  </main>
  <ModalWindow />
</template>
