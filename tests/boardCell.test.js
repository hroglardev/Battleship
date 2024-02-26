import { BoardCell } from '../src/appLogic/boardCell'
import { Ship } from '../src/appLogic/ship'

let cell
let ship

beforeEach(() => {
  ship = new Ship(3)
  cell = new BoardCell(0, 5)
})

describe('BoardCell', () => {
  test('throws error when either x or y coordinates are not chosen', () => {
    const results = {
      first: () => new BoardCell(2),
      second: () => new BoardCell()
    }
    expect(results.first).toThrowError('Must input both x and y coordinates')
    expect(results.second).toThrowError('Must input both x and y coordinates')
  })

  test('throws error when coordinates are higher than 9 or lower than 0', () => {
    const results = {
      wrongX: () => new BoardCell(-1, 0),
      wrongY: () => new BoardCell(4, 12)
    }
    expect(results.wrongX).toThrowError('Coordinates must be between 0 and 9')
    expect(results.wrongY).toThrowError('Coordinates must be between 0 and 9')
  })

  test('contains initial properties', () => {
    expect(cell).toHaveProperty('x')
    expect(cell).toHaveProperty('y')
    expect(cell).toHaveProperty('hasShip')
    expect(cell).toHaveProperty('ship')
  })

  test('starts with proper values', () => {
    expect(cell.x).toBe(0)
    expect(cell.y).toBe(5)
    expect(cell.hasShip).toBeFalsy()
    expect(cell.ship).toBeNull()
  })

  test('setShip sets the hasShip property to true and asigns the ship property to contain the ship', () => {
    expect(cell.hasShip).toBeFalsy()
    expect(cell.ship).toBeNull()
    cell.setShip(ship)
    expect(cell.hasShip).toBeTruthy()
    expect(cell.ship).toBe(ship)
  })

  test("takeHit doesn't increase ships hit property if it does not contain it", () => {
    expect(cell.ship).toBeNull()
    expect(cell.takeHit()).toBeFalsy()
  })

  test('takeHit calls hit and checkSunk functions', () => {
    const hitSpy = jest.spyOn(ship, 'hit')
    const checkSunkSpy = jest.spyOn(ship, 'checkSunk')
    cell.setShip(ship)
    cell.takeHit()
    expect(hitSpy && checkSunkSpy).toHaveBeenCalledTimes(1)
  })

  test('takeHit calls sink function when ship takes enough hits', () => {
    const isSunkSpy = jest.spyOn(ship, 'sink')
    cell.setShip(ship)
    expect(ship.hits).toBe(0)

    for (let i = 0; i < ship.length; i++) {
      cell.takeHit()
    }

    expect(isSunkSpy).toHaveBeenCalledTimes(1)
  })
})
