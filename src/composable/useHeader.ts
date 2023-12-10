import { ref } from 'vue'

const useInitHeader = () => {
  const headerFlag = ref(false)

  const enableOpacity = () => {
    headerFlag.value = true
  }

  const disableOpacity = () => {
    headerFlag.value = false
  }

  return {
    headerFlag,
    enableOpacity,
    disableOpacity
  }
}

export const { headerFlag, enableOpacity, disableOpacity } = useInitHeader()
