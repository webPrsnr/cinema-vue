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
          <IconBase :icon-name="'delete'">
            <IconDelete />
          </IconBase>
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

  &__title {
    text-transform: uppercase;
  }

  &__wrapper {
    background-color: var(--primary-white);
    border-radius: 0.85rem;
    padding: 0 1rem;
    flex-grow: 1;
    margin-top: 0.75rem;
    height: 1rem;
    overflow: auto;
    box-shadow: var(--secondary-shadow);
    overflow: scroll;
  }

  &__wrapper::-webkit-scrollbar {
    width: 10px;
  }

  &__wrapper::-webkit-scrollbar-thumb {
    background: rgba(0 0 0 / 20%);
    border-radius: 0.5rem;
  }

  &__wrapper div:not(:first-child) {
    border-top: var(--primary-border);
  }

  &__elem {
    display: flex;
    padding: 0.4rem 0.2rem;
    margin: 0.5rem 0;
  }

  &__buy {
    margin-top: 0.25rem;
    font-size: 17px;
    height: 3rem;
    background-color: var(--primary-btn);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--primary-white);
    border-radius: 0.5rem;
    font-weight: 600;
  }

  &__buy:disabled {
    background-color: var(--disabled-btn);
    color: var(--primary-icon);
  }
}

.elem {
  &__description {
    flex: 1;
    font-size: 17px;
  }

  &__delete {
    color: var(--primary-icon);

    &:hover {
      color: var(--primary-danger);
    }
  }
}
</style>
