import { describe, it, expect } from 'vitest'
import { useSwitchTab } from './useSwitchTab'
import { ref } from 'vue'
import { list } from '@/listFilms'

describe('test useSwitchTab hook', () => {
  it('currentTab is true on call', () => {
    const films = ref(list)
    const { currentTab } = useSwitchTab(films)
    expect(currentTab.value).toBe('list')
  })
  it('currentTab is false on toggle', () => {
    const films = ref(list)
    const { currentTab, toggleSwitchTab } = useSwitchTab(films)
    expect(currentTab.value).toBe('list')
    toggleSwitchTab({ id: films.value[0].id, path: 'card' })
    expect(currentTab.value).toBe('card')
  })
  it('currentTab is true on toggle with id===null', () => {
    const films = ref(list)
    const { currentTab, toggleSwitchTab } = useSwitchTab(films)
    expect(currentTab.value).toBe('list')
    toggleSwitchTab({ path: 'list' })
    expect(currentTab.value).toBe('list')
  })
})
