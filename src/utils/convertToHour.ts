export const converToHour = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${hours} час ${minutes.toString().padStart(2, '0')} минут`
}
