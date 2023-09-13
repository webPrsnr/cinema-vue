import type { FilmInfo } from '@/listFilms'
export const useGetObj = (id: number | null, films: FilmInfo[] | null) => {
  if (films && id) {
    return films.find((el) => el.id === id)
  }
  return null
}
