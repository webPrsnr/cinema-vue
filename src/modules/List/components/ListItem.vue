<script setup lang="ts">
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
  <div class="item-container">
    <div class="item">
      <div class="item__picture">
        <a
          href=""
          class="item__picture-image"
          :style="`background-image: url(${getImageUrl(imgSrc)})`"
        ></a>
        <span class="item__picture-age-limit">{{ `${ageLimit}+` }}</span>
      </div>
      <div class="item__container">
        <h5 class="item__title">{{ name }}</h5>
        <div class="item__genres">{{ joinGenres(genres) }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: grid;
  grid-template-columns: 1fr 1fr;

  &-container {
    padding: 20px;
    flex: 0 0 50%;
    cursor: pointer;
  }

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
