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
  <div class="seats__chairs">
    <div
      type="button"
      class="seats__chair"
      v-for="chair in props.chairs"
      :key="chair"
      :class="{ faq__circle_red: isReservedGuest(chair), faq__reserved: isRevervedClient(chair) }"
      v-tooltip.top="chair"
      @click="clickHandler(chair)"
    ></div>
  </div>
</template>

<style scoped>
.seats__chairs {
  border-radius: 0.5rem;
  display: grid;
  gap: 1.5rem;
  justify-content: center;
  grid-template-columns: repeat(8, 1rem);
  margin-bottom: 0.5rem;
}

.seats__chair {
  padding: 1rem;
  border-radius: 0.175rem;
  cursor: pointer;
  background-color: var(--seat-free);
  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}

.faq__reserved {
  background-color: var(--seat-reserved-client);
}

.faq__circle_red {
  background-color: var(--seat-reserved-other);
  cursor: not-allowed;
  pointer-events: none;
}
</style>
