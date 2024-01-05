import { writeFile } from 'fs'
import { FilmInfo, films } from './films'

const randomizeFilms = (films: FilmInfo[]) => {
  const result: FilmInfo[] = []
  const time = 300000000
  for (const film of films) {
    const dates = film.dates
    dates.map((date) => {
      date.date += time
    })
    film.dates = dates
    result.push(film)
  }
  return result
}

const main = () => {
  const result = randomizeFilms(films)
  const data = JSON.stringify(result)
  writeFile('./src/data.json', data, (error) => {
    if (error) {
      console.error(error)
      throw error
    }
  })
  console.log('data.json written correctly')
}

main()
