<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AppSpinner from './ui/AppSpinner.vue'
import { useToggle } from '@/composable/useToggle'

const { currentState, toggle } = useToggle()

const element = ref<HTMLElement>()
onMounted(() => {
  setTimeout(() => {
    toggle()
  }, 2000)
  element.value?.scrollIntoView({ behavior: 'smooth' })
})
</script>

<template>
  <div ref="element" class="seats">
    <AppSpinner v-if="!currentState()" />
    <slot v-else />
  </div>
</template>

<style scoped>
.seats {
  padding: 1.7rem 1rem;
  height: 100vh;
}
</style>
