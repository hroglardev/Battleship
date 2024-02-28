'use strict'

import { Gameboard } from './appLogic/gameboard'
import { logoComponent } from './components/logo/logo'
import { Ship } from './appLogic/ship'
import './styles/globals.scss'

console.log('HELLO WORLD')

logoComponent()
const myGameBoard = new Gameboard()

myGameBoard.placeShip(new Ship(5), 3, 4, false)
myGameBoard.placeShip(new Ship(4), 2, 6, true)
myGameBoard.placeShip(new Ship(3), 0, 3, true)
myGameBoard.placeShip(new Ship(3), 0, 3, true)

myGameBoard.receiveAttack(3, 4)
myGameBoard.receiveAttack(1, 9)

console.log(myGameBoard.reportSunk())
console.log(myGameBoard)
