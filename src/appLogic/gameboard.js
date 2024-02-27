export class Gameboard {
  constructor() {
    this.size = 10
    this.board = new Array(this.size * this.size).fill(null)
  }

  placeShip(ship, x, y, isVertical) {
    const shipCells = []
    for (let i = 0; i < ship.shipLength; i++) {
      if (isVertical) {
        shipCells.push(Number(`${y + i}${x}`))
      } else {
        shipCells.push(Number(`${y}${x + i}`))
      }
    }
    console.log(shipCells)
  }

  isValidPlacement(shipCells, ship) {
    const validity = shipCells.every((index) => this.board[index] === null)
    if (validity) {
      shipCells.forEach((index) => {
        this.board[index] = ship
      })
    }
    return validity
  }
}
