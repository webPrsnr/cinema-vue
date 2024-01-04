<script setup lang="ts">
import { converToHour } from '@/utils/convertToHour'
import { joinGenres } from '@/utils/joinGenres'
defineProps<{
  name: string
  country: string
  genres: string[]
  ageLimit: number
  duration: number
}>()
</script>

<template>
  <section class="card__main">
    <h1 class="card__title">«{{ name }}»</h1>
    <div class="card__info">
      <span>{{ country }}</span
      >,&nbsp;<span>{{ converToHour(duration) }}</span>
      <div>{{ joinGenres(genres) }}</div>
      <div class="card__age">
        <div class="card__limit">
          <div class="card__sign">{{ ageLimit }}+</div>
        </div>
      </div>
    </div>

    <slot />
  </section>
</template>

<style scoped>
.card {
  &__wrapper {
    display: grid;
    grid-template-columns: max-content 2fr 1fr;
    grid-column-gap: 0.5rem;
  }

  &__title {
    font-size: 32px;
    margin-bottom: 1rem;
  }

  &__info {
    margin-bottom: 1.85rem;
    color: var(--font-color);
  }

  &__age {
    margin-top: 0.75rem;
  }

  &__sign {
    padding: 0.5rem;
    display: inline;
    border: 2px solid var(--primary-icon);
    border-radius: 0.75rem;
  }
}
</style>
