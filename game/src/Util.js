
import {defaultBlocks, initialHashingRate} from './Config'

export const loadBlocks = () =>
  Number(JSON.parse(window.localStorage.getItem('blocks') || defaultBlocks))

export const loadClicks = () =>
  JSON.parse(window.localStorage.getItem('clicks') || '[]')

export const loadHashingRate = () =>
  Number(JSON.parse(window.localStorage.getItem('hashingRate') || initialHashingRate))

export const loadCoins = () =>
  Number(JSON.parse(window.localStorage.getItem('coins') || 0))

export const loadMoney = () =>
  Number(JSON.parse(window.localStorage.getItem('money') || 0))
