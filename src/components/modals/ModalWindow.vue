<script setup lang="ts">
import { modal } from '@/composable/useModal'
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div class="modal-wrapper" @click.self="modal.close" v-if="modal.state.value.component">
        <component :is="modal.state.value.component" v-bind="modal.state.value.props" />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 500;
  width: 100vw;
  height: 100vh;
  background: rgba(0 0 0 / 20%);
  display: grid;
  place-items: center;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: 0.25s ease all;
}
</style>
