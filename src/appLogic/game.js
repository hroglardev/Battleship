import { Player } from './player'
import { SHIPS } from './ships'

export class Game {
  constructor(player1) {
    this.player1 = new Player(player1)
    this.orientation = false
    this.selectedShip = SHIPS.carrier
    this.player2 = new Player('Computer')

    this.player2.placeRandomShips()
  }

  changeOrientation() {
    this.orientation = !this.orientation
  }

  setSelectedShip(shipType) {
    this.selectedShip = SHIPS[shipType]
  }
}
