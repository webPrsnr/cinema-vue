import list from '@/data.json'

export const useGetFilmName = (id: number) => {
  //JSON в будущем
  const filmList = list

  const film = filmList.find((item) => item.id === id)

  return film?.name
}
