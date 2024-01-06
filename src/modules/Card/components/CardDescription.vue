<script setup lang="ts">
defineProps<{
  startShow: Date
  director: string
  starring: string[]
  description: string
}>()
</script>

<template>
  <section class="film">
    <div class="film__info">
      <div class="film__caption">Старт проката</div>
      <div class="film__content">{{ startShow.toLocaleDateString() }}</div>
      <div class="film__caption">Режисер</div>
      <div class="film__content">{{ director }}</div>
      <div class="film__caption">В главных ролях</div>
      <div class="film__content">
        <span v-for="actor in starring" :key="actor">{{ `${actor}, ` }}</span>
      </div>
      <div class="film__caption">Описание</div>
      <div class="film__content">
        {{ description }}
      </div>
    </div>
  </section>
</template>

<style scoped>
.film {
  &__info {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-column-gap: 2.5rem;
    row-gap: 1.25rem;
  }

  &__caption {
    color: var(--font-color);
  }
}
</style>
