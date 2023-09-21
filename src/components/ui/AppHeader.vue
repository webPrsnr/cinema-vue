<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
const refHeader = ref<HTMLHeadingElement | null>(null)

const handleScrollUsage = (event: Event, sticky: number, value: HTMLHeadingElement) => {
  if (window.scrollY > sticky) {
    value.classList.add('sticky')
  } else {
    value.classList.remove('sticky')
  }
}

onMounted(() => {
  const value = refHeader.value
  if (value) {
    const sticky = value.offsetTop

    document.addEventListener('scroll', (event) => handleScrollUsage(event, sticky, value))
  }
})

onUnmounted(() => {
  const value = refHeader.value
  if (value) {
    const sticky = value.offsetTop

    document.removeEventListener('scroll', (event) => handleScrollUsage(event, sticky, value))
  }
})
</script>
<template>
  <header ref="refHeader" class="header">
    <div class="container">
      <div class="wrapper">
        <h2>My Header</h2>
        <div>
          <a href="">FAQ</a>
          <a href="">Архив</a>
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
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
}
.header {
  padding: 10px 16px;
  background: #555;
  color: #f1f1f1;
  z-index: 999;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
