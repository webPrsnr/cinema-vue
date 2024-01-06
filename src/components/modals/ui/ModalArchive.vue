<script setup lang="ts">
import { useGetFilmName } from '@/composable/useGetFilmName'
import { getAllItems } from '@/composable/useLocalStorage'

const items = getAllItems()

const getName = (id: number) => {
  return useGetFilmName(id) || 'Не определено'
}

const printArray = (arr: number[]) => {
  return arr.toString()
}
</script>

<template>
  <div class="archive">
    <div class="archive__item">Название фильма</div>
    <div class="archive__item">Дата/время</div>
    <div class="archive__item">Занимаемые места</div>
  </div>
  <div v-for="item in items" :key="item.filmId" class="archive">
    <div>{{ getName(item.filmId) }}</div>
    <div>{{ `${new Date(item.date).toLocaleDateString()}/${item.time}` }}</div>
    <div>{{ printArray(item.reservedSeats) }}</div>
  </div>
</template>

<style scoped>
.archive {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  &__item {
    border: 1px solid black;
    text-align: center;

    &:nth-child(even) {
      border-left: none;
      border-right: none;
    }
  }
}
</style>
