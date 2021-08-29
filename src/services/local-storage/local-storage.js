const LOCAL_STORAGE_KEY = 'mike-survey'

export const loadLocalStorage = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
}

export const setLocalStorage = (data) => {
  const existingData = loadLocalStorage()

  existingData ?
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ ...existingData, ...data })) :
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
}