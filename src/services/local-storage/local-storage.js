export const loadItem = (key) => {
    return localStorage.getItem(key)
}

export const setItem = (key, value) => {
    return localStorage.setItem(key, value)
}