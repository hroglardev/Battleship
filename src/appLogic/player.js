import { Gameboard } from './gameboard'
import { SHIPS } from './ships'
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
    for (const shipType in SHIPS) {
      let placedShip = false
      while (!placedShip) {
        const x = Math.floor(Math.random() * this.board.size)
        const y = Math.floor(Math.random() * this.board.size)
        const shipLength = SHIPS[shipType]
        const ship = new Ship(shipLength)
        const orientation = Math.random() < 0.5
        placedShip = this.board.placeShip(ship, x, y, orientation)
      }
    }
  }

  randomAttack() {
    let attackWasSuccessful = false
    while (!attackWasSuccessful) {
      const x = Math.floor(Math.random() * this.board.size)
      const y = Math.floor(Math.random() * this.board.size)
      attackWasSuccessful = this.board.receiveAttack(x, y)
    }
    this.toggleActive()
  }
}
