import { SHIPS } from '../../appLogic/ships'
import { appendChildren } from '../../helpers/appendChildren'
import { createHtmlElement } from '../../helpers/createHtmlElement'
import { selectElement, selectList } from '../../helpers/selectElements'
import { game } from '../welcomeForm/welcomeFormAndInitiation'
import './shipSelection.scss'

export const shipSelection = () => {
  const aside = selectElement('#aside')
  for (const shipType in SHIPS) {
    const label = createHtmlElement('label', '', shipType)
    label.setAttribute('for', SHIPS[shipType])
    const container = createHtmlElement('div', SHIPS[shipType], '', 'ship-selector', 'horizontal')

    let counter = 0

    while (counter < SHIPS[shipType]) {
      const cell = createHtmlElement('div')
      cell.style.width = '20px'
      cell.style.height = '20px'
      cell.style.border = '1px solid black'
      appendChildren(container, cell)
      counter++
    }

    container.addEventListener('click', () => {
      game.setSelectedShip(shipType)
      const otherContainers = selectList('.ship-selector')
      otherContainers.forEach((item) => item.classList.remove('selected'))
      container.classList.add('selected')
    })
    appendChildren(aside, label, container)
  }

  const button = createHtmlElement('button', 'swap', 'swap-orientation')
  button.addEventListener('click', () => {
    game.changeOrientation()
    const shipList = selectList('.ship-selector')
    shipList.forEach((ship) => ship.classList.toggle('horizontal'))
  })
  appendChildren(aside, button)
}
