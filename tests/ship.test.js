import { Ship } from '../src/appLogic/ship'

let ship

beforeEach(() => {
  ship = new Ship(3)
})

describe('Ship', () => {
  test('Does not allow length to not be specified', () => {
    const noLengthShip = () => new Ship()
    expect(noLengthShip).toThrowError('Ships are only allowed to be between 2 and 5 cells long')
  })

  test('Does not allow length to be higher than 5 or lower than 2', () => {
    const longShip = () => new Ship(7)
    const shortShip = () => new Ship(1)

    expect(longShip).toThrowError('Ships are only allowed to be between 2 and 5 cells long')
    expect(shortShip).toThrowError('Ships are only allowed to be between 2 and 5 cells long')
  })

  test('contains valid properties', () => {
    expect(ship).toHaveProperty('length')
    expect(ship).toHaveProperty('hits')
    expect(ship).toHaveProperty('isSunk')
  })

  test('starts with proper values', () => {
    expect(ship.length).toBe(3)
    expect(ship.hits).toBe(0)
    expect(ship.isSunk).toBeFalsy()
  })

  test('hit increases its hit status by 1', () => {
    const initialHits = ship.hits
    ship.hit()
    expect(ship.hits).toBe(initialHits + 1)
  })

  test("checkSunk returns sunk status according to the times the ship's been hit", () => {
    expect(ship.checkSunk()).toBeFalsy()
    for (let i = 0; i < ship.length; i++) {
      ship.hit()
    }
    expect(ship.checkSunk()).toBeTruthy()
  })

  test('sink sets the sunk status to true', () => {
    expect(ship.isSunk).toBeFalsy()
    ship.sink()
    expect(ship.isSunk).toBeTruthy()
  })
})
