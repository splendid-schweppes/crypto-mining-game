
import {defaultBlocks, initialHashingRate} from './Config'
import {random} from 'lodash'

const getRandomConversionRate = () => random(10, 1100, true)

export const loadBlocks = () =>
  Number(JSON.parse(window.localStorage.getItem('blocks') || defaultBlocks))

export const loadClicks = () =>
  JSON.parse(window.localStorage.getItem('clicks') || '[]')

export const loadHashingRate = () =>
  Number(JSON.parse(window.localStorage.getItem('hashingRate') || initialHashingRate))

export const loadCoins = () =>
  Number(JSON.parse(window.localStorage.getItem('coins') || 0))

export const loadMoney = () =>
  Number(JSON.parse(window.localStorage.getItem('money') || 10000))

export const loadAssets = () =>
  JSON.parse(window.localStorage.getItem('assets') || '[]')

export const loadAchievements = () =>
  JSON.parse(window.localStorage.getItem('achievements') || '[]')

export const loadSellingRate = () =>
  JSON.parse(window.localStorage.getItem('sellingrate') || getRandomConversionRate())

export const saveSellingRate = sellingrate =>
  window.localStorage.setItem('sellingrate', JSON.stringify(sellingrate))

export const loadElectricity = () =>
  JSON.parse(window.localStorage.getItem('electricity') || 0)

export const saveElectricity = electricity =>
  window.localStorage.setItem('electricity', JSON.stringify(electricity))
