export class BoardCell {
  constructor(x, y) {
    if (x === undefined || y === undefined || x === null || y === null) throw new Error('Must input both x and y coordinates')
    if (x < 0 || x > 9 || y < 0 || y > 9) throw new Error('Coordinates must be between 0 and 9')

    this.x = x
    this.y = y
    this.hasShip = false
    this.clicked = false
    this.ship = null
  }

  setShip(ship) {
    this.hasShip = true
    this.ship = ship
  }

  takeHit() {
    if (this.hasShip) {
      this.ship.hit()
      const isSunk = this.ship.checkSunk()
      this.clicked = true
      if (isSunk) {
        this.ship.sink()
      }
    } else {
      this.clicked = true
    }
  }
}
