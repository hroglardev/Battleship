const ships = {
  carrier: 5,
  battleship: 4,
  cruiser: 3,
  submarine: 3,
  destroryer: 2
}

export class Ship {
  constructor(length) {
    if (length < 1) {
      throw new Error('Ship length must be greater than 0.')
    }
    this.shipLength = length
    this.hits = 0
  }

  hit() {
    if (!this.isSunk()) {
      this.hits += 1
    }
  }

  isSunk() {
    return this.hits === this.length
  }
}
