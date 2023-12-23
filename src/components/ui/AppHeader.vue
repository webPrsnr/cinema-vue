<script setup lang="ts">
import { headerFlag } from '@/composable/useHeader'
import { modal } from '@/composable/useModal'
import { onMounted, onUnmounted, ref, watchEffect } from 'vue'
import ModalWrapper from './ModalWrapper.vue'
import ModalFAQ from './ModalFAQ.vue'
import ModalArchive from './ModalArchive.vue'

const isTopPage = ref(false)
const headerElement = ref<HTMLElement>()

watchEffect(() => {
  isTopPage.value = headerFlag.value ? true : false
})

const handleScroll = () => {
  if (headerFlag.value) return
  const height = headerElement.value?.clientHeight
  isTopPage.value = height && window.scrollY >= height ? true : false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll)
})

const clickFAQHandle = () => {
  modal.open({
    component: ModalWrapper,
    props: {
      title: 'FAQ',
      text: ModalFAQ,
      closeBtn: true
    }
  })
}

const clickArchiveHandle = () => {
  modal.open({
    component: ModalWrapper,
    props: {
      title: 'Архив билетов',
      text: ModalArchive,
      closeBtn: true
    }
  })
}
</script>
<template>
  <header ref="headerElement" class="header" :class="{ scroll: isTopPage }">
    <div class="container">
      <div class="wrapper">
        <h2 class="wrapper__title" :class="{ 'wrapper__title-scroll': isTopPage }">в-синема</h2>
        <div class="wrapper__links">
          <a class="wrapper__link" href="" @click.prevent="clickFAQHandle">FAQ</a>
          <a class="wrapper__link" href="" @click.prevent="clickArchiveHandle">Архив</a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    text-transform: uppercase;
    font-size: 1.25rem;
    letter-spacing: 0.15rem;
    color: var(--primary-white);

    &-scroll {
      background: linear-gradient(to right, var(--secondary-icon) 0%, var(--thirdy-icon) 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &__links {
    color: var(--font-color);
    font-size: 0.95rem;
    display: flex;
  }

  &__link {
    display: block;
    line-height: 1;
    padding: 8px 12px;

    &:hover {
      background-color: #eee;
      border-radius: 4px;
    }
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
}

.header {
  padding: 10px 16px;
  background-color: rgba(0 0 0 / 8%);
  z-index: 10;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
}

.scroll {
  background-color: var(--primary-white);
  border-bottom: var(--primary-border);
}
</style>
