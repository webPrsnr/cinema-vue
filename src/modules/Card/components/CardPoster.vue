<script setup lang="ts">
defineProps<{
  imgSrc: string
}>()
</script>
<template>
  <section class="card__poster">
    <div class="card__poster-image" :style="`background-image:url(${imgSrc})`"></div>
  </section>
</template>

<style scoped>
.card {
  &__poster-image {
    width: 280px;
    height: 420px;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    background-position: center;
    border-radius: 0.6rem;
  }
}
</style>
