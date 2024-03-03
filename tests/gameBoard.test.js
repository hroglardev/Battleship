import { Gameboard } from '../src/appLogic/gameboard'
import { Ship } from '../src/appLogic/ship'
let gameBoard

beforeEach(() => {
  gameBoard = new Gameboard()
})

describe('Gameboard module', () => {
  test('contains the necessary initial values', () => {
    expect(gameBoard).toHaveProperty('size')
    expect(gameBoard).toHaveProperty('board')
    expect(gameBoard).toHaveProperty('attackedTargets')

    expect(gameBoard.size).toBe(10)
    expect(gameBoard.board.length).toBe(100)

    gameBoard.board.forEach((cell) => {
      expect(cell).toBeNull()
    })

    expect(gameBoard.attackedTargets).toEqual([])
  })

  test('places a horizontal ship successfully', () => {
    const ship = new Ship(3)
    const x = 2
    const y = 3
    const isVertical = false

    const index = Number(`${y}${x}`)
    const result = gameBoard.placeShip(ship, x, y, isVertical)

    expect(result).toBe(true)
    expect(gameBoard.board.slice(index, index + 3)).toEqual([ship, ship, ship])
  })

  test('places a vertical ship successfully', () => {
    const ship = new Ship(4)
    const x = 5
    const y = 2
    const isVertical = true
    const index = Number(`${y}${x}`)
    const result = gameBoard.placeShip(ship, x, y, isVertical)

    expect(result).toBe(true)
    expect([gameBoard.board[index], gameBoard.board[index + 10], gameBoard.board[index + 20], gameBoard.board[index + 30]]).toEqual([ship, ship, ship, ship])
  })

  test('fails to place a ship due to out-of-bounds', () => {
    const ship = new Ship(4)
    const x = 9
    const y = 7
    const isVertical = true

    const result = gameBoard.placeShip(ship, x, y, isVertical)

    expect(result).toBe(false)
    expect(gameBoard.board.every((cell) => cell === null)).toBe(true)
  })

  test('fails to place a ship due to overlap with existing ship', () => {
    const ship1 = new Ship(3)
    const ship2 = new Ship(3)

    gameBoard.placeShip(ship1, 2, 3, false)

    const result = gameBoard.placeShip(ship2, 3, 3, true)

    expect(result).toBe(false)
  })

  test('receives attack at ship and tracks the attacked index', () => {
    const ship = new Ship(3)
    const x = 1
    const y = 5
    const index = Number(`${y}${x}`)
    gameBoard.placeShip(ship, 1, 5, true)

    const result = gameBoard.receiveAttack(x, y)

    expect(result).toEqual({ success: true, targetType: 'ship', targetIndex: index })
    expect(gameBoard.attackedTargets).toContain(index)
  })

  test('receives attack at water and tracks the attacked index', () => {
    const x = 1
    const y = 5
    const index = Number(`${y}${x}`)

    const result = gameBoard.receiveAttack(x, y)

    expect(result).toEqual({ success: true, targetType: 'water', targetIndex: index })
    expect(gameBoard.attackedTargets).toContain(index)
  })

  test('returns the appropiate info if cell has been attacked', () => {
    const x = 1
    const y = 5
    const index = Number(`${y}${x}`)

    const result = gameBoard.receiveAttack(x, y)

    expect(result).toEqual({ success: true, targetType: 'water', targetIndex: index })

    const resultRepeated = gameBoard.receiveAttack(x, y)
    expect(resultRepeated).toEqual({ success: false, targetType: null })
  })

  test('reportSunk returns false when at least one ship is not sunk', () => {
    const ship1 = new Ship(4)
    const ship2 = new Ship(3)

    const x = 1
    const y = 5

    gameBoard.placeShip(ship1, x, y, true)
    gameBoard.placeShip(ship2, x + 3, y, false)

    expect(gameBoard.reportSunk()).toBe(false)
  })

  test('reportSunk returns true when all ships are sunk', () => {
    const ship1 = new Ship(2)

    const x = 1
    const y = 5

    gameBoard.placeShip(ship1, x, y, true)
    gameBoard.receiveAttack(x, y)
    gameBoard.receiveAttack(x, y + 1)

    expect(gameBoard.reportSunk()).toBe(true)
  })

  test('resetBoard assigns all board cell values to null and cleans up the attacked targets', () => {
    const ship1 = new Ship(2)

    const x = 1
    const y = 5

    gameBoard.placeShip(ship1, x, y, true)
    gameBoard.receiveAttack(x, y)

    gameBoard.resetBoard()

    expect(gameBoard.attackedTargets).toEqual([])

    gameBoard.board.forEach((cell) => {
      expect(cell).toBeNull()
    })
  })
})
