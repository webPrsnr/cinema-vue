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
  <div class="top">
    <BackBtn title="К списку" position="left" class="top__btn" @click="$emit('listPageHandler')">
      <ListIcon class="list-icon" />
    </BackBtn>
    <AppHeading title="Подробнее о фильме">
      <FAQ class="head-icon" />
    </AppHeading>
  </div>
</template>

<style scoped>
.top {
  margin-top: 3.5rem;
  position: relative;

  &__btn {
    right: 1%;
  }
}

.list-icon {
  width: 18px;
  height: 18px;
  fill: var(--primary-icon);
}

.head-icon {
  width: 25px;
  height: 25px;
  fill: var(--primary-white);
}
</style>
