<script setup lang="ts">
import { modal } from '@/composable/useModal'

const props = defineProps<{
  clickHandler: () => void
}>()

const closeHandler = () => {
  modal.close()
}

const acceptHandler = () => {
  props.clickHandler()
  modal.close()
}
</script>

<template>
  <div class="footer">
    <button class="footer__btn footer__btn--close" @click="closeHandler">Отмена</button>
    <button class="footer__btn footer__btn--accept" @click="acceptHandler">Сохранить</button>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: row-reverse;
  gap: 1rem;

  &__btn {
    cursor: pointer;
    border-radius: 0.25rem;
    line-height: 1.5;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;

    &--close {
      background-color: var(--seat-reserved-other);
      color: var(--primary-white);

      &:hover {
        background-color: rgba(115 115 115 / 50%);
      }
    }

    &--accept {
      background-color: var(--secondary-icon);
      color: var(--primary-white);

      &:hover {
        background-color: #2fca85;
      }
    }
  }
}
</style>
