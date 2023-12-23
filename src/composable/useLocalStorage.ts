import { reactive } from 'vue'

interface StorageRef {
  filmId: number
  time: string
  date: number
  reservedSeats: number[]
}

interface LCProps {
  id: number
  date: number
  time: string
}

const LOCALE_STORAGE_KEY = 'reserved'

const isExist = (el: StorageRef, id: number, date: number, time: string) =>
  el.filmId === id && el.date === date && el.time === time

const initLocaleStorage = () => {
  let store = reactive<StorageRef[]>([])
  const localeStorage = window.localStorage

  const get = ({ date, id, time }: LCProps) => {
    const value = localeStorage.getItem(LOCALE_STORAGE_KEY)
    if (value) {
      const obj: StorageRef[] = JSON.parse(value)
      store = obj
      // debugger
    }

    return store.find((el) => isExist(el, id, date, time))?.reservedSeats || null
  }

  const set = ({ date, id, time }: LCProps, seats: number[]) => {
    const index = store.findIndex((el) => isExist(el, id, date, time))
    if (index >= 0) {
      store[index].reservedSeats.push(...seats)
    } else {
      const obj: StorageRef = {
        filmId: id,
        date: date,
        reservedSeats: seats,
        time: time
      }

      store.push(obj)
    }
    localeStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(store))
  }

  const getAllItems = () => {
    const value = localeStorage.getItem(LOCALE_STORAGE_KEY)
    if (value) {
      const obj: StorageRef[] = JSON.parse(value)
      return obj
    }
    return []
  }

  return { get, set, getAllItems }
}

export const { get: useGetLC, set: useSetLC, getAllItems } = initLocaleStorage()
