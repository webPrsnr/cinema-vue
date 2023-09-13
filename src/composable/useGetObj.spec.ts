import { list } from '@/listFilms'
import { describe, it, expect } from 'vitest'
import { useGetObj } from './useGetObj'

describe('test useGetObj hook', () => {
  it('should return an object with id === film.id', () => {
    const films = list
    const testFilm = films[0]
    const film = useGetObj(testFilm.id, films)
    expect(film).toEqual(testFilm)
  })
  it('should return null', () => {
    const films = list
    const testFilm = null
    const film = useGetObj(testFilm, films)
    expect(film).toBe(null)
  })
})
