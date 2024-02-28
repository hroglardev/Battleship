export class Gameboard {
  constructor() {
    this.size = 10
    this.board = new Array(this.size * this.size).fill(null)
    this.attackedTargets = []
  }

  placeShip(ship, x, y, isVertical) {
    const shipCells = []

    for (let i = 0; i < ship.shipLength; i++) {
      if (isVertical) {
        if (y + (ship.shipLength - 1) <= this.size - 1) {
          shipCells.push(Number(`${y + i}${x}`))
        } else {
          return false
        }
      } else {
        if (x + (ship.shipLength - 1) <= this.size - 1) {
          shipCells.push(Number(`${y}${x + i}`))
        } else {
          return false
        }
      }
    }

    const canPlaceShip = this.#isValidPlacement(shipCells)

    canPlaceShip && shipCells.forEach((index) => (this.board[index] = ship))

    return canPlaceShip
  }

  receiveAttack(x, y) {
    const boardIndex = Number(`${y}${x}`)

    if (this.board[boardIndex] === 'water' || this.attackedTargets.includes(boardIndex)) {
      console.log(`Le pegue a la celda ${y}${x} y ya había sido atacada`)
      return false
    }

    const targetCoordinates = this.board[boardIndex]

    if (targetCoordinates !== null) {
      targetCoordinates.hit()
      this.attackedTargets.push(boardIndex)
      console.log(`Le pegue a la celda ${y}${x} y habia un barco`)
    } else {
      console.log(`Le pegue a la celda ${y}${x} y habia agua`)
      this.board[boardIndex] = 'water'
      this.attackedTargets.push(boardIndex)
      console.log(this.board)
      console.log(this.attackedTargets)
    }
    return true
  }

  #isValidPlacement(shipCells) {
    return shipCells.every((index) => this.board[index] === null)
  }

  reportSunk() {
    const shipCells = this.board.filter((cell) => cell !== 'water' && cell !== null)
    return shipCells.every((ship) => ship.isSunk())
  }
}
