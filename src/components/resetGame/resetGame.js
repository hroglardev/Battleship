import { appendChildren } from '../../helpers/appendChildren'
import { createHtmlElement } from '../../helpers/createHtmlElement'
import { selectElement, selectList } from '../../helpers/selectElements'
import { shipSelection } from '../ships/shipSelection'
import { game } from '../welcomeForm/welcomeFormAndInitiation'
import { playerGrid } from '../playerGrid/playergrid'
import './resetGame.scss'

export const resetGame = () => {
  const container = createHtmlElement('div', 'reset-container')
  const button = createHtmlElement('button', 'reset-game', 'Play again')
  const header = selectElement('#header')

  button.addEventListener('click', () => {
    game.resetGame()
    shipSelection()
    const grids = selectList('.grid-container')
    grids.forEach((grid) => grid.remove())
    playerGrid('placeShips', game.player1.board.board)
    button.remove()
  })
  appendChildren(container, button)
  appendChildren(header, container)
}
