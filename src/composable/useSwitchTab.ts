import type { FilmInfo } from '@/listFilms'
import { useGetObj } from './useGetObj'
import { type ShallowRef, computed, toValue, ref } from 'vue'

// const isNotNull = (el: FilmInfo | null): el is FilmInfo => {
//   return Object.is(el, !null)
// }

export const useSwitchTab = (films: ShallowRef<FilmInfo[] | null>) => {
  const currentFilm = ref<FilmInfo | null>(null)

  const toggleSwitchTab = (id: number | null) => {
    const listFilms = toValue(films)
    const obj = useGetObj(id, listFilms)
    if (obj && currentFilm) {
      currentFilm.value = obj
    } else {
      currentFilm.value = null
    }
  }
  const currentTab = computed(() => (Object.is(currentFilm.value, null) ? true : false))

  return {
    currentTab,
    toggleSwitchTab,
    currentFilm
  }
}
