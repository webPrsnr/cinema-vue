<script setup lang="ts">
import { getImageUrl } from '@/utils/setImages'
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{
  srcList: {
    src: string
    alt: string
  }[]
}>()

const initTransform = ref(0)
let timerId: NodeJS.Timer

let childrenLength = 1

let isResize = false

const handleTransform = (value: number) => {
  if (childrenLength === props.srcList.length) {
    initTransform.value = 0
    childrenLength = 1
    return
  }
  initTransform.value += value
  childrenLength++
}

const handleTimeout = () => {
  timerId = setTimeout(function timeCb() {
    if (isResize) return
    const itemWidth = itemsTemplate.value!.clientWidth
    handleTransform(-itemWidth)
    timerId = setTimeout(timeCb, 2000)
  }, 2000)
}

const handleResize = () => {
  isResize = true
  const itemWidth = -itemsTemplate.value!.clientWidth
  childrenLength = props.srcList.length
  handleTransform(itemWidth)
  isResize = false
}

const itemsTemplate = ref<HTMLElement>()

onMounted(() => {
  handleTimeout()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  clearTimeout(timerId)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div ref="itemsTemplate" class="carousel">
    <div class="carousel__wrapper">
      <ol class="carousel__items" :style="`transform: translateX(${initTransform}px)`">
        <li v-for="item in srcList" :key="item.src" class="carousel__item">
          <img
            draggable="false"
            class="carousel__img"
            :src="getImageUrl(item.src)"
            :alt="item.alt"
          />
        </li>
      </ol>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  &__wrapper {
    overflow: hidden;
  }

  &__items {
    display: flex;
    transition: all 300ms ease 0s;
  }

  &__item {
    width: 100%;
  }

  &__img {
    background-position: center 0;
    background-size: cover;
    background-repeat: no-repeat;
    height: 25vw;
    margin: 0 auto;
    display: block;
    cursor: pointer;
    user-select: none;
    width: 100%;
  }
}
</style>
