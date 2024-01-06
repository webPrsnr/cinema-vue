import list from '@/data.json'
import { describe, it, expect } from 'vitest'
import { useSetSeats } from './useSetSeats'

describe('test useSetSeats hook', () => {
  it('check film session', () => {
    const film = list[0]
    const { date, session } = film.dates[0]
    const emitedData = { time: session[0].time, clickedDate: date }
    const { seats, setSeats } = useSetSeats(film.dates)
    seats.value = emitedData
    expect(setSeats.value).toEqual(session[0])
  })
})
