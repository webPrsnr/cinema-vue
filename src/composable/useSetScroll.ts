import { onMounted, onBeforeUnmount } from 'vue'

export const useSetScroll = () => {
  const body = document.body
  const className = 'off-scroll'
  onMounted(() => {
    if (body && !body.classList.contains(className)) {
      body.classList.add(className)
      window.scrollTo(0, 0)
    }
  })

  onBeforeUnmount(() => {
    if (body && body.classList.contains(className)) {
      body.classList.remove(className)
    }
  })
}
