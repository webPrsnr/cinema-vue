<script setup lang="ts">
const props = defineProps<{
  chairs: number
  reservedGuest: number[]
  reservedClient: number[]
}>()

const emit = defineEmits<{
  (e: 'clickHandler', chair: number): void
  (e: 'removeHandler', chair: number): void
}>()

const isReservedGuest = (seat: number) => props.reservedGuest.includes(seat)
const isRevervedClient = (seat: number) => props.reservedClient.includes(seat)

const clickHandler = (chair: number) => {
  if (isRevervedClient(chair)) {
    emit('removeHandler', chair)
    return
  }
  emit('clickHandler', chair)
}
</script>

<template>
  <div class="seats-chairs">
    <div
      v-for="chair in props.chairs"
      :key="chair"
      v-tooltip.top="chair"
      type="button"
      class="seats-chairs__chair"
      :class="{
        'seats-chairs__reserved-guest': isReservedGuest(chair),
        'seats-chairs__reserved-client': isRevervedClient(chair)
      }"
      @click="clickHandler(chair)"
    ></div>
  </div>
</template>

<style scoped>
.seats-chairs {
  border-radius: 0.5rem;
  display: grid;
  gap: 1.5rem;
  justify-content: center;
  grid-template-columns: repeat(8, 1rem);
  margin-bottom: 0.5rem;

  &__chair {
    padding: 1rem;
    border-radius: 0.175rem;
    cursor: pointer;
    background-color: var(--seat-free);
    box-shadow:
      rgba(0 0 0 / 5%) 0 6px 24px 0,
      rgba(0 0 0 / 8%) 0 0 0 1px;
  }

  &__reserved-client {
    background-color: var(--seat-reserved-client);
  }

  &__reserved-guest {
    background-color: var(--seat-reserved-other);
    cursor: not-allowed;
    pointer-events: none;
  }
}
</style>
