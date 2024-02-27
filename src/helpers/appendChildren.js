export const appendChildren = (parentElement, ...children) => {
  children.forEach((child) => parentElement.appendChild(child))
}
