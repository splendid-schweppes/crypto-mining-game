import {defaultBlocks, initialHashingRate} from './Config'
import {random} from 'lodash'
import {shopAssets} from './shopAssets'
import {powerUps} from './powerUpAssets'

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
  Number(JSON.parse(window.localStorage.getItem('money') || 0))

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

export const saveShopAssets = shopAssets =>
  window.localStorage.setItem('shopAssets', JSON.stringify(shopAssets))

export const loadShopAssets = () =>
  JSON.parse(window.localStorage.getItem('shopAssets'))  || shopAssets

export const savePowerUps = powerUps =>
  window.localStorage.setItem('powerUps', JSON.stringify(powerUps))

export const loadPowerUps = () =>
  JSON.parse(window.localStorage.getItem('powerUps'))  || powerUps

export const loadPowerUpsOwned = () =>
  JSON.parse(window.localStorage.getItem('powerUpsOwned') || '[]')

export const savePowerUpsOwned = powerUps =>
  window.localStorage.setItem('powerUpsOwned', JSON.stringify(powerUps))
