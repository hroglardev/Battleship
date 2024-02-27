import { createHtmlElement } from '../../helpers/createHtmlElement.js'
import { selectElement } from '../../helpers/selectElements.js'
import { appendChildren } from '../../helpers/appendChildren.js'
import Logo from '../../assets/icons/logo.svg'
import './logo.scss'

export const logoComponent = () => {
  const header = selectElement('#header')
  const logo = createHtmlElement('img', null, null, 'logo')
  const pageTitle = createHtmlElement('h1', null, 'Battleship', 'page-title')

  logo.src = Logo
  appendChildren(header, logo, pageTitle)
}
