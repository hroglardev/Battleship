import { Player } from '../src/appLogic/player'
import { Game } from '../src/appLogic/game'
import { ships } from '../src/appLogic/ships'

let game

beforeEach(() => {
  game = new Game('Lucas')
})

describe('Game module', () => {
  test('contains all the initial properties', () => {
    expect(game).toHaveProperty('player1')
    expect(game).toHaveProperty('player2')
    expect(game).toHaveProperty('orientation')
    expect(game).toHaveProperty('selectedShip')

    expect(game.player1 && game.player2).toBeInstanceOf(Player)
    expect(game.orientation).toBe(false)
    expect(game.selectedShip).toBe(ships[0])
  })

  test('changeOrientation alternates booleans', () => {
    game.changeOrientation()
    expect(game.orientation).toBe(true)
    game.changeOrientation()
    expect(game.orientation).toBe(false)
  })

  test('nextShip moves to the next ship', () => {
    game.nextShip()
    expect(game.selectedShip).toBe(ships[1])
    game.nextShip()
    expect(game.selectedShip).toBe(ships[2])
  })

  test('resetGame resets the game module to initial value', () => {
    const player1reset = jest.spyOn(game.player1.board, 'resetBoard')
    const player2reset = jest.spyOn(game.player2.board, 'resetBoard')
    game.nextShip()
    game.nextShip()
    game.changeOrientation()
    game.resetGame()

    expect(player1reset && player2reset).toHaveBeenCalledTimes(1)
    expect(game.orientation).toBe(false)
    expect(game.selectedShip).toBe(ships[0])
  })
})
