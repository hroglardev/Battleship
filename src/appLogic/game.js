import { Player } from './player'
import { Gameboard } from './gameboard'
export class Game {
  constructor(player1Name, player2Name) {
    this.player1 = new Player(player1Name, 'human')
    this.player2 = new Player(player2Name, 'pc')
    this.activePlayer = this.player1
    this.gameOver = false

    this.player1Board = new Gameboard()
    this.player2Board = new Gameboard()
  }

  switchTurn() {
    this.activePlayer.toggleTurn()
    this.activePlayer = this.activePlayer === this.player1 ? this.player2 : this.player1
  }

  handleMove() {}
}
