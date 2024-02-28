export class Gameboard {
  constructor() {
    this.size = 10
    this.board = new Array(this.size * this.size).fill(null)
    this.attackedTargets = []

    this.placeShip = this.placeShip.bind(this)
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
      return { success: false, targetType: null }
    }

    const targetCoordinates = this.board[boardIndex]

    if (targetCoordinates !== null && targetCoordinates !== 'water') {
      targetCoordinates.hit()
      this.attackedTargets.push(boardIndex)
      return { success: true, targetType: 'ship' }
    } else {
      this.board[boardIndex] = 'water'
      this.attackedTargets.push(boardIndex)
      return { success: true, targetType: 'water' }
    }
  }

  #isValidPlacement(shipCells) {
    return shipCells.every((index) => this.board[index] === null)
  }

  reportSunk() {
    const shipCells = this.board.filter((cell) => cell !== 'water' && cell !== null)
    return shipCells.every((ship) => ship.isSunk())
  }
}
