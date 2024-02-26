import { BoardCell } from './boardCell.js'

export class Gameboard {
  constructor() {
    this.size = 10
    this.board = []
    this.buildBoard()
  }

  buildBoard() {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        const cell = new BoardCell(i, j)
        this.board.push(cell)
      }
    }
  }

  placeShip(ship, startX, startY, endX) {
    const isVertical = this.checkVerticality(startX, endX)
    const shipCells = []

    if (!isVertical) {
      for (let i = 0; i < ship.length; i++) {
        const x = startX + i
        const y = startY
        const cell = this.getCell(x, y)
        shipCells.push(cell)
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        const x = startX
        const y = startY + i
        const cell = this.getCell(x, y)
        shipCells.push(cell)
      }
    }

    const isPlacementValid = this.checkValidity(shipCells)

    if (isPlacementValid) {
      shipCells.forEach((cell) => {
        cell.setShip(ship)
      })
    }
  }

  checkValidity(shipCells) {
    return shipCells.every((cell) => cell.hasShip === false)
  }

  checkVerticality(startX, endX) {
    return startX === endX
  }
  getCell(x, y) {
    return this.board.find((cell) => cell.x === x && cell.y === y)
  }
}

const myGameboard = new Gameboard()
console.log(myGameboard.getCell(0, 0))
