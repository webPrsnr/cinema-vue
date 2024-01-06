<script setup lang="ts">
import { getImageUrl } from '@/utils/setImages'
defineProps<{
  imgSrc: string
}>()
</script>
<template>
  <section class="card-poster">
    <div
      class="card-poster__image image-settings"
      :style="`background-image:url(${getImageUrl(imgSrc)})`"
    ></div>
  </section>
</template>

<style scoped>
.card-poster {
  &__image {
    width: 280px;
    height: 420px;
  }
}
</style>
