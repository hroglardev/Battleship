import { appendChildren } from '../../helpers/appendChildren'
import { createHtmlElement } from '../../helpers/createHtmlElement'
import { selectElement } from '../../helpers/selectElements'
import { Game } from '../../appLogic/game'
import { playerGrid } from '../playerGrid/playergrid'
import { shipSelection } from '../ships/shipSelection'

export let game

export const welcomeForm = (id) => {
  const main = selectElement('#main')
  const form = createHtmlElement('form', 'create-player')
  const label = createHtmlElement('label', '', "What's your name Admiral?")
  const input = createHtmlElement('input', id)
  const button = createHtmlElement('button', 'submit', 'Start')

  form.setAttribute('novalidate', true)
  label.setAttribute('for', id)
  input.type = 'text'
  input.name = id

  appendChildren(main, form)
  appendChildren(form, label, input, button)

  form.addEventListener('submit', (event) => createPlayer1(form, event, input.value))
}

const createPlayer1 = (form, event, player1Name) => {
  event.preventDefault()
  game = new Game(player1Name)

  form.remove()
  playerGrid('placeShips', game.player1.board.board)
  shipSelection()
}
