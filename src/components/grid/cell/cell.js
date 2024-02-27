import { createHtmlElement } from '../../../helpers/createHtmlElement'
import './cell.scss'
export const cellComponent = (cellId, boardCell, isPlayerGrid) => {
  const cell = createHtmlElement('div', cellId, '', 'cell')
  if (boardCell.hasShip && isPlayerGrid) {
  }
  return cell
}
