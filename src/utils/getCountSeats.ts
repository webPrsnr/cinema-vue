import type { FilmSession, RentalDate } from '../listFilms'
interface CountSeats {
  time: string
  clickedDate: Date
}
export const getCountSeats = (
  { time, clickedDate }: CountSeats,
  dates: RentalDate[]
): FilmSession => {
  const date = dates.find((date) => date.date.getTime() === clickedDate.getTime())
  return (date as RentalDate).session.find((session) => session.time === time)!
}
