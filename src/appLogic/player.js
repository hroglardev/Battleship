import { Gameboard } from './gameboard'
import { ships } from './ships'
import { Ship } from './ship'

export class Player {
  constructor(name) {
    this.name = name
    this.board = new Gameboard()
    this.isActive = false
  }

  toggleActive() {
    this.isActive = !this.isActive
  }

  placeRandomShips() {
    for (const shipType of ships) {
      let placedShip = false
      while (!placedShip) {
        const x = Math.floor(Math.random() * this.board.size)
        const y = Math.floor(Math.random() * this.board.size)
        const shipLength = shipType.length
        const ship = new Ship(shipLength)
        const orientation = Math.random() < 0.5
        placedShip = this.board.placeShip(ship, x, y, orientation)
      }
    }
  }

  randomAttack() {
    let attackWasSuccessful = { success: false }
    while (!attackWasSuccessful.success) {
      const x = Math.floor(Math.random() * this.board.size)
      const y = Math.floor(Math.random() * this.board.size)
      attackWasSuccessful = this.board.receiveAttack(x, y)
    }
    this.toggleActive()
    return attackWasSuccessful
  }
}
