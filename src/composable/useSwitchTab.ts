import type { FilmInfo } from '@/listFilms'
import { useGetObj } from './useGetObj'
import { type ShallowRef, computed, toValue, ref, watchEffect, onMounted, onUnmounted } from 'vue'
import { disableOpacity } from './useHeader'

// const isNotNull = (el: FilmInfo | null): el is FilmInfo => {
//   return Object.is(el, !null)
// }

const routes = {
  card: '/card',
  list: '/'
}

export interface TabProps {
  id?: number
  path: keyof typeof routes
}

export const useSwitchTab = (films: ShallowRef<FilmInfo[]>) => {
  const currentFilm = ref<FilmInfo | false>(false)

  const toggleSwitchTab = (props: TabProps) => {
    const listFilms = toValue(films)
    const obj = props.id ? useGetObj(props.id, listFilms) : null
    currentFilm.value = obj || false
  }

  const currentTab = computed(() => (currentFilm.value ? 'card' : 'list'))

  onMounted(() => {
    window.addEventListener('popstate', listener)
  })

  onUnmounted(() => {
    window.removeEventListener('popstate', listener)
  })

  watchEffect(() => {
    const currentRoute = routes[currentTab.value]
    history.pushState(null, '', currentRoute)
  })

  const listener = () => {
    disableOpacity()
    const path = window.location.pathname
    if (path === routes.list) toggleSwitchTab({ path: 'list' })
  }

  return {
    currentTab,
    toggleSwitchTab,
    currentFilm
  }
}
