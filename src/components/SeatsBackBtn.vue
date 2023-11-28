<script setup lang="ts">
import ArrowUp from '@/assets/icons/arrow-up.svg'
</script>

<template>
  <section class="seats-back__wrapper">
    <div>
      <span class="seats-back__btn">Назад</span>
      <ArrowUp class="seats-back__arrow" />
    </div>
  </section>
</template>

<style scoped>
.seats-back {
  &__wrapper {
    position: absolute;
    display: flex;
    align-items: flex-start;
    left: 1rem;
    top: 5rem;
    background-color: var(--primary-white);
    padding: 1rem;
    border-radius: 0.85rem;
    box-shadow: var(--secondary-shadow);
    cursor: pointer;
  }

  &__arrow {
    width: 18px;
    height: 18px;
    stroke: var(--primary-icon);
  }
}
</style>
