<script setup lang="ts">
import type { ModalProps } from '@/composable/useModal'
import ModalClose from './ModalClose.vue'
import ModalFooter from './ModalFooter.vue'

defineProps<ModalProps>()

const isText = (text: ModalProps['text']) => (typeof text === 'string' ? true : false)
</script>

<template>
  <div class="inner">
    <ModalClose v-if="closeBtn" />
    <h2>{{ title }}</h2>
    <p v-if="isText(text)">
      {{ text }}
    </p>
    <component :is="text" v-else />
    <ModalFooter v-if="accept" :click-handler="accept" />
  </div>
</template>

<style scoped>
.inner {
  background-color: var(--primary-white);
  padding: 1rem;
  padding-top: 3rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  position: relative;
  width: 36rem;
}
</style>
