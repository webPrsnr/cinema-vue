<script setup lang="ts">
import type { TabProps } from '@/composable/useSwitchTab'
import type { FilmInfo } from '@/listFilms'
interface FilmInfoProps {
  list: FilmInfo[]
}
interface FilmListEmit {
  (e: 'update', { id, path }: TabProps): void
}
const props = defineProps<FilmInfoProps>()
const emit = defineEmits<FilmListEmit>()

const joinGenre = (genres: string[]) => genres.join(', ')

const getId = (id: number) => {
  emit('update', { path: 'card', id })
}
</script>
<template>
  <div class="list">
    <div class="item" v-for="film in props.list" :key="film.name" @click.prevent="getId(film.id)">
      <div class="card">
        <div class="poster">
          <a href="" class="movie" :style="`background-image: url(${film.imgTitle})`"></a>
        </div>
        <div class="head">
          <a href="" class="title"
            ><span>{{ film.name }}</span></a
          >
          <div class="genre">
            {{ joinGenre(film.genres) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.poster {
  float: left;
}
.title {
  font-size: 28px;
  line-height: 34px;
  color: black;
}
.head {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.list {
  display: flex;
  flex-wrap: wrap;
}
.item {
  padding: 20px;
  flex: 0 0 50%;
  cursor: pointer;
}
.movie {
  height: 354px;
  width: 240px;
  display: block;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
