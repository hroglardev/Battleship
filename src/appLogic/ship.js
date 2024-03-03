export class Ship {
  constructor(length) {
    if (!length || length < 2) throw new Error('Ships must be at least 2 units long')
    if (length > 5) throw new Error('Ships must be shorter than 6 units')

    this.shipLength = length
    this.hits = 0
  }

  hit() {
    if (!this.isSunk()) {
      this.hits += 1
    }
  }

  isSunk() {
    return this.hits === this.shipLength
  }
}
