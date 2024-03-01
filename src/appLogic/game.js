import { Player } from './player'
import { ships } from './ships'

export class Game {
  constructor(player1) {
    this.player1 = new Player(player1)
    this.orientation = false

    this.player2 = new Player('Computer')

    this.selectedShip = ships[0]

    this.player2.placeRandomShips()
  }

  changeOrientation() {
    this.orientation = !this.orientation
  }

  nextShip() {
    const currentShipIndex = ships.indexOf(this.selectedShip)
    this.selectedShip = ships[currentShipIndex + 1]
  }

  resetGame() {
    this.player1.board.resetBoard()
    this.player2.board.resetBoard()
    this.selectedShip = ships[0]
    this.orientation = false
    this.player2.placeRandomShips()
  }
}
