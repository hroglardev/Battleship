'use strict'
import { gridComponent } from './components/grid/grid'
import { logoComponent } from './components/logo/logo'
import './styles/globals.scss'
console.log('hello world')

logoComponent()
gridComponent('player', true)
gridComponent('pc', false)
