import { computed, ref } from 'vue'
import { getCountSeats } from '@/utils/getCountSeats'
import type { RentalDate } from '@/listFilms'

export const useSetSeats = (dates: RentalDate[]) => {
  const seats = ref<{ time: string; clickedDate: Date } | null>(null)
  // const isSeatsAvailable = computed(() => (seats.value ? true : false))
  const setSeats = computed(() => getCountSeats(seats.value!, dates))

  return { seats, setSeats }
}
