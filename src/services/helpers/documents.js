import { firstDateIsGreater } from '@/services/helpers/date'

export const ALLOWED_FORMATS = ['pdf', 'docx']

export const filterDocumentsListByExtensions = (allowedFormats, list) => {
  const regex = new RegExp('[^.]+$')

  return list.filter(item => {
    try {
      const extension = item.name.match(regex)[0]
      return allowedFormats.includes(extension)
    } catch (e) {
      return false
    }
  })
}

export const filterByDate = (list, dates) => {
  return list
    .filter(item => firstDateIsGreater(new Date(item.date), dates.dateFrom))
    .filter(item => !firstDateIsGreater(new Date(item.date), dates.dateTo))
}

export const sortByDate = (list) => {
  const compare = (item1, item2) => {
    if (firstDateIsGreater(new Date(item1.date), new Date(item2.date))) return 1
    return -1
  }

  return list.sort(compare)
}

export const sortByName = (list) => {
  const compare = (itemA, itemB) => itemA.name.localeCompare(itemB.name)
  return list.sort(compare)
}
