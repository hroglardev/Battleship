import { appendChildren } from '../../helpers/appendChildren'
import { createHtmlElement } from '../../helpers/createHtmlElement'
import { selectElement } from '../../helpers/selectElements'
import { game } from '../welcomeForm/welcomeFormAndInitiation'
import './shipSelection.scss'

export const shipSelection = () => {
  const aside = selectElement('#aside')
  aside.innerHtml = ''
  const currentShip = game.selectedShip

  const label = createHtmlElement('label', '', currentShip.type)

  label.setAttribute('for', currentShip.type)
  const container = createHtmlElement('div', currentShip.type, '', 'ship-selector', !game.orientation && 'horizontal')

  let counter = 0

  while (counter < currentShip.length) {
    const cell = createHtmlElement('div', '', '', 'select-ship-cell')

    appendChildren(container, cell)
    counter++
  }

  appendChildren(aside, label, container)

  const messages = selectElement('#messages')
  messages.innerText = `Place your ${currentShip.type} by clicking on the grid`

  const button = createHtmlElement('button', 'swap', 'Swap orientation')
  button.addEventListener('click', () => {
    game.changeOrientation()
    container.classList.toggle('horizontal')
  })
  appendChildren(aside, button)
}
