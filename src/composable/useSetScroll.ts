import { onMounted, onUnmounted } from 'vue'

export const useSetScroll = () => {
  const body = document.body
  const className = 'off-scroll'
  onMounted(() => {
    if (body && !body.classList.contains(className)) {
      body.classList.add(className)
    }
  })

  onUnmounted(() => {
    if (body && body.classList.contains(className)) {
      body.classList.remove(className)
    }
  })
}
