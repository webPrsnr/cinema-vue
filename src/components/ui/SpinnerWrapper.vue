<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AppSpinner from './AppSpinner.vue'

const flag = ref(false)
const hola = ref<HTMLElement>()
onMounted(() => {
  setTimeout(() => {
    flag.value = true
  }, 2000)
  hola.value?.scrollIntoView({ behavior: 'smooth' })
})
</script>

<template>
  <div class="seats" ref="hola">
    <AppSpinner v-if="!flag" />
    <slot v-else />
  </div>
</template>

<style scoped>
.seats {
  padding: 1.7rem 1rem;
  height: 100vh;
}
</style>
