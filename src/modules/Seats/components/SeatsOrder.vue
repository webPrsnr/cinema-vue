<script setup lang="ts">
import IconDelete from '@/assets/icons/delete.svg'
import { useSetLC } from '@/composable/useLocalStorage'
import { inject, toValue } from 'vue'
import AppHeading from '@/components/ui/AppHeading.vue'
import HeadIcon from '@/assets/icons/seat.svg'
import { modal } from '@/composable/useModal'
import ModalWrapper from '@/components/modals/ui/ModalWrapper.vue'

const props = defineProps<{ seats: number[]; date: number; time: string }>()

const id = inject('id') as number

const emit = defineEmits<{
  (e: 'removeOrder', seat: number): void
  (e: 'clearHandler'): void
}>()

const clickHandler = () => {
  modal.open({
    component: ModalWrapper,
    props: {
      title: 'Занять места?',
      text: 'Вы действительно хотите занять эти места? Обратите внимание, что Вы можете выбрать неограниченное количество мест.',
      accept: () => {
        useSetLC({ id, date: props.date, time: props.time }, toValue(props.seats))
        emit('clearHandler')
      }
    }
  })
}
</script>
<template>
  <div>
    <AppHeading title="Выбранные места">
      <HeadIcon class="head-icon" />
    </AppHeading>
    <section class="order">
      <div class="order__wrapper">
        <div v-if="!props.seats.length" class="order__elem">
          <div class="elem__description">Выберите желаемое место</div>
        </div>
        <div v-for="seat in props.seats" :key="seat" class="order__elem">
          <div class="elem__description">{{ seat }} место</div>
          <button type="button" class="elem__delete" @click="emit('removeOrder', seat)">
            <IconDelete class="elem__icon-delete" />
          </button>
        </div>
      </div>
      <button class="order__buy" :disabled="!props.seats.length" @click="clickHandler">
        Далее
      </button>
    </section>
  </div>
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
    height: 1rem;
    overflow: auto;
    box-shadow: var(--secondary-shadow);
    overflow-y: scroll;
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

.head-icon {
  width: 25px;
  height: 25px;
  fill: var(--primary-white);
}

.elem {
  &__description {
    flex: 1;
    font-size: 17px;
  }

  &__delete {
    fill: var(--primary-icon);

    &:hover {
      fill: var(--primary-danger);
    }
  }

  &__icon-delete {
    fill: inherit;
    width: 18px;
    height: 18px;
  }
}
</style>
