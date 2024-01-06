export interface FilmInfo {
  id: number
  name: string
  country: string
  duration: number
  genres: string[]
  ageLimit: number
  start: string
  director: string
  starring: string[]
  description: string
  dates: RentalDate[]
  imgTitle: string
}

export interface RentalDate {
  date: number
  session: FilmSession[]
}

export interface FilmSession {
  time: string
  totalSeats: number
  reserved: number[]
}
