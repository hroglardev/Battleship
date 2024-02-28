export const selectElement = (selector) => {
  const element = document.querySelector(selector)
  return element
}

export const selectList = (selector) => {
  const list = [...document.querySelectorAll(selector)]
  return list
}
