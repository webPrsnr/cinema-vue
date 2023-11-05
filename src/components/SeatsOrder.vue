<script setup lang="ts">
import IconBase from '@/utils/IconBase.vue'
import IconDelete from './ui/IconDelete.vue'

const props = defineProps<{ seats: number[] }>()

const emit = defineEmits<{
  (e: 'removeOrder', seat: number): void
}>()
</script>
<template>
  <section class="order">
    <h4 class="order__title">Выбранные места</h4>
    <div class="order__wrapper">
      <div class="order__elem" v-if="!props.seats.length">
        <div class="elem__description">Выберите желаемое место</div>
      </div>
      <div class="order__elem" v-for="seat in props.seats" :key="seat">
        <div class="elem__description">{{ seat }} место</div>
        <button type="button" class="elem__delete" @click="emit('removeOrder', seat)">
          <IconBase :icon-name="'delete'"><IconDelete /></IconBase>
        </button>
      </div>
    </div>
    <button class="order__buy" :disabled="!props.seats.length" @click="console.log(123)">
      Далее
    </button>
  </section>
</template>

<style>
.order {
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 20rem;
}

.order__title {
  text-transform: uppercase;
}

.order__wrapper {
  background-color: white;
  border-radius: 0.85rem;
  padding: 0 1rem;
  flex-grow: 1;
  margin-top: 0.75rem;
  height: 1rem;
  overflow: auto;
}

.order__wrapper::-webkit-scrollbar {
  width: 10px;
}

.order__wrapper::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
}

.order__wrapper div:not(:first-child) {
  border-top: 1px solid rgba(120, 120, 128, 0.2);
}

.order__elem {
  display: flex;
  padding: 0.4rem 0.2rem;
  margin: 0.5rem 0;
}

.elem__description {
  flex: 1;
  color: #000;
  font-size: 17px;
}

.elem__delete {
  cursor: pointer;
  background-color: transparent;
  color: rgba(60, 60, 67, 0.6);
}

.elem__delete:hover {
  color: rgb(239, 68, 68);
}

.order__buy {
  margin-top: 0.25rem;
  font-size: 17px;
  height: 3rem;
  background-color: blueviolet;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  border-radius: 0.5rem;
  font-weight: 600;
}
.order__buy:disabled {
  background-color: rgba(120, 120, 128, 0.08);
  color: rgba(60, 60, 67, 0.3);
}
</style>
