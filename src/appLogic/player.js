class Player {
  constructor(name, type = 'human') {
    this.name = name
    this.type = type
    this.turn = false
  }

  toggleTurn() {
    this.turn = !this.turn
  }
}
