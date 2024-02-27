'use strict'

import { Gameboard } from './appLogic/gameboard'
import { logoComponent } from './components/logo/logo'
import { Ship } from './appLogic/ship'
import './styles/globals.scss'

console.log('HELLO WORLD')

logoComponent()
const myGameBoard = new Gameboard()
console.log(myGameBoard.board)

myGameBoard.placeShip(new Ship(5), 3, 4, false)
myGameBoard.placeShip(new Ship(4), 2, 6, true)
console.log(myGameBoard.board)
