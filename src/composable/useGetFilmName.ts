import { list } from '@/listFilms'

export const useGetFilmName = (id: number) => {
  //JSON в будущем
  const filmList = list

  const film = filmList.find((item) => item.id === id)

  return film?.name
}
