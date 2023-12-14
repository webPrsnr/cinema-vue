<script setup lang="ts">
import CloseBtn from '@/assets/icons/close.svg'
import { modal } from '@/composable/useModal'
const closeModal = () => {
  modal.close()
}
</script>

<template>
  <CloseBtn class="close-btn" @click="closeModal" />
</template>

<style scoped>
.close-btn {
  fill: var(--font-color);
  height: 1.75rem;
  width: 1.75rem;
  position: absolute;
  top: 2%;
  right: 1%;
  cursor: pointer;
}
</style>
