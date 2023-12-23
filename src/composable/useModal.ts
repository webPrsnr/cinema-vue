import { type Component, shallowRef } from 'vue'

export interface ModalProps {
  text: string | Component
  title: string
  closeBtn?: true
  accept?: () => void
}

interface ModalState {
  component: null | Component
  props?: ModalProps | {}
}

const basicState = { component: null, props: {} }

const initModal = () => {
  const initState = shallowRef<ModalState>(basicState)

  const openModal = (payload: ModalState) => {
    initState.value = payload
  }

  const closeModal = () => {
    initState.value = basicState
  }

  return {
    state: initState,
    open: openModal,
    close: closeModal
  }
}

export const modal = initModal()
