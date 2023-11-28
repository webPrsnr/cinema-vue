import { ref } from 'vue'

export const useToggle = () => {
  const flag = ref(false)

  const toggle = () => {
    flag.value = flag.value === true ? false : true
    return
  }

  const currentState = () => {
    return flag.value
  }

  return { toggle, currentState }
}
