import { Ship } from '../src/appLogic/ship'
import { Player } from '../src/appLogic/player'
import { Gameboard } from '../src/appLogic/gameboard'
import { ships } from '../src/appLogic/ships'

let player

beforeEach(() => {
  player = new Player('Lucas')
})

describe('Player', () => {
  test('contains the appropiate properties', () => {
    expect(player).toHaveProperty('name')
    expect(player).toHaveProperty('board')
    expect(player).toHaveProperty('isActive')
  })

  test('board and isActive start with Gameboard and false respectively', () => {
    expect(player.board).toBeInstanceOf(Gameboard)
    expect(player.isActive).toBeFalsy()
  })

  test('toggleActive alternates the isActive status between true and false', () => {
    player.toggleActive()
    expect(player.isActive).toBeTruthy()
    player.toggleActive()
    expect(player.isActive).toBeFalsy()
  })

  test("places random ships in the player's grid", () => {
    jest.spyOn(player.board, 'placeShip').mockReturnValue(true)

    player.placeRandomShips()

    for (const shipType of ships) {
      expect(player.board.placeShip).toHaveBeenCalledWith(expect.any(Ship), expect.any(Number), expect.any(Number), expect.any(Boolean))
    }
  })

  test('Ai attack picks random cell and retries if it hits a previously attacked one', () => {
    jest.spyOn(player.board, 'receiveAttack').mockImplementation((x, y) => {
      return x === 1 && y === 1 ? { success: true } : { success: false }
    })

    const result = player.randomAttack()

    expect(player.board.receiveAttack).toHaveBeenCalledWith(expect.any(Number), expect.any(Number))
    expect(result.success).toBe(true)
  })
})
