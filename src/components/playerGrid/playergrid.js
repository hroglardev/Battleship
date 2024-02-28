import { appendChildren } from '../../helpers/appendChildren'
import { createHtmlElement } from '../../helpers/createHtmlElement'
import { selectElement } from '../../helpers/selectElements'
import { game } from '../welcomeForm/welcomeFormAndInitiation'
import { Ship } from '../../appLogic/ship'
import './playerGrid.scss'

export const playerGrid = (id, board) => {
  const main = selectElement('#main')
  const grid = createHtmlElement('div', id, '', 'grid')

  appendChildren(main, grid)

  id === 'placeShips' &&
    board.forEach((target, index) => {
      const cell = cellComponent(index, id)
      if (target !== null && target === 'water') {
        cell.innerText = 'X'
        cell.classList.add('water')
      }

      if (target !== null && target !== 'water') {
        cell.innerText = 'O'
      }

      target === 'water' && cell.classList.add('water')
      appendChildren(grid, cell)
    })

  id === 'enemyGrid' &&
    board.forEach((_target, index) => {
      const cell = cellComponent(index, id)
      appendChildren(grid, cell)
    })
}

const cellComponent = (index, type) => {
  const cell = createHtmlElement('div', '', '', 'cell')
  const x = index.toString().length === 1 ? `${index.toString()}` : `${index.toString()[1]}`
  const y = index.toString().length === 1 ? '0' : `${index.toString()[0]}`

  cell.dataset.x = x
  cell.dataset.y = y

  type === 'placeShips' &&
    cell.addEventListener('click', () => {
      const selectedShip = game.selectedShip
      const gameOrientation = game.orientation
      const placedShip = game.player1.board.placeShip(new Ship(selectedShip), +cell.dataset.x, +cell.dataset.y, gameOrientation)
      const aside = selectElement('#aside')

      if (placedShip) {
        const label = selectElement(`label[for="${selectedShip}"]`)
        const selectShipUi = document.getElementById(`${selectedShip}`)
        const grid = selectElement('#placeShips')
        label.remove()
        selectShipUi.remove()
        grid.remove()
        playerGrid('placeShips', game.player1.board.board)
        if (aside.childElementCount <= 2) {
          selectElement('#swap').remove()
          playerGrid('enemyGrid', game.player2.board.board)
          selectElement('#placeShips').style.pointerEvents = 'none'
        }
      }
    })

  type === 'enemyGrid' &&
    cell.addEventListener('click', () => {
      game.player1.toggleActive()
      const successFulAttack = game.player2.board.receiveAttack(+cell.dataset.x, +cell.dataset.y)
      if (successFulAttack.success) {
        successFulAttack.targetType === 'ship' ? cell.classList.add('hit') : cell.classList.add('water')
        cell.innerText = successFulAttack.targetType === 'ship' ? 'O' : 'X'
      }
      const sunkenShips = game.player2.board.reportSunk()

      if (sunkenShips) {
        console.log(sunkenShips)
      }
    })

  type === 'playerGrid' &&
    cell.addEventListener('click', () => {
      game.player2.toggleActive()
      const successFulAttack = game.player1.board.receiveAttack(+cell.dataset.x, +cell.dataset.y)
      if (successFulAttack.success) {
        successFulAttack.targetType === 'ship' ? cell.classList.add('hit') : cell.classList.add('water')
        cell.innerText = successFulAttack.targetType === 'ship' ? 'O' : 'X'
      }
    })

  return cell
}
