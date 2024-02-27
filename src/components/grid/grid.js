import { createHtmlElement } from '../../helpers/createHtmlElement'
import { selectElement } from '../../helpers/selectElements'
import { Gameboard } from '../../appLogic/gameboard'
import { cellComponent } from './cell/cell'
import { appendChildren } from '../../helpers/appendChildren'
import './grid.scss'

export const gridComponent = (gridId, isPlayerGrid) => {
  const gameBoard = new Gameboard()
  const main = selectElement('#main')
  const gridContainer = createHtmlElement('div', gridId, '', 'grid')
  const board = gameBoard.getBoard()

  board.forEach((boardCell) => {
    const gridCell = cellComponent(`${boardCell.x}-${boardCell.y}`, boardCell, isPlayerGrid)

    appendChildren(gridContainer, gridCell)
  })

  appendChildren(main, gridContainer)
}
