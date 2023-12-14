import { describe, it, expect } from 'vitest'
import { modal } from './useModal'
import ModalWrapper from '@/components/ui/ModalWrapper.vue'

const basicState = { component: null, props: {} }
describe('test useModal hook', () => {
  it('should init', () => {
    const state = modal.state
    expect(state.value).toEqual(basicState)
  })
  it('should open modal', () => {
    const state = modal.state
    const openModal = modal.open
    expect(state.value).toEqual(basicState)
    openModal({
      component: ModalWrapper,
      props: {
        title: 'Sample Title',
        text: 'Sample Text'
      }
    })
    expect(state.value).toEqual({
      component: ModalWrapper,
      props: {
        title: 'Sample Title',
        text: 'Sample Text'
      }
    })
  })
  it('should close modal', () => {
    const state = modal.state
    const openModal = modal.open
    const closeModal = modal.close
    openModal({
      component: ModalWrapper,
      props: {
        title: 'Sample Title',
        text: 'Sample Text'
      }
    })
    closeModal()
    expect(state.value).toEqual(basicState)
  })
})
