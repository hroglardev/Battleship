import { addClasses } from './addClasses'

export const createHtmlElement = (tag, id, text, ...classes) => {
  const element = document.createElement(tag)
  if (id) element.id = id
  if (text) element.innerText = text
  if (classes) addClasses(element, classes)

  return element
}
