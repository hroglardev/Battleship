import { Ship } from '../src/appLogic/ship'

let ship

beforeEach(() => {
  ship = new Ship(3)
})

describe('Ship', () => {
  test('Does not allow ships to be shorter than 2', () => {
    const noLengthShip = () => new Ship()
    expect(noLengthShip).toThrowError('Ships must be at least 2 units long')
  })

  test('Does not allow length to be higher than 5 or lower than 2', () => {
    const longShip = () => new Ship(7)
    expect(longShip).toThrowError('Ships must be shorter than 6 units')
  })

  test('contains valid properties', () => {
    expect(ship).toHaveProperty('shipLength')
    expect(ship).toHaveProperty('hits')
  })

  test('starts with proper values', () => {
    expect(ship.shipLength).toBe(3)
    expect(ship.hits).toBe(0)
  })

  test('hit increases its hit status by 1', () => {
    const initialHits = ship.hits
    ship.hit()
    expect(ship.hits).toBe(initialHits + 1)
  })

  test("isSunk returns sunk status according to the times the ship's been hit", () => {
    expect(ship.isSunk()).toBeFalsy()
    ship.hit()
    expect(ship.isSunk()).toBeFalsy()
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBeTruthy()
  })
})
