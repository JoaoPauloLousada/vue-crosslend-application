const putLeadingZero = (str, desiredStrLength) => `0${str}`.slice(-desiredStrLength)

export const formatDate = (date) => {
  const day = putLeadingZero(date.getDate(), 2)
  const month = putLeadingZero(date.getMonth() + 1, 2)
  const year = putLeadingZero(date.getFullYear(), 4)
  return `${day}-${month}-${year}`
}

export const firstDateIsGreater = (date1, date2) => {
  const firstDate = new Date(date1)
  const secondDate = new Date(date2)
  return firstDate.getTime() > secondDate.getTime()
}
