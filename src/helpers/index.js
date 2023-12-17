export const getFormatedTime = (inputDate) => {
  console.log(inputDate)
  inputDate = new Date(inputDate)
  let hours = inputDate.getHours()
  let minutes = inputDate.getMinutes()

  // Добавляем ведущий ноль, если число меньше 10
  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes

  let formattedTime = hours + ':' + minutes
  return formattedTime
}
