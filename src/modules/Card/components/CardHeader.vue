<script setup lang="ts">
import BackBtn from '@/components/buttons/BackBtn.vue'
import AppHeading from '@/components/ui/AppHeading.vue'
import ListIcon from '@/assets/icons/list.svg'
import FAQ from '@/assets/icons/ask.svg'

defineEmits<{
  (e: 'listPageHandler'): void
}>()
</script>
<template>
  <div class="card-header">
    <BackBtn
      title="К списку"
      position="left"
      class="card-header__btn"
      @click="$emit('listPageHandler')"
    >
      <ListIcon class="back-icon" />
    </BackBtn>
    <AppHeading title="Подробнее о фильме">
      <FAQ class="head-icon" />
    </AppHeading>
  </div>
</template>

<style scoped>
.card-header {
  margin-top: 3.5rem;
  position: relative;

  &__btn {
    right: 1%;
  }
}
</style>
