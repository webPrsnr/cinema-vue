<script setup lang="ts">
import AgeLimit from '@/components/ui/AgeLimit.vue'
import { joinGenres } from '@/utils/joinGenres'
import { getImageUrl } from '@/utils/setImages'
defineProps<{
  imgSrc: string
  ageLimit: number
  name: string
  genres: string[]
}>()
</script>

<template>
  <div class="list-item">
    <div class="list-item__container">
      <div class="list-item__picture">
        <a
          href=""
          class="list-item__picture-image image-settings"
          :style="`background-image: url(${getImageUrl(imgSrc)})`"
        ></a>
        <AgeLimit class="list-item__picture-age-limit" :limit="ageLimit" :location="'list'" />
      </div>
      <div class="list-item__info">
        <h5 class="list-item__info-title">{{ name }}</h5>
        <div class="list-item__info-genres">{{ joinGenres(genres) }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-item {
  padding: 20px;
  flex: 0 0 50%;
  cursor: pointer;

  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  &__picture {
    position: relative;

    &-image {
      height: 354px;
      width: 275px;
      transition: transform 0.5s;

      &:hover {
        transform: scale(1.03);
      }
    }

    &-age-limit {
      position: absolute;
      top: 5%;
      left: 5%;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &-title {
      font-size: 28px;
    }

    &-genres {
      margin-top: 15px;
      font-size: 16px;
    }
  }
}
</style>
