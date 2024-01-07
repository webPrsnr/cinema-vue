<script setup lang="ts">
import { disableOpacity } from '@/composable/useHeader'
import type { TabProps } from '@/composable/useSwitchTab'
import type { FilmInfo } from '@/listFilms'
import TheCarousel from '@/components/carousel/TheCarousel.vue'
import { useHead } from '@unhead/vue'
import { metaList } from '@/utils/metaTags'
import ListItem from './components/ListItem.vue'
import ListFooter from './components/ListFooter.vue'

interface FilmInfoProps {
  list: FilmInfo[]
}
interface FilmListEmit {
  (e: 'update', { id, path }: TabProps): void
}
const props = defineProps<FilmInfoProps>()
const emit = defineEmits<FilmListEmit>()

useHead({
  title: 'В-Синема. Список фильмов.',
  meta: metaList
})

disableOpacity()

const getId = (id: number) => {
  emit('update', { path: 'card', id })
}

const imgList: { src: string; alt: string }[] = [
  { src: 'car1', alt: 'carousel_img_1' },
  { src: 'car2', alt: 'carousel_img_2' },
  { src: 'car3', alt: 'carousel_img_3' }
]
</script>
<template>
  <TheCarousel :src-list="imgList" />
  <div class="list container">
    <h1 class="list__title">Афиша кино</h1>
    <div class="list__container">
      <ListItem
        v-for="item in props.list"
        :key="item.id"
        :name="item.name"
        :age-limit="item.ageLimit"
        :genres="item.genres"
        :img-src="item.imgTitle"
        @click.prevent="getId(item.id)"
      />
    </div>
    <ListFooter />
  </div>
</template>
<style scoped>
.list {
  max-width: 1292px;
  padding: 0 20px;

  &__title {
    font-size: 32px;
    margin: 23px 0;
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  &__item {
    padding: 20px;
    flex: 0 0 50%;
    cursor: pointer;
  }
}
</style>
