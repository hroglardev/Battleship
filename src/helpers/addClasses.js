export const addClasses = (element, classesArray) => {
  classesArray.forEach((className) => {
    element.classList.add(className)
  })
}
