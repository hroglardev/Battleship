import { appendChildren } from '../../helpers/appendChildren'
import { createHtmlElement } from '../../helpers/createHtmlElement'
import { selectElement } from '../../helpers/selectElements'
import { game } from '../welcomeForm/welcomeFormAndInitiation'
import { Ship } from '../../appLogic/ship'
import './playerGrid.scss'
import { shipSelection } from '../ships/shipSelection'
import { resetGame } from '../resetGame/resetGame'

export const playerGrid = (id, board) => {
  const container = selectElement('#playing-grids')
  const gridContainer = createHtmlElement('div', '', '', 'grid-container')
  const grid = createHtmlElement('div', id, '', 'grid')
  const gridLabel = createHtmlElement('p', '', '', 'grid-label')
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
      gridLabel.id = 'player-grid-label'
      gridLabel.innerText = `Admiral ${game.player1.name}'s waters`
      selectElement('#player')
      appendChildren(grid, cell)
    })

  id === 'enemyGrid' &&
    board.forEach((_target, index) => {
      const cell = cellComponent(index, id)
      gridLabel.innerText = 'Enemy waters'
      appendChildren(grid, cell)
    })

  appendChildren(container, gridContainer)
  appendChildren(gridContainer, gridLabel, grid)
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
      const placedShip = game.player1.board.placeShip(new Ship(selectedShip.length), +cell.dataset.x, +cell.dataset.y, gameOrientation)

      if (placedShip) {
        const label = selectElement(`label[for="${selectedShip.type}"]`)
        const selectShipUi = document.getElementById(`${selectedShip.type}`)
        const grid = selectElement('.grid-container')
        label.remove()
        selectShipUi.remove()
        grid.remove()
        playerGrid('placeShips', game.player1.board.board)
        if (selectedShip.type === 'Destroyer') {
          selectElement('#swap').remove()
          playerGrid('enemyGrid', game.player2.board.board)
          selectElement('#placeShips').style.pointerEvents = 'none'
          const messages = selectElement('#messages')
          messages.innerText = 'Take aim and attack the enemy'
        } else {
          game.nextShip()
          selectElement('#swap').remove()
          shipSelection()
        }
      }
    }),
    (cell.id = index)

  type === 'enemyGrid' &&
    cell.addEventListener('click', () => {
      game.player1.toggleActive()
      const messages = selectElement('#messages')

      const successFulAttack = game.player2.board.receiveAttack(+cell.dataset.x, +cell.dataset.y)

      if (successFulAttack.success) {
        successFulAttack.targetType === 'ship' ? cell.classList.add('hit') : cell.classList.add('water')
        cell.innerText = successFulAttack.targetType === 'ship' ? 'O' : 'X'
        messages.innerText = successFulAttack.targetType === 'ship' ? "You hit the enemy's ship" : 'Your missile landed in water'
      }

      const sunkenShips = game.player2.board.reportSunk()

      const enemyGrid = selectElement('#enemyGrid')
      enemyGrid.classList.add('inactive')

      if (sunkenShips) {
        messages.innerText = "You've sunken all enemy ships"
        resetGame()
        return
      }
      setTimeout(() => {
        messages.innerText = 'Enemy is taking aim'
      }, 1500)

      setTimeout(() => {
        const aiAttack = game.player1.randomAttack()
        if (aiAttack.success) {
          const targetCell = document.getElementById(`${aiAttack.targetIndex}`)
          aiAttack.targetType === 'ship' ? targetCell.classList.add('hit') : targetCell.classList.add('water')
          targetCell.innerText = aiAttack.targetType === 'ship' ? 'O' : 'X'
          messages.innerText = aiAttack.targetType === 'ship' ? 'The enemy managed to hit you' : 'Enemy missile landed in water'
        }

        const sunkenShipsPlayer = game.player1.board.reportSunk()

        if (sunkenShipsPlayer) {
          enemyGrid.classList.add('inactive')
          messages.innerText = 'The enemy has sunken all your ships!'
          resetGame()
          return
        } else {
          setTimeout(() => {
            enemyGrid.classList.remove('inactive')
            messages.innerText = 'Take aim and attack the enemy'
          }, 1000)
        }
      }, 2500)
    })

  return cell
}
