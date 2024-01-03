<script setup lang="ts">
import { disableOpacity } from '@/composable/useHeader'
import type { TabProps } from '@/composable/useSwitchTab'
import type { FilmInfo } from '@/listFilms'
import TheCarousel from '@/components/carousel/TheCarousel.vue'
import { useHead } from '@unhead/vue'
import { metaList } from '@/utils/metaTags'
import { joinGenres } from '@/utils/joinGenres'

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
  { src: '4849606', alt: 'carousel_img_1' },
  { src: '4849616', alt: 'carousel_img_2' },
  { src: '4849635', alt: 'carousel_img_3' },
  { src: '4849670', alt: 'carousel__img_4' }
]
</script>
<template>
  <TheCarousel :src-list="imgList" />
  <div class="list">
    <h1 class="list__title">Афиша кино</h1>
    <div class="list__container">
      <div
        class="list__item"
        v-for="film in props.list"
        :key="film.name"
        @click.prevent="getId(film.id)"
      >
        <div class="item">
          <div class="item__picture">
            <a
              href=""
              class="item__picture-image"
              :style="`background-image: url(${film.imgTitle})`"
            ></a>
            <span class="item__picture-age-limit">{{ `${film.ageLimit}+` }}</span>
          </div>
          <div class="item__container">
            <h5 class="item__title">{{ film.name }}</h5>
            <div class="item__genres">{{ joinGenres(film.genres) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.list {
  max-width: 1292px;
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;

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

.item {
  display: grid;
  grid-template-columns: 1fr 1fr;

  &__picture {
    position: relative;

    &-image {
      height: 354px;
      width: 275px;
      display: block;
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 0.6rem;
      transition: transform 0.5s;

      &:hover {
        transform: scale(1.03);
      }
    }

    &-age-limit {
      position: absolute;
      top: 5%;
      left: 5%;
      color: var(--primary-white);
      background-color: var(--secondary-icon);
      padding: 0.2rem;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__title {
    font-size: 28px;
  }

  &__genres {
    margin-top: 15px;
    font-size: 16px;
  }
}
</style>
