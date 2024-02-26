export class Ship {
  constructor(length) {
    if (length < 2 || length > 5 || !length) {
      throw new Error('Ships are only allowed to be between 2 and 5 cells long')
    }

    this.length = length
    this.hits = 0
    this.isSunk = false
  }

  hit() {
    if (!this.isSunk) {
      this.hits += 1
    }
  }

  checkSunk() {
    return this.length === this.hits
  }

  sink() {
    this.isSunk = true
  }
}
